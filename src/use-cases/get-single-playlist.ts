import { Playlist, PlaylistsDb } from "./types";

export default function makeGetSinglePlaylist({ playlistsDb }: { playlistsDb: PlaylistsDb; }) {
    return async function getSinglePlaylist({ id, includeSongs }: { id: string, includeSongs: boolean }): Promise<Playlist | null> {
        const playlist = await playlistsDb.findById({ id, includeSongs });
        return playlist;
    };
}
