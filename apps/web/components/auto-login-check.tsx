"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

interface AutoLoginCheckProps {
  children: React.ReactNode;
  redirectTo?: string;
}

export function AutoLoginCheck({
  children,
  redirectTo = "/dashboard",
}: AutoLoginCheckProps) {
  const { status } = useSession();
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    if (status === "loading") {
      return;
    }

    if (status === "authenticated") {
      router.push(redirectTo);
    } else {
      setIsChecking(false);
    }
  }, [status, router, redirectTo]);

  if (isChecking || status === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground">
            Đang kiểm tra phiên đăng nhập...
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

