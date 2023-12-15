import { PrismaClient, Playlist } from "../../prisma/generated/client";
import { PlaylistsDb } from "../use-cases/types";

export default function makePlaylistsDb({ prisma }: { prisma: PrismaClient }): PlaylistsDb {
  return Object.freeze({
    findAll,
    findById,
    findByHash,
    insert,
    update,
    remove,
    addSongToPlaylist
  });

  async function findAll(): Promise<Playlist[]> {
    return prisma.playlist.findMany();
  }

  async function findById({ id, includeSongs = false }: { id: string, includeSongs: boolean }): Promise<Playlist | null> {
    return prisma.playlist.findFirst({
      where: { id },
      include: {
        songs: includeSongs,
      },
    });
  }

  async function findByHash({ hash }: { hash: string }): Promise<Playlist | null> {
    return prisma.playlist.findFirst({
      where: { hash },
    });
  }

  async function insert(playlist: Playlist): Promise<Playlist> {
    return prisma.playlist.create({
      data: playlist,
    });
  }

  async function update({ id, ...playlistInfo }: { id: string } & Partial<Playlist>): Promise<Playlist> {
    return prisma.playlist.update({
      where: { id },
      data: playlistInfo,
    });
  }

  async function remove({ id }: { id: string }): Promise<Playlist> {
    return prisma.playlist.delete({
      where: { id },
    });
  }

  async function addSongToPlaylist({ songId, playlistId }: { songId: string, playlistId: string }) {
    try {
      // Retrieve the song from the database
      const song = await prisma.song.findUnique({
        where: { id: songId },
      });

      // Retrieve the playlist from the database
      const playlist = await prisma.playlist.findUnique({
        where: { id: playlistId },
      });

      // Check if both the song and playlist exist
      if (!song || !playlist) {
        console.error('Song or playlist not found.');
        return;
      }

      // Check if the SongPlaylist entry already exists
      const existingSongPlaylist = await prisma.songPlaylist.findUnique({
        where: { songId_playlistId: { songId, playlistId } },
      });

      // If the entry already exists, you can handle it accordingly (update or log)
      if (existingSongPlaylist) {
        console.log('Song already exists in the playlist.');
        return existingSongPlaylist;
      }

      // Create a new SongPlaylist entry to associate the song with the playlist
      return await prisma.songPlaylist.create({
        data: {
          song: { connect: { id: songId } },
          playlist: { connect: { id: playlistId } },
        },
      });

      // console.log(`Song '${song.title}' added to playlist '${playlist.title}'.`);
    } catch (error) {
      console.error('Error adding song to playlist:', error);
    } finally {
      await prisma.$disconnect(); // Disconnect Prisma Client
    }
  }

}
