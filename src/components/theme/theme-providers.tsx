"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

import { TooltipProvider } from "@/components/atoms/tooltip";
import supabase from "@/lib/supabase";
import { useStore } from "@/store";

export const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  const { onAuthSuccess, onLogout } = useStore();

  React.useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        onAuthSuccess({
          accessToken: session.access_token,
          user: session.user,
        });
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        onAuthSuccess({
          accessToken: session?.access_token,
          user: session?.user,
        });

        return;
      }

      onLogout();
    });

    return () => subscription.unsubscribe();
  }, [onAuthSuccess, onLogout]);

  return (
    <NextThemesProvider {...props}>
      <TooltipProvider>{children}</TooltipProvider>
    </NextThemesProvider>
  );
};
