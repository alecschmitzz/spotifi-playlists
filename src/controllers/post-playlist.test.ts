import makePostPlaylist from "./post-playlist";

describe("postPlaylist", () => {
    it("should add a new playlist and return status code 201", async () => {
        // Arrange
        const addPlaylist = jest.fn().mockResolvedValue({
            id: "new-playlist-id",
            title: "New Playlist",
            description: "New Description",
            hash: "new-playlist-hash",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        });

        const postPlaylist = makePostPlaylist({ addPlaylist });

        const httpRequest = {
            body: {
                title: "New Playlist",
                description: "New Description",
            },
        };

        // Act
        const result = await postPlaylist(httpRequest);

        // Assert
        expect(addPlaylist).toHaveBeenCalledWith({
            title: "New Playlist",
            description: "New Description",
        });
        expect(result).toEqual({
            headers: {
                "Content-Type": "application/json",
            },
            statusCode: 201,
            body: {
                id: "new-playlist-id",
                title: "New Playlist",
                description: "New Description",
                hash: "new-playlist-hash",
                createdAt: expect.any(String),
                updatedAt: expect.any(String),
            },
        });
    });

    it("should return status code 400 for errors during playlist addition", async () => {
        // Arrange
        const addPlaylist = jest.fn().mockRejectedValue(new Error("Invalid input"));

        const postPlaylist = makePostPlaylist({ addPlaylist });

        const httpRequest = {
            body: {
                title: "New Playlist",
                description: "New Description",
            },
        };

        // Act
        const result = await postPlaylist(httpRequest);

        // Assert
        expect(addPlaylist).toHaveBeenCalledWith({
            title: "New Playlist",
            description: "New Description",
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
