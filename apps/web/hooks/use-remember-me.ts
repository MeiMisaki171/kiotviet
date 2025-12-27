"use client";

import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "kiotviet_remember_me";

interface RememberedData {
  email: string;
  rememberMe: boolean;
}

export function useRememberMe() {
  const [rememberedData, setRememberedData] = useState<RememberedData | null>(
    null
  );
  const [isLoaded, setIsLoaded] = useState(false);

  // Load remembered data from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const data = JSON.parse(stored) as RememberedData;
        setRememberedData(data);
      }
    } catch (error) {
      console.error("Error loading remember me data:", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save remember me data to localStorage
  const saveRememberMe = useCallback((email: string, rememberMe: boolean) => {
    try {
      if (rememberMe && email) {
        const data: RememberedData = { email, rememberMe };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        setRememberedData(data);
      } else {
        localStorage.removeItem(STORAGE_KEY);
        setRememberedData(null);
      }
    } catch (error) {
      console.error("Error saving remember me data:", error);
    }
  }, []);

  // Clear remembered data
  const clearRememberMe = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      setRememberedData(null);
    } catch (error) {
      console.error("Error clearing remember me data:", error);
    }
  }, []);

  // Check if there's remembered data
  const hasRememberedData = useCallback(() => {
    return !!rememberedData?.email;
  }, [rememberedData]);

  return {
    rememberedData,
    isLoaded,
    saveRememberMe,
    clearRememberMe,
    hasRememberedData,
  };
}

