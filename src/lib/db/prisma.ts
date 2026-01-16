import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';

declare global {
  var prisma: PrismaClient | undefined;
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  // In production, create client with adapter if DATABASE_URL is available
  if (process.env.DATABASE_URL) {
    const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
    const adapter = new PrismaPg(pool);
    prisma = new PrismaClient({ adapter });
  } else {
    // Fallback for build time when DATABASE_URL might not be available
    prisma = new PrismaClient();
  }
} else {
  // In development, use a global variable to preserve the singleton pattern across hot-reloads
  if (!global.prisma) {
    if (process.env.DATABASE_URL) {
      const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
      const adapter = new PrismaPg(pool);
      global.prisma = new PrismaClient({ adapter });
    } else {
      global.prisma = new PrismaClient();
    }
  }
  prisma = global.prisma;
}

export default prisma;