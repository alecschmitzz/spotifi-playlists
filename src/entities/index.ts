import crypto from 'crypto'
import Id from '../Id'
import sanitizeHtml from 'sanitize-html'
import { buildMakePlaylist, Playlist } from './playlist'
import { buildMakeSong, Song } from './song'

const makeSong = buildMakeSong({ Id, md5, sanitize })
const makePlaylist = buildMakePlaylist({ Id, md5, sanitize })

//workaround
//https://github.com/oven-sh/bun/issues/5426
export { makePlaylist, makeSong };
export type { Playlist, Song };

export function md5(text: string): string {
    return crypto
        .createHash('md5')
        .update(text, 'utf-8')
        .digest('hex')
}

export function sanitize(text: string): string {
    return sanitizeHtml(text)
}
