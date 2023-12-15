import { HttpRequest, Playlist } from "../use-cases/types";

interface AddSongToPlaylistDependencies {
    addSongToPlaylist: (songId: string, playlistId: string) => Promise<Playlist | null | undefined>;
}

export default function makeDeletePlaylist({ addSongToPlaylist }: AddSongToPlaylistDependencies) {
    return async function deletePlaylist(httpRequest: HttpRequest) {
        const headers = {
            'Content-Type': 'application/json',
        };
        try {
            const added = await addSongToPlaylist(httpRequest.params.songId, httpRequest.params.playlistId);
            return {
                headers,
                statusCode: added?.id === httpRequest.params.playlistId ? 201 : 400,
                body: { added },
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