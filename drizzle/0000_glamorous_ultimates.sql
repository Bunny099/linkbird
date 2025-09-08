CREATE TABLE "User" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"email" varchar(100) NOT NULL,
	CONSTRAINT "User_email_unique" UNIQUE("email")
);
