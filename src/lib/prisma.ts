import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function createPrismaClient() {
  const connectionString = process.env.DATABASE_URL!;
  const adapter = new PrismaPg({ connectionString });
  return new PrismaClient({ adapter });
}

function createMockPrismaClient(): PrismaClient {
  return new Proxy({} as PrismaClient, {
    get(_, prop: string | symbol) {
      if (["then", "catch", "finally", Symbol.toStringTag, "toString", "constructor"].includes(String(prop))) {
        return undefined;
      }
      return () =>
        Promise.reject(
          new Error("DATABASE_URL environment variable is not set. Prisma queries are unavailable.")
        );
    },
  });
}

export function getPrisma(): PrismaClient {
  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = process.env.DATABASE_URL
      ? createPrismaClient()
      : createMockPrismaClient();
  }
  return globalForPrisma.prisma;
}
