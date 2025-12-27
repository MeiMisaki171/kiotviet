"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useAuthStore } from "@/stores/auth-store";

interface UserPermissionsProviderProps {
  children: React.ReactNode;
}

export function UserPermissionsProvider({
  children,
}: UserPermissionsProviderProps) {
  const { data: session, status } = useSession();
  const { setUserRoles, setPermissions, setLoading, reset } = useAuthStore();

  useEffect(() => {
    if (status === "loading") {
      setLoading(true);
      return;
    }

    if (status === "authenticated" && session?.user) {
      // Load roles and permissions from session
      setUserRoles(session.user.roles || []);
      setPermissions(session.user.permissions || []);
      setLoading(false);
    } else if (status === "unauthenticated") {
      reset();
      setLoading(false);
    }
  }, [session, status, setUserRoles, setPermissions, setLoading, reset]);

  return <>{children}</>;
}
