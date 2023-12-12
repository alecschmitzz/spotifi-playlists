import { Playlist } from "../use-cases/types";

interface PostPlaylistDependencies {
    addPlaylist: (playlistInfo: {
        title: string;
        description: string;
    }) => Promise<Playlist>;
}

export default function makePostPlaylist({ addPlaylist }: PostPlaylistDependencies) {
    return async function postPlaylist(httpRequest: { body: any }) {
        const headers = {
            'Content-Type': 'application/json',
        };
        try {
            const { ...playlistInfo } = httpRequest.body;
            const added = await addPlaylist(playlistInfo);
            return {
                headers,
                statusCode: 201,
                body: added,
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
