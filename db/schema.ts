import { index, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const programs = sqliteTable(
  "programs",
  {
    id: text("id").primaryKey(),
    userId: text("user_id").notNull(),
    type: text("type", { enum: ["DOOP", "PK", "PP"] }).notNull(),
    title: text("title").notNull(),
    status: text("status", { enum: ["draft", "review", "approved", "revision", "ready"] }).notNull().default("draft"),
    progress: integer("progress").notNull().default(0),
    data: text("data").notNull().default("{}"),
    reviewComment: text("review_comment").notNull().default(""),
    fieldComments: text("field_comments").notNull().default("{}"),
    createdAt: text("created_at").notNull(),
    updatedAt: text("updated_at").notNull(),
  },
  (table) => [index("idx_programs_user_updated").on(table.userId, table.updatedAt)],
);

export const disciplines = sqliteTable(
  "disciplines",
  {
    id: text("id").primaryKey(),
    programId: text("program_id").notNull().references(() => programs.id, { onDelete: "cascade" }),
    userId: text("user_id").notNull(),
    title: text("title").notNull(),
    hours: integer("hours").notNull().default(0),
    sortOrder: integer("sort_order").notNull().default(0),
    data: text("data").notNull().default("{}"),
    createdAt: text("created_at").notNull(),
    updatedAt: text("updated_at").notNull(),
  },
  (table) => [
    index("idx_disciplines_user_updated").on(table.userId, table.updatedAt),
    index("idx_disciplines_program_order").on(table.programId, table.sortOrder),
  ],
);

export const userProfiles = sqliteTable(
  "user_profiles",
  {
    userId: text("user_id").primaryKey(),
    displayName: text("display_name").notNull().default(""),
    email: text("email").notNull().default(""),
    role: text("role", { enum: ["author", "reviewer", "admin"] }).notNull().default("author"),
    actingRole: text("acting_role", { enum: ["author", "reviewer", "admin"] }).notNull().default("admin"),
    createdAt: text("created_at").notNull(),
    updatedAt: text("updated_at").notNull(),
  },
  (table) => [index("idx_user_profiles_role").on(table.role)],
);
