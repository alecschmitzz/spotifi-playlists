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
}
