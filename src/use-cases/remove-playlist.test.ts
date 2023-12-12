import makeRemovePlaylist from './remove-playlist';

// Mock the PlaylistsDb dependency
const mockPlaylistsDb = {
    findByHash: jest.fn(),
    insert: jest.fn(),
    findAll: jest.fn(),
    findById: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
};

const removePlaylist = makeRemovePlaylist({ playlistsDb: mockPlaylistsDb });

describe('removePlaylist', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should throw an error if no id is provided', async () => {
        // Perform the remove without providing an id and expect it to throw an error
        await expect(removePlaylist({ /* no id provided */ } as any)).rejects.toThrow('You must supply a playlist id.');

        // Check if the database findById method is not called
        expect(mockPlaylistsDb.findById).not.toHaveBeenCalled();

        // Check that the database remove method is not called
        expect(mockPlaylistsDb.remove).not.toHaveBeenCalled();
    });


    it('should remove a playlist when it exists in the database', async () => {
        const existingPlaylist = {
            id: 'existing-playlist-id',
            title: 'Existing Playlist',
            description: 'Existing Description',
            hash: 'existing-playlist-hash',
        };

        mockPlaylistsDb.findById.mockResolvedValue(existingPlaylist);

        const result = await removePlaylist({ id: existingPlaylist.id });

        // Check if the database findById method is called with the correct parameters
        expect(mockPlaylistsDb.findById).toHaveBeenCalledWith({ id: existingPlaylist.id });

        // Check if the database remove method is called with the correct parameters
        expect(mockPlaylistsDb.remove).toHaveBeenCalledWith(existingPlaylist);

        // Check if the result indicates that the playlist was deleted
        expect(result).toEqual({
            deletedCount: 1,
            message: 'Playlist deleted.',
        });
    });

    it('should return a message when trying to remove a non-existent playlist', async () => {
        // Mock that the playlist does not exist in the database
        mockPlaylistsDb.findById.mockResolvedValue(null);

        const nonExistentId = 'non-existent-id';
        const result = await removePlaylist({ id: nonExistentId });

        // Check if the database findById method is called with the correct parameters
        expect(mockPlaylistsDb.findById).toHaveBeenCalledWith({ id: nonExistentId });

        // Check if the result indicates that nothing was deleted
        expect(result).toEqual({
            deletedCount: 0,
            message: 'Playlist not found, nothing to delete.',
        });

        // Check that the database remove method is not called
        expect(mockPlaylistsDb.remove).not.toHaveBeenCalled();
    });
});
