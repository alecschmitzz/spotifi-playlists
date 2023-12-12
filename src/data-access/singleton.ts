import { PrismaClient } from '../../prisma/generated/client';
type Playlist = import('../../prisma/generated/client').Playlist;
import { mockDeep, mockReset, DeepMockProxy } from 'jest-mock-extended'

import prisma from './client'

jest.mock('./client', () => ({
    __esModule: true,
    default: mockDeep<PrismaClient>(),
}))

beforeEach(() => {
    mockReset(prismaMock)
})

export const prismaMock = prisma as unknown as DeepMockProxy<PrismaClient>
export { Playlist }; // Export the Playlist type