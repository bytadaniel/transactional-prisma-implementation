import { PrismaClient } from '@prisma/client'
import { prismaTransactional } from '@transactional/prisma'

export const client = new PrismaClient().$extends(prismaTransactional)