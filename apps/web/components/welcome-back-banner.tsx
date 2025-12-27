"use client";

import { X } from "lucide-react";
import { useRememberMe } from "@/hooks/use-remember-me";
import { Button } from "@/components/ui/button";

interface WelcomeBackBannerProps {
  onClear?: () => void;
}

export function WelcomeBackBanner({ onClear }: WelcomeBackBannerProps) {
  const { rememberedData, isLoaded, clearRememberMe } = useRememberMe();

  if (!isLoaded || !rememberedData?.email) {
    return null;
  }

  const handleClear = () => {
    clearRememberMe();
    onClear?.();
  };

  return (
    <div className="mb-6 flex items-center justify-between rounded-lg border border-primary/20 bg-primary/5 px-4 py-3">
      <div className="flex items-center gap-2">
        <span className="text-2xl">👋</span>
        <div>
          <p className="text-sm font-medium text-foreground">
            Chào mừng trở lại!
          </p>
          <p className="text-xs text-muted-foreground">{rememberedData.email}</p>
        </div>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 text-muted-foreground hover:text-foreground"
        onClick={handleClear}
        aria-label="Clear remembered data"
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
}

