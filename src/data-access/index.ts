import prisma from './client';
import { PlaylistsDb } from '../use-cases/types';
import makePlaylistsDb from './db';

const playlistsDb: PlaylistsDb = makePlaylistsDb({ prisma });

export default playlistsDb;