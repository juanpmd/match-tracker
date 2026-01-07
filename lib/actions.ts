'use server';

import { db } from './db';
import { matches, NewMatch } from './db/schema';
import { desc } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

export async function getMatches() {
  return await db.select().from(matches).orderBy(desc(matches.createdAt));
}

export async function createMatch(data: NewMatch) {
  const result = await db.insert(matches).values(data).returning();
  revalidatePath('/');
  return result[0];
}
