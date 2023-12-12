import { HttpRequest, Playlist } from "../use-cases/types";

interface GetPlaylistDependencies {
    getSinglePlaylist: ({ id, includeSongs }: { id: string; includeSongs: boolean }) => Promise<Playlist | null>;
}

export default function makeGetPlaylist({ getSinglePlaylist }: GetPlaylistDependencies) {
    return async function getPlaylist(httpRequest: HttpRequest) {
        const headers = {
            'Content-Type': 'application/json',
        };
        try {
            const playlist = await getSinglePlaylist({ id: httpRequest.params.id, includeSongs: httpRequest.query.includeSongs === 'true' });
            return {
                headers,
                statusCode: playlist ? 200 : 404,
                body: playlist,
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
