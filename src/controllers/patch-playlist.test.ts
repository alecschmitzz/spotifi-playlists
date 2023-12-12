import makePatchPlaylist from "./patch-playlist";

describe("patchPlaylist", () => {
    it("should patch an existing playlist and return status code 200", async () => {
        // Arrange
        const editPlaylist = jest.fn().mockResolvedValue({
            id: "playlist-id-1",
            title: "Patched Playlist",
            description: "Patched Description",
            hash: "patched-playlist-hash",
            updatedAt: new Date().toISOString(),
        });

        const patchPlaylist = makePatchPlaylist({ editPlaylist });

        const httpRequest = {
            params: { id: "playlist-id-1" },
            body: {
                title: "Patched Playlist",
                description: "Patched Description",
            },
            query: {},
            method: "PATCH",
            path: "/api/playlists/playlist-id-1",
            headers: {},
        };

        // Act
        const result = await patchPlaylist(httpRequest);

        // Assert
        expect(editPlaylist).toHaveBeenCalledWith({
            id: "playlist-id-1",
            title: "Patched Playlist",
            description: "Patched Description",
        });
        expect(result).toEqual({
            headers: {
                "Content-Type": "application/json",
                "Last-Modified": expect.any(String),
            },
            statusCode: 200,
            body: {
                patched: {
                    id: "playlist-id-1",
                    title: "Patched Playlist",
                    description: "Patched Description",
                    hash: "patched-playlist-hash",
                    updatedAt: expect.any(String),
                },
            },
        });
    });

    it("should return status code 404 if the playlist to patch is not found", async () => {
        // Arrange
        const editPlaylist = jest.fn().mockRejectedValue(new RangeError("Playlist not found"));

        const patchPlaylist = makePatchPlaylist({ editPlaylist });

        const httpRequest = {
            params: { id: "non-existing-id" },
            body: {
                title: "Patched Playlist",
                description: "Patched Description",
            },
            query: {},
            method: "PATCH",
            path: "/api/playlists/non-existing-id",
            headers: {},
        };

        // Act
        const result = await patchPlaylist(httpRequest);

        // Assert
        expect(editPlaylist).toHaveBeenCalledWith({
            id: "non-existing-id",
            title: "Patched Playlist",
            description: "Patched Description",
        });
        expect(result).toEqual({
            headers: {
                "Content-Type": "application/json",
            },
            statusCode: 404,
            body: {
                error: "Playlist not found",
            },
        });
    });

    it("should return status code 400 for other errors during patching", async () => {
        // Arrange
        const editPlaylist = jest.fn().mockRejectedValue(new Error("Invalid input"));

        const patchPlaylist = makePatchPlaylist({ editPlaylist });

        const httpRequest = {
            params: { id: "playlist-id-1" },
            body: {
                title: "Patched Playlist",
                description: "Patched Description",
            },
            query: {},
            method: "PATCH",
            path: "/api/playlists/playlist-id-1",
            headers: {},
        };

        // Act
        const result = await patchPlaylist(httpRequest);

        // Assert
        expect(editPlaylist).toHaveBeenCalledWith({
            id: "playlist-id-1",
            title: "Patched Playlist",
            description: "Patched Description",
        });
        expect(result).toEqual({
            headers: {
                "Content-Type": "application/json",
            },
            statusCode: 400,
            body: {
                error: "Invalid input",
            },
        });
    });
});
