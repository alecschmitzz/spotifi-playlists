import { HttpRequest, Playlist } from "../use-cases/types";

interface PostPlaylistDependencies {
    editPlaylist: ({ id, ...changes }: { [key: string]: any; id: string }) => Promise<Playlist>;
}

export default function makePatchPlaylist({ editPlaylist }: PostPlaylistDependencies) {
    return async function patchPlaylist(httpRequest: HttpRequest) {
        try {
            const { ...playlistInfo } = httpRequest.body;
            const toEdit = {
                ...playlistInfo,
                id: httpRequest.params.id,
            };
            const patched = await editPlaylist(toEdit);
            return {
                headers: {
                    'Content-Type': 'application/json',
                    'Last-Modified': new Date(patched.updatedAt!).toUTCString(),
                },
                statusCode: 200,
                body: { patched },
            };
        } catch (e: any) {
            // TODO: Error logging
            // console.log(e);
            if (e.name === 'RangeError') {
                return {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    statusCode: 404,
                    body: {
                        error: e.message,
                    },
                };
            }
            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 400,
                body: {
                    error: e.message,
                },
            };
        }
    };
}
