

import { pgTable,text, serial,timestamp } from "drizzle-orm/pg-core";

export const User = pgTable("User", {
    id: serial("id").primaryKey(),
    email: text("email").notNull().unique(),
    password: text("password").notNull(),
    name: text("name"),
    image: text("image"),
    createdAt: timestamp("created_At").defaultNow()

})
