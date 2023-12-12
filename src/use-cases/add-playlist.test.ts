import Id from '../Id';
import makeAddPlaylist from './add-playlist';


// Mock the PlaylistsDb dependency
const mockPlaylistsDb = {
    findByHash: jest.fn(),
    insert: jest.fn(),
    findAll: jest.fn(),
    findById: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
};

const addPlaylist = makeAddPlaylist({ playlistsDb: mockPlaylistsDb });

describe('addPlaylist', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should add a new playlist to the database if it does not exist', async () => {
        // Mock that the playlist does not exist in the database
        mockPlaylistsDb.findByHash.mockResolvedValue(null);
        mockPlaylistsDb.insert.mockImplementation((playlist) => Promise.resolve(playlist));

        const playlistInfo = {
            title: "Test Playlist",
            description: "Test Description",
        };

        const result = await addPlaylist(playlistInfo);

        // Check if the database insert method is called with the correct parameters
        expect(mockPlaylistsDb.insert).toHaveBeenCalledWith(expect.objectContaining({
            id: expect.any(String),
            hash: expect.any(String),
            ...playlistInfo,
        }));

        // Check if the result is the same as the inserted playlist
        expect(result).toEqual(expect.objectContaining({
            id: expect.any(String),
            hash: expect.any(String),
            ...playlistInfo,
        }));


        // Check if the result has a valid CUID as the ID
        expect(Id.isValidId(result.id!)).toBe(true);
    });

    it('should return the existing playlist if it already exists in the database', async () => {
        // Mock that the playlist exists in the database
        const existingPlaylist = {
            id: "existing-playlist-id",
            title: "Existing Playlist",
            description: "Existing Description",
            hash: "existing-playlist-hash",
        };

        mockPlaylistsDb.findByHash.mockResolvedValue(existingPlaylist);


        const playlistInfo = {
            title: "Existing Playlist",
            description: "Existing Description",
        };

        const result = await addPlaylist(playlistInfo);

        // Check if the database insert method is not called
        expect(mockPlaylistsDb.insert).not.toHaveBeenCalled();

        // Check if the result is the same as the existing playlist
        expect(result).toEqual(existingPlaylist);
    });
});
