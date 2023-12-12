// playlists-db.test.ts
import makePlaylistsDb from './db';
import { prismaMock, Playlist } from './singleton';

describe('Playlists Database', () => {
    const playlistsDb = makePlaylistsDb({ prisma: prismaMock });

    beforeEach(() => {
        // Manually clear mock function calls
        jest.clearAllMocks();
    });

    it('findAll should return all playlists', async () => {
        // Arrange
        const expectedPlaylists: Playlist[] = [
            { id: '1', title: 'Playlist 1', description: 'Description 1', hash: 'hash1', createdAt: new Date(), updatedAt: new Date() },
            { id: '2', title: 'Playlist 2', description: 'Description 2', hash: 'hash2', createdAt: new Date(), updatedAt: new Date() },
        ];
        prismaMock.playlist.findMany.mockResolvedValueOnce(expectedPlaylists);

        // Act
        const result = await playlistsDb.findAll();

        // Assert
        expect(result).toEqual(expectedPlaylists);
        expect(prismaMock.playlist.findMany).toHaveBeenCalledWith();
    });

    it('findById should return a specific playlist by ID', async () => {
        // Arrange
        const playlistId = '1';
        const expectedPlaylist: Playlist = {
            id: playlistId,
            title: 'Playlist 1',
            description: 'Description 1',  // Placeholder value for description
            hash: 'hash1',       // Placeholder value for hash
            createdAt: new Date(),    // Placeholder value for createdAt
            updatedAt: new Date(),    // Placeholder value for updatedAt
        };
        prismaMock.playlist.findFirst.mockResolvedValueOnce(expectedPlaylist);

        // Act
        const result = await playlistsDb.findById({ id: playlistId });

        // Assert
        expect(result).toEqual(expectedPlaylist);
        expect(prismaMock.playlist.findFirst).toHaveBeenCalledWith({ where: { id: playlistId } });
    });

    it('findByHash should return a specific playlist by hash', async () => {
        // Arrange
        const hash = 'hash1';
        const expectedPlaylist: Playlist = {
            id: '1',
            title: 'Playlist 1',
            description: 'Description 1',  // Placeholder value for description
            hash: 'hash1',       // Placeholder value for hash
            createdAt: new Date(),    // Placeholder value for createdAt
            updatedAt: new Date(),    // Placeholder value for updatedAt
        };

        // Mocking the behavior
        prismaMock.playlist.findFirst.mockResolvedValueOnce(expectedPlaylist);

        // Act
        const result = await playlistsDb.findByHash({ hash });

        // Assert
        expect(result).toEqual(expectedPlaylist);
        expect(prismaMock.playlist.findFirst).toHaveBeenCalledWith({ where: { hash } });
    });

    it('insert should insert a new playlist', async () => {
        // Arrange
        const newPlaylist: Playlist = {
            id: '3',  // Replace with a unique ID
            title: 'New Playlist',
            description: 'New Description',
            hash: 'newHash',
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        // Mocking the behavior
        prismaMock.playlist.create.mockResolvedValueOnce(newPlaylist);

        // Act
        const result = await playlistsDb.insert(newPlaylist);

        // Assert
        expect(result).toEqual(newPlaylist);
        expect(prismaMock.playlist.create).toHaveBeenCalledWith({ data: newPlaylist });
    });

    it('update should update a specific playlist by ID', async () => {
        // Arrange
        const playlistId = '1';
        const updatedPlaylistInfo = {
            title: 'Updated Playlist Title',
            description: 'Updated Description',
            // ... other properties you want to update
        };

        const originalPlaylist: Playlist = {
            id: playlistId,
            title: 'Playlist 1',
            description: 'Description 1',
            hash: 'hash1',
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        // Mocking the behavior
        prismaMock.playlist.update.mockResolvedValueOnce({ ...originalPlaylist, ...updatedPlaylistInfo });

        // Act
        const result = await playlistsDb.update({ id: playlistId, ...updatedPlaylistInfo });

        // Assert
        expect(result).toEqual({ ...originalPlaylist, ...updatedPlaylistInfo });
        expect(prismaMock.playlist.update).toHaveBeenCalledWith({
            where: { id: playlistId },
            data: updatedPlaylistInfo,
        });
    });

    it('remove should delete a specific playlist by ID', async () => {
        // Arrange
        const playlistId = '1';
        const expectedPlaylist: Playlist = {
            id: playlistId,
            title: 'Playlist 1',
            description: 'Description 1',  // Placeholder value for description
            hash: 'hash1',       // Placeholder value for hash
            createdAt: new Date(),    // Placeholder value for createdAt
            updatedAt: new Date(),    // Placeholder value for updatedAt
        };

        // Mocking the behavior
        prismaMock.playlist.delete.mockResolvedValueOnce(expectedPlaylist);

        // Act
        const result = await playlistsDb.remove({ id: playlistId });

        // Assert
        expect(result).toEqual(expectedPlaylist);
        expect(prismaMock.playlist.delete).toHaveBeenCalledWith({ where: { id: playlistId } });
    });


});
