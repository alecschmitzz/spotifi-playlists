import makeGetSinglePlaylist from './get-single-playlist';

// Mock the PlaylistsDb dependency
const mockPlaylistsDb = {
    findByHash: jest.fn(),
    insert: jest.fn(),
    findAll: jest.fn(),
    findById: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
};

const getSinglePlaylist = makeGetSinglePlaylist({ playlistsDb: mockPlaylistsDb });

describe('getSinglePlaylist', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should return a playlist when it exists in the database', async () => {
        const existingPlaylist = {
            id: 'existing-playlist-id',
            title: 'Existing Playlist',
            description: 'Existing Description',
            hash: 'existing-playlist-hash',
        };

        mockPlaylistsDb.findById.mockResolvedValue(existingPlaylist);

        const result = await getSinglePlaylist({ id: existingPlaylist.id });

        // Check if the database findById method is called with the correct parameters
        expect(mockPlaylistsDb.findById).toHaveBeenCalledWith({ id: existingPlaylist.id });

        // Check if the result is the same as the existing playlist
        expect(result).toEqual(existingPlaylist);
    });

    it('should return null when the playlist does not exist in the database', async () => {
        // Mock that the playlist does not exist in the database
        mockPlaylistsDb.findById.mockResolvedValue(null);

        const nonExistentId = 'non-existent-id';
        const result = await getSinglePlaylist({ id: nonExistentId });

        // Check if the database findById method is called with the correct parameters
        expect(mockPlaylistsDb.findById).toHaveBeenCalledWith({ id: nonExistentId });

        // Check if the result is null
        expect(result).toBeNull();
    });
});
