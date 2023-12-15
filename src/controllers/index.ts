import {
    addPlaylist,
    getSinglePlaylist,
    listPlaylists,
    editPlaylist,
    removePlaylist,
    addSongToPlaylist
} from '../use-cases';
import makePostPlaylist from './post-playlist';
import makeGetPlaylists from './get-playlists';
import makeGetPlaylist from './get-playlist';
import makePatchPlaylist from './patch-playlist';
import makeDeletePlaylist from './delete-playlist';
import makeAddSongToPlaylist from './add-song-to-playlist';
import notFound from './not-found';

import { HttpRequest, Playlist } from '../use-cases/types';

interface ControllerDependencies {
    addPlaylist: (playlistInfo: Playlist) => Promise<Playlist>;
    getSinglePlaylist: (playlistInfo: { id: string; includeSongs: boolean }) => Promise<Playlist>;
    listPlaylists: () => Promise<Playlist[]>;
    editPlaylist: (playlistInfo: Playlist) => Promise<Playlist>;
    removePlaylist: (playlistInfo: { id: string }) => Promise<{ deletedCount: number }>;
    addSongToPlaylist: (params: { id: string, songId: string }) => Promise<Playlist | null | undefined>;
}

const postPlaylist = makePostPlaylist({ addPlaylist });
const getPlaylist = makeGetPlaylist({ getSinglePlaylist });
const getPlaylists = makeGetPlaylists({ listPlaylists });
const patchPlaylist = makePatchPlaylist({ editPlaylist });
const deletePlaylist = makeDeletePlaylist({ removePlaylist });
const postSongToPlaylist = makeAddSongToPlaylist({ addSongToPlaylist });

const playlistController = Object.freeze({
    postPlaylist,
    getPlaylist,
    getPlaylists,
    patchPlaylist,
    deletePlaylist,
    postSongToPlaylist,
    notFound,
});

export default playlistController;
export { postPlaylist, getPlaylist, getPlaylists, patchPlaylist, deletePlaylist, postSongToPlaylist, notFound };
