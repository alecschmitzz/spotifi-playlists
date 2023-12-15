import { HttpRequest } from "../use-cases/types";

interface AddSongToPlaylistDependencies {
    addSongToPlaylist: (songId: string, playlistId: string) => Promise<{ songId: string; playlistId: string; assignedAt: Date; } | undefined>;
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
                statusCode: added?.songId === httpRequest.params.songId ? 201 : 400,
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