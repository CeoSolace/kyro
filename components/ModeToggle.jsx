"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Prevent hydration mismatch / undefined theme on first render
    return (
      <Button size="icon" className="h-9 w-9" variant="outline" aria-label="Toggle theme" disabled />
    );
  }

  const isLight = resolvedTheme === "light";

  return (
    <Button
      size="icon"
      className="h-9 w-9"
      variant="outline"
      aria-label="Toggle theme"
      onClick={() => setTheme(isLight ? "dark" : "light")}
    >
      {isLight ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
    </Button>
  );
}
