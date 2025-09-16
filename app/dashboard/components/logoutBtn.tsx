"use client"
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function LogoutButton({ children, className }: { children?: React.ReactNode, className?: string }) {
  const router = useRouter();

  async function handleLogout() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
        },
      },
    });
  }

  return (
    <Button onClick={handleLogout} className={className}>
      {children ?? "Logout"}
    </Button>
  );
}
