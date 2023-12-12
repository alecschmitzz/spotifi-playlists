import makeDeletePlaylist from "./delete-playlist";

describe("deletePlaylist", () => {
    it("should delete a playlist and return 200 if deletedCount is greater than 0", async () => {
        // Arrange
        const removePlaylist = jest.fn().mockResolvedValue({ deletedCount: 1 });
        const deletePlaylist = makeDeletePlaylist({ removePlaylist });

        // Extend the httpRequest object to include additional properties
        const httpRequest = {
            params: {
                id: "playlist-id-to-delete",
            },
            body: {}, // Include an empty body
            query: {}, // Include an empty query
            method: "DELETE", // Include a method
            path: "/api/playlists", // Include a path
            headers: {}, // Include headers
        };

        // Act
        const result = await deletePlaylist(httpRequest);

        // Assert
        expect(removePlaylist).toHaveBeenCalledWith({ id: "playlist-id-to-delete" });
        expect(result).toEqual({
            headers: { "Content-Type": "application/json" },
            statusCode: 200,
            body: { deleted: { deletedCount: 1 } },
        });
    });

    it("should return 404 if deletedCount is 0", async () => {
        // Arrange
        const removePlaylist = jest.fn().mockResolvedValue({ deletedCount: 0 });
        const deletePlaylist = makeDeletePlaylist({ removePlaylist });

        const httpRequest = {
            params: {
                id: "non-existent-playlist-id",
            },
            body: {},
            query: {},
            method: "DELETE",
            path: "/api/playlists",
            headers: {},
        };

        // Act
        const result = await deletePlaylist(httpRequest);

        // Assert
        expect(removePlaylist).toHaveBeenCalledWith({ id: "non-existent-playlist-id" });
        expect(result).toEqual({
            headers: { "Content-Type": "application/json" },
            statusCode: 404,
            body: { deleted: { deletedCount: 0 } },
        });
    });

    it("should return 400 if an error occurs during deletion", async () => {
        // Arrange
        const removePlaylist = jest.fn().mockRejectedValue(new Error("Delete error"));
        const deletePlaylist = makeDeletePlaylist({ removePlaylist });

        const httpRequest = {
            params: {
                id: "playlist-id-to-delete",
            },
            body: {},
            query: {},
            method: "DELETE",
            path: "/api/playlists",
            headers: {},
        };

        // Act
        const result = await deletePlaylist(httpRequest);

        // Assert
        expect(removePlaylist).toHaveBeenCalledWith({ id: "playlist-id-to-delete" });
        expect(result).toEqual({
            headers: { "Content-Type": "application/json" },
            statusCode: 400,
            body: { error: "Delete error" },
        });
    });
});
