import { PlaylistsDb, Playlist } from './types';

export interface AddSongToPlaylistResult {
    message: string;
}

export default function makeAddSongToPlaylist({ playlistsDb }: { playlistsDb: PlaylistsDb }) {
    return async function addSongToPlaylist(songId: string, playlistId: string): Promise<{ songId: string; playlistId: string; assignedAt: Date; } | undefined> {
        if (!songId) {
            throw new Error('You must supply a song id.');
        }
        if (!playlistId) {
            throw new Error('You must supply a playlist id.');
        }

        // Add Song To DB
        return await playlistsDb.addSongToPlaylist({
            songId,
            playlistId,
        });
    };
}
