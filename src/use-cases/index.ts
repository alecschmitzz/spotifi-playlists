import makeAddPlaylist from './add-playlist';
import makeGetSinglePlaylist from './get-single-playlist';
import makeListPlaylists from './list-playlists';
import makeEditPlaylist from './edit-playlist';
import makeRemovePlaylist from './remove-playlist';
import playlistsDb from '../data-access';

const addPlaylist = makeAddPlaylist({ playlistsDb });
const getSinglePlaylist = makeGetSinglePlaylist({ playlistsDb });
const listPlaylists = makeListPlaylists({ playlistsDb });
const editPlaylist = makeEditPlaylist({ playlistsDb });
const removePlaylist = makeRemovePlaylist({ playlistsDb });

const playlistService = Object.freeze({
    addPlaylist,
    getSinglePlaylist,
    listPlaylists,
    editPlaylist,
    removePlaylist,
});

export default playlistService;
export { addPlaylist, getSinglePlaylist, listPlaylists, editPlaylist, removePlaylist };
