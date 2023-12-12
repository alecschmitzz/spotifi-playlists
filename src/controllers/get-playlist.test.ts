import makeGetPlaylist from "./get-playlist";

describe("getPlaylist", () => {
    it("should return a playlist and status code 200 if the playlist is found", async () => {
        // Arrange
        const getSinglePlaylist = jest.fn().mockResolvedValue({
            id: "test-playlist-id",
            title: "Test Playlist",
            description: "Test Description",
            hash: "test-playlist-hash",
        });

        const getPlaylist = makeGetPlaylist({ getSinglePlaylist });

        const httpRequest = {
            params: {
                id: "test-playlist-id",
            },
            body: {},
            query: {},
            method: "GET",
            path: "/api/playlists",
            headers: {},
        };

        // Act
        const result = await getPlaylist(httpRequest);

        // Assert
        expect(getSinglePlaylist).toHaveBeenCalledWith({ id: "test-playlist-id" });
        expect(result).toEqual({
            headers: { "Content-Type": "application/json" },
            statusCode: 200,
            body: {
                id: "test-playlist-id",
                title: "Test Playlist",
                description: "Test Description",
                hash: "test-playlist-hash",
            },
        });
    });

    it("should return status code 404 if the playlist is not found", async () => {
        // Arrange
        const getSinglePlaylist = jest.fn().mockResolvedValue(null);

        const getPlaylist = makeGetPlaylist({ getSinglePlaylist });

        const httpRequest = {
            params: {
                id: "non-existent-playlist-id",
            },
            body: {},
            query: {},
            method: "GET",
            path: "/api/playlists",
            headers: {},
        };

        // Act
        const result = await getPlaylist(httpRequest);

        // Assert
        expect(getSinglePlaylist).toHaveBeenCalledWith({ id: "non-existent-playlist-id" });
        expect(result).toEqual({
            headers: { "Content-Type": "application/json" },
            statusCode: 404,
            body: null,
        });
    });

    it("should return status code 400 if an error occurs during retrieval", async () => {
        // Arrange
        const getSinglePlaylist = jest.fn().mockRejectedValue(new Error("Retrieve error"));

        const getPlaylist = makeGetPlaylist({ getSinglePlaylist });

        const httpRequest = {
            params: {
                id: "test-playlist-id",
            },
            body: {},
            query: {},
            method: "GET",
            path: "/api/playlists",
            headers: {},
        };

        // Act
        const result = await getPlaylist(httpRequest);

        // Assert
        expect(getSinglePlaylist).toHaveBeenCalledWith({ id: "test-playlist-id" });
        expect(result).toEqual({
            headers: { "Content-Type": "application/json" },
            statusCode: 400,
            body: { error: "Retrieve error" },
        });
    });
});
