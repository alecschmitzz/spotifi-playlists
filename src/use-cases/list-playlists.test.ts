import makeListPlaylists from './list-playlists';

// Mock the PlaylistsDb dependency
const mockPlaylistsDb = {
    findByHash: jest.fn(),
    insert: jest.fn(),
    findAll: jest.fn(),
    findById: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
};

const listPlaylists = makeListPlaylists({ playlistsDb: mockPlaylistsDb });

describe('listPlaylists', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should return a list of playlists when they exist in the database', async () => {
        const existingPlaylists = [
            {
                id: "playlist-id-1",
                title: "Playlist 1",
                description: "Description 1",
                hash: "playlist-hash-1",
            },
            {
                id: "playlist-id-2",
                title: "Playlist 2",
                description: "Description 2",
                hash: "playlist-hash-2",
            },
        ];

        mockPlaylistsDb.findAll.mockResolvedValue(existingPlaylists);

        const result = await listPlaylists();

        // Check if the database findAll method is called
        expect(mockPlaylistsDb.findAll).toHaveBeenCalled();

        // Check if the result is an array of existing playlists
        expect(result).toEqual(existingPlaylists);
    });

    it('should return an empty array when no playlists exist in the database', async () => {
        // Mock that there are no playlists in the database
        mockPlaylistsDb.findAll.mockResolvedValue([]);

        const result = await listPlaylists();

        // Check if the database findAll method is called
        expect(mockPlaylistsDb.findAll).toHaveBeenCalled();

        // Check if the result is an empty array
        expect(result).toEqual([]);
    });
});
