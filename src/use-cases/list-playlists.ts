import { Playlist, PlaylistsDb } from "./types";

export default function makeListPlaylists({ playlistsDb }: { playlistsDb: PlaylistsDb; }) {
    return async function listPlaylists(): Promise<Playlist[]> {
        const playlists = await playlistsDb.findAll();
        return playlists;
    };
}
