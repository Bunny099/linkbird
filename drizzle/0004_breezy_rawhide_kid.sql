CREATE TABLE "profile" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"name" text,
	"image" text,
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "profile_email_unique" UNIQUE("email")
);
