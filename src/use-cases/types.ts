export type Playlist = {
    id: string;
    title?: string;
    description?: string;
    hash?: string;
    createdAt?: Date;
    updatedAt?: Date;
    songs?: Song[]
}

export type Song = {
    id: string;
    title?: string;
    artist?: string;
    duration?: number;
    genre?: string;
    released?: boolean;
    album?: string;
    hash?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface PlaylistsDb {
    findAll: () => Promise<Playlist[]>;
    findById: (params: { id: string, includeSongs: boolean }) => Promise<Playlist | null>;
    findByHash: (params: { hash: string }) => Promise<Playlist | null>;
    insert: (playlist: any) => Promise<Playlist>;
    update: (params: { id: string } & Partial<Playlist>) => Promise<Playlist>;
    remove: (params: { id: string }) => Promise<Playlist>;
    addSongToPlaylist: (params: { songId: string, playlistId: string }) => Promise<{ songId: string; playlistId: string; assignedAt: Date; } | undefined>;
}

export interface HttpRequest {
    body: any;
    query: any;
    params: any;
    ip?: string;
    method: string;
    path: string;
    headers: {
        'Content-Type'?: string;
        Referer?: string;
        'User-Agent'?: string;
    };
}

export interface HttpResponse {
    statusCode: number;
    headers?: Record<string, string>;
    body?: any;
}
