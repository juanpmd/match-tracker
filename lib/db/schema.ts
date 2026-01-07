import { pgTable, serial, text, integer, timestamp, json } from 'drizzle-orm/pg-core';

export const matches = pgTable('matches', {
  id: serial('id').primaryKey(),
  personName: text('person_name').notNull(),
  whatsappUrl: text('whatsapp_url'),
  telegramUrl: text('telegram_url'),
  rating: integer('rating').notNull().default(5),
  notes: text('notes'),
  images: json('images').$type<string[]>().default([]),
  videos: json('videos').$type<string[]>().default([]),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export type Match = typeof matches.$inferSelect;
export type NewMatch = typeof matches.$inferInsert;
