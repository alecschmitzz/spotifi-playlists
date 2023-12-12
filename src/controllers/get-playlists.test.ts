import makeGetPlaylists from "./get-playlists";

describe("getPlaylists", () => {
    it("should return a list of playlists and status code 200 if playlists are found", async () => {
        // Arrange
        const listPlaylists = jest.fn().mockResolvedValue([
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
        ]);

        const getPlaylists = makeGetPlaylists({ listPlaylists });

        const httpRequest = {
            params: {},
            body: {},
            query: {},
            method: "GET",
            path: "/api/playlists",
            headers: {},
        };

        // Act
        const result = await getPlaylists(httpRequest);

        // Assert
        expect(listPlaylists).toHaveBeenCalled();
        expect(result).toEqual({
            headers: { "Content-Type": "application/json" },
            statusCode: 200,
            body: [
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
            ],
        });
    });

    it("should return status code 400 if an error occurs during playlist listing", async () => {
        // Arrange
        const listPlaylists = jest.fn().mockRejectedValue(new Error("List error"));

        const getPlaylists = makeGetPlaylists({ listPlaylists });

        const httpRequest = {
            params: {},
            body: {},
            query: {},
            method: "GET",
            path: "/api/playlists",
            headers: {},
        };

        // Act
        const result = await getPlaylists(httpRequest);

        // Assert
        expect(listPlaylists).toHaveBeenCalled();
        expect(result).toEqual({
            headers: { "Content-Type": "application/json" },
            statusCode: 400,
            body: { error: "List error" },
        });
    });
});
