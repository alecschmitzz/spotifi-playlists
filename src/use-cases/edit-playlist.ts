import { makePlaylist } from '../entities';
import { PlaylistsDb } from './types';

export default function makeEditPlaylist({ playlistsDb }: { playlistsDb: PlaylistsDb; }) {
    return async function editPlaylist({ id, ...changes }: { id: string;[key: string]: any }) {
        if (!id) {
            throw new Error('You must supply an id.');
        }

        if (
            !changes.title &&
            !changes.description
        ) {
            throw new Error('You must supply at least one change to edit.');
        }

        const existing = await playlistsDb.findById({ id });

        if (!existing) {
            throw new RangeError('Playlist not found.');
        }


        const playlist = makePlaylist({ ...existing, ...changes } as { title: string; description: string; });


        if (playlist.getHash() === existing.hash) {
            return existing;
        }

        const updated = await playlistsDb.update({
            id: playlist.getId(),
            title: playlist.getTitle(),
            description: playlist.getDescription(),
            hash: playlist.getHash(),
        });

        return { ...existing, ...updated };
    };
}
