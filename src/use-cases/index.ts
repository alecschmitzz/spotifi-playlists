import makeAddPlaylist from './add-playlist';
import makeGetSinglePlaylist from './get-single-playlist';
import makeListPlaylists from './list-playlists';
import makeEditPlaylist from './edit-playlist';
import makeRemovePlaylist from './remove-playlist';
import playlistsDb from '../data-access';
import makeAddSongToPlaylist from './add-song-to-playlist';

const addPlaylist = makeAddPlaylist({ playlistsDb });
const getSinglePlaylist = makeGetSinglePlaylist({ playlistsDb });
const listPlaylists = makeListPlaylists({ playlistsDb });
const editPlaylist = makeEditPlaylist({ playlistsDb });
const removePlaylist = makeRemovePlaylist({ playlistsDb });
const addSongToPlaylist = makeAddSongToPlaylist({ playlistsDb });

const playlistService = Object.freeze({
    addPlaylist,
    getSinglePlaylist,
    listPlaylists,
    editPlaylist,
    removePlaylist,
    addSongToPlaylist,
});

export default playlistService;
export { addPlaylist, getSinglePlaylist, listPlaylists, editPlaylist, removePlaylist, addSongToPlaylist };
