'use server';

import { desc } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';
import { db } from './db';
import { matches } from './db/schema';

export async function getMatches() {
  return await db.select().from(matches).orderBy(desc(matches.createdAt));
}

export async function createMatch(data: any) {
  const result = await db.insert(matches).values(data).returning();
  revalidatePath('/');
  return result[0];
}
