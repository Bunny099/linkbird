CREATE TABLE "profile_analysis" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"userId" text NOT NULL,
	"heading" text NOT NULL,
	"aboutMe" text NOT NULL,
	"experience" text,
	"suggestedHeading" text,
	"suggestedAboutme" text,
	"suggestedExperience" text,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "profile_analysis" ADD CONSTRAINT "profile_analysis_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;