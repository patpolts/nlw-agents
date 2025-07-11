import {pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core" 
import { rooms } from "./rooms.ts"
import { vector } from "drizzle-orm/pg-core"

export const audioChunks = pgTable('audio-chunks',{
    id: uuid().primaryKey().defaultRandom(),
    roomId: uuid().references(() => rooms.id).notNull(),
    transcription: text().notNull(),
    embedding: vector({dimensions: 768}).notNull(),
    createdAt: timestamp().defaultNow().notNull(),
})