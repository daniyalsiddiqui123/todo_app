import { PrismaClient } from '@prisma/client';

declare global {
  // This prevents TypeScript from erroring about a global variable that doesn't exist
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === 'development') {
  global.prisma = prisma;
}

export default prisma;