import { makePlaylist } from '../entities';
import { PlaylistsDb, Playlist } from './types';

export default function makeAddPlaylist({ playlistsDb }: { playlistsDb: PlaylistsDb; }) {
    return async function addPlaylist(playlistInfo: {
        title: string;
        description: string;
    }): Promise<Playlist> {
        const playlist = makePlaylist(playlistInfo);
        const exists = await playlistsDb.findByHash({ hash: playlist.getHash() });

        if (exists) {
            return exists;
        }

        // const playlistSource = playlist.getSource();
        return playlistsDb.insert({
            id: playlist.getId(),
            title: playlist.getTitle(),
            description: playlist.getDescription(),
            hash: playlist.getHash(),
        });
    };
}
