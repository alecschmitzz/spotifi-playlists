// Import necessary modules and functions
import { buildMakePlaylist, Playlist } from "./playlist";

// Mock dependencies
const mockMakeId = jest.fn().mockReturnValue("cfa8edwkk5f8ej3krimusxwr");
const mockMd5 = jest.fn().mockReturnValue("mocked-md5");
const mockSanitize = jest.fn().mockImplementation((text) => text);

// Mocked MakePlaylistOptions
const mockedMakePlaylistOptions = {
    Id: {
        makeId: mockMakeId,
        isValidId: jest.fn().mockReturnValue(true),
    },
    md5: mockMd5,
    sanitize: mockSanitize,
};

// Describe block for buildMakePlaylist tests
describe("buildMakePlaylist", () => {
    // beforeEach to reset mock functions before each test
    beforeEach(() => {
        jest.clearAllMocks();
    });

    // Test case for buildMakePlaylist function
    it("should return a function", () => {
        const makePlaylist = buildMakePlaylist(mockedMakePlaylistOptions);
        expect(typeof makePlaylist).toBe("function");
    });

    // Test case for makePlaylist function
    describe("makePlaylist", () => {
        // Test case for valid input
        it("should create a playlist with valid input", () => {
            const makePlaylist = buildMakePlaylist(mockedMakePlaylistOptions);

            const playlist = makePlaylist({
                id: "cfa8edwkk5f8ej3krimusxwr",
                title: "Test Playlist",
                description: "Test Description",
            });

            expect(playlist).toBeInstanceOf(Object);
            expect(playlist.getId()).toBe("cfa8edwkk5f8ej3krimusxwr");
            expect(playlist.getTitle()).toBe("Test Playlist");
            expect(playlist.getDescription()).toBe("Test Description");
            expect(playlist.getHash()).toBe("mocked-md5");
        });

        // Test case for missing required fields
        it("should throw an error for missing required fields", () => {
            const makePlaylist = buildMakePlaylist(mockedMakePlaylistOptions);

            expect(() => makePlaylist({} as any)).toThrow("Playlist must have a title.");
            expect(() => makePlaylist({ title: "Test Playlist" } as any)).toThrow("Playlist must have an description.");
        });

        // Test case for invalid id
        it("should throw an error for invalid id", () => {
            const makePlaylist = buildMakePlaylist(mockedMakePlaylistOptions);
            mockedMakePlaylistOptions.Id.isValidId.mockReturnValueOnce(false);

            expect(() => makePlaylist({ title: "Test Playlist", description: "Test Description" } as any)).toThrow("Playlist must have a valid id.");
        });

        // Test case for title sanitization and length check
        it("should throw an error for a title with no usable text", () => {
            const makePlaylist = buildMakePlaylist(mockedMakePlaylistOptions);
            mockedMakePlaylistOptions.sanitize.mockReturnValueOnce("");

            expect(() => makePlaylist({
                title: "   ",
                description: "Test Description",
            } as any)).toThrow("Playlist title contains no usable text.");
        });
    });
});

