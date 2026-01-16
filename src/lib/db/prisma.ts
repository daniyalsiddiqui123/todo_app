import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';

declare global {
  // This prevents TypeScript from erroring about a global variable that doesn't exist
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || (() => {
  let adapter;
  if (process.env.DATABASE_URL) {
    const connectionString = process.env.DATABASE_URL;
    const pool = new pg.Pool({ connectionString });
    adapter = new PrismaPg(pool);
  }

  return new PrismaClient({ adapter });
})();

if (process.env.NODE_ENV !== 'production') global.prisma = prisma;

export default prisma;