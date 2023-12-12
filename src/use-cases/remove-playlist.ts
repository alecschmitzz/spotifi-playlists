import { Playlist, PlaylistsDb } from "./types";

export interface RemovePlaylistResult {
    deletedCount: number;
    message: string;
}

export default function makeRemovePlaylist({ playlistsDb }: { playlistsDb: PlaylistsDb; }) {
    return async function removePlaylist({ id }: { id: string }): Promise<RemovePlaylistResult> {
        if (!id) {
            throw new Error('You must supply a playlist id.');
        }

        const playlistToDelete = await playlistsDb.findById({ id });

        if (!playlistToDelete) {
            return deleteNothing();
        }

        return deletePlaylist(playlistToDelete);
    };

    function deleteNothing(): RemovePlaylistResult {
        return {
            deletedCount: 0,
            message: 'Playlist not found, nothing to delete.',
        };
    }

    async function deletePlaylist(playlist: Playlist): Promise<RemovePlaylistResult> {
        await playlistsDb.remove(playlist);
        return {
            deletedCount: 1,
            message: 'Playlist deleted.',
        };
    }
}
