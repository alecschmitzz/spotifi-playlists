import { HttpRequest, Playlist } from "../use-cases/types";

interface GetPlaylistsDependencies {
    listPlaylists: () => Promise<Playlist[]>;
}

export default function makeGetPlaylists({ listPlaylists }: GetPlaylistsDependencies) {
    return async function getPlaylists(httpRequest: HttpRequest) {
        const headers = {
            'Content-Type': 'application/json',
        };
        try {
            const playlists = await listPlaylists();
            return {
                headers,
                statusCode: 200,
                body: playlists,
            };
        } catch (e: unknown) {
            // TODO: Error logging
            // console.error(e);
            return {
                headers,
                statusCode: 400,
                body: {
                    error: (e as Error).message,
                },
            };
        }
    };
}
