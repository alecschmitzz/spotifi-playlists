import { Song } from ".";

export interface Playlist {
    getTitle: () => string;
    getDescription: () => string;
    getId: () => string;
    getHash: () => string;
    getSongs: () => Song[];
}

interface MakePlaylistOptions {
    Id: {
        makeId: () => string;
        isValidId: (id: string) => boolean;
    };
    md5: (text: string) => string;
    sanitize: (text: string) => string;
}

export function buildMakePlaylist({
    Id,
    md5,
    sanitize,
}: MakePlaylistOptions) {
    return function makePlaylist({
        title,
        description,
        id = Id.makeId(),
        songs = [], // Initialize songs as an empty array
    }: {
        title: string;
        description: string;
        id?: string;
        songs?: Song[]; // Accept a list of songs in the playlist
    }): Playlist {
        if (!Id.isValidId(id)) {
            throw new Error('Playlist must have a valid id.');
        }
        if (!title) {
            throw new Error('Playlist must have a title.');
        }
        if (!description) {
            throw new Error('Playlist must have an description.');
        }

        let sanitizedTitle = sanitize(title).trim();
        if (sanitizedTitle.length < 1) {
            throw new Error('Playlist title contains no usable text.');
        }
        let sanitizedDescription = sanitize(description).trim();
        if (sanitizedTitle.length < 1) {
            throw new Error('Playlist description contains no usable text.');
        }

        let hash: string;

        return Object.freeze({
            getTitle: () => sanitizedTitle,
            getDescription: () => sanitizedDescription,
            getId: () => id,
            getHash: () => hash || (hash = makeHash()),
            getSongs: () => [...songs], // Return a copy of the songs array
        });

        function makeHash() {
            return md5(
                sanitizedTitle +
                sanitizedDescription
            );
        }
    };
}