import request from 'supertest';
import app from './index'; // Adjust the import path

let createdPlaylistId: string;

describe('Integration Tests', () => {
    it('should create a new playlist', async () => {
        const response = await request(app)
            .post('/api/playlists')
            .send({
                title: 'Test Playlist',
                description: 'Test Artist',
            });

        expect(response.status).toBe(201);
        expect(response.body.title).toBe('Test Playlist');

        createdPlaylistId = response.body.id;
        // Add more assertions as needed
    });

    it('should get all playlists', async () => {
        const response = await request(app).get('/api/playlists');

        expect(response.status).toBe(200);
        // Add more assertions as needed
    });

    it('should get a specific playlist', async () => {
        const playlistId = createdPlaylistId;
        const response = await request(app).get(`/api/playlists/${playlistId}`);

        expect(response.status).toBe(200);
        // Add more assertions as needed
    });

    it('should update a playlist', async () => {
        const playlistId = createdPlaylistId;
        const response = await request(app)
            .patch(`/api/playlists/${playlistId}`)
            .send({
                title: 'Updated Test Playlist',
            });

        expect(response.status).toBe(200);
        expect(response.body.patched.title).toBe('Updated Test Playlist');
    });

    it('should delete a playlist', async () => {
        const playlistId = createdPlaylistId;
        const response = await request(app).delete(`/api/playlists/${playlistId}`);

        expect(response.status).toBe(200);
        expect(response.body.deleted.deletedCount).toBe(1);
    });

    it('should handle not found routes', async () => {
        const response = await request(app).get('/api/nonexistent');

        expect(response.status).toBe(404);
    });
});
