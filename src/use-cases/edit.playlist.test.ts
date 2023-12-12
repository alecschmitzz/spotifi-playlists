
import Id from '../Id';
import makeEditPlaylist from './edit-playlist';

// Mock the PlaylistsDb dependency
const mockPlaylistsDb = {
    findByHash: jest.fn(),
    insert: jest.fn(),
    findAll: jest.fn(),
    findById: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
};


const editPlaylist = makeEditPlaylist({ playlistsDb: mockPlaylistsDb });

describe('editPlaylist', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should throw an error if no id is provided', async () => {
        // Perform the edit without providing an id and expect it to throw an error
        await expect(editPlaylist({ /* no id provided */ } as any)).rejects.toThrow('You must supply an id.');

        // Check if the database findById method is not called
        expect(mockPlaylistsDb.findById).not.toHaveBeenCalled();

        // Check that the database update method is not called
        expect(mockPlaylistsDb.update).not.toHaveBeenCalled();
    });

    it('should return existing playlist if the hash is unchanged', async () => {
        const existingPlaylist = {
            id: "xuooqvxo9wp0aomzmd7w5r5d",
            title: "Existing Playlist",
            description: "Existing Description",
            hash: "650a535f98edf1f0f12f27f49ef1e416",
        };

        mockPlaylistsDb.findById.mockResolvedValue(existingPlaylist);
        mockPlaylistsDb.update.mockResolvedValue({ patched: existingPlaylist }); // Assume no changes

        const changes = {
            // No changes provided
            description: "Existing Description",
        };

        const result = await editPlaylist({ id: existingPlaylist.id, ...changes });

        // Check if the database findById method is called with the correct parameters
        expect(mockPlaylistsDb.findById).toHaveBeenCalledWith({ id: existingPlaylist.id });

        // Check that the database update method is not called
        expect(mockPlaylistsDb.update).not.toHaveBeenCalled();

        // Check if the result is the existing playlist
        expect(result).toEqual(existingPlaylist);
    });

    it('should edit an existing playlist in the database', async () => {
        const existingPlaylist = {
            id: "rzl50g5w2kyei11cca1l67rb",
            title: "Existing Playlist",
            description: "Existing Description",
            hash: "existing-playlist-hash",
        };

        mockPlaylistsDb.findById.mockResolvedValue(existingPlaylist);
        mockPlaylistsDb.update.mockImplementation((playlist) => Promise.resolve({ patched: playlist }));

        const changes = {
            title: "Updated Playlist",
            duration: 200,
            genre: "Pop",
        };


        const result = await editPlaylist({ id: existingPlaylist.id, ...changes });

        // Check if the database findById method is called with the correct parameters
        expect(mockPlaylistsDb.findById).toHaveBeenCalledWith({ id: existingPlaylist.id });

        // Check if the database update method is called with the correct parameters
        expect(mockPlaylistsDb.update).toHaveBeenCalledWith({
            id: existingPlaylist.id,
            title: changes.title,
            description: existingPlaylist.description, // Assume unchanged
            hash: expect.any(String), // Updated hash
        });

        // Check if the result is the updated playlist
        expect(result).toEqual(expect.objectContaining({
            patched: {
                id: existingPlaylist.id,
                title: changes.title,
                description: existingPlaylist.description, // Assume unchanged
                hash: expect.any(String), // Updated hash
            }
        }));

        // Check if the result has a valid CUID as the ID
        expect(Id.isValidId(result.id!)).toBe(true);
    });

    it('should throw an error if the playlist to edit is not found in the database', async () => {
        // Mock that the playlist does not exist in the database
        mockPlaylistsDb.findById.mockResolvedValue(null);

        const changes = {
            title: "Updated Playlist",
        };

        // Perform the edit and expect it to throw an error
        await expect(editPlaylist({ id: "non-existent-id", ...changes })).rejects.toThrow('Playlist not found.');

        // Check if the database findById method is called with the correct parameters
        expect(mockPlaylistsDb.findById).toHaveBeenCalledWith({ id: "non-existent-id" });

        // Check that the database update method is not called
        expect(mockPlaylistsDb.update).not.toHaveBeenCalled();
    });

    it('should throw an error if no changes are provided', async () => {
        // Mock that the playlist exists in the database
        const existingPlaylist = {
            id: "existing-playlist-id",
            title: "Existing Playlist",
            description: "Existing Description",
            hash: "existing-playlist-hash",
        };

        mockPlaylistsDb.findById.mockResolvedValue(existingPlaylist);

        // Perform the edit with no changes and expect it to throw an error
        await expect(editPlaylist({ id: existingPlaylist.id })).rejects.toThrow('You must supply at least one change to edit.');

        // Check if the database findById method is called with the correct parameters
        expect(mockPlaylistsDb.findById).not.toHaveBeenCalled();

        // Check that the database update method is not called
        expect(mockPlaylistsDb.update).not.toHaveBeenCalled();
    });
});
