import { useEffect, useState } from "react";
import "./App.css";

// ✅ import the shadcn button
import { Button } from "@/components/ui/button";

export default function App() {
  const [dark, setDark] = useState(false);

  // read stored preference on first load
  useEffect(() => {
    const pref = localStorage.getItem("theme");
    const isDark = pref === "dark";
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  // apply toggle + persist
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div className="min-h-screen grid place-items-center bg-background text-foreground">
      <div className="rounded-2xl p-8 bg-card text-card-foreground shadow">
        <div className="flex items-center justify-between gap-4">
          <h1 className="font-heading text-3xl">CAPEX Theme</h1>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setDark((v) => !v)}
            aria-pressed={dark}
          >
            {dark ? "Switch to Light" : "Switch to Dark"}
          </Button>
        </div>

        <p className="mt-2 text-neutral-700 dark:text-neutral-300">
          Neutral text on white with a primary heading.
        </p>

        {/* swatches from your Figma palette */}
        <div className="mt-6 grid grid-cols-4 gap-3">
          <div className="h-10 rounded bg-primary" />
          <div className="h-10 rounded bg-primary-300" />
          <div className="h-10 rounded bg-primary-100" />
          <div className="h-10 rounded bg-neutral-900" />
          <div className="h-10 rounded bg-neutral-700" />
          <div className="h-10 rounded bg-neutral-500" />
          <div className="h-10 rounded bg-neutral-300" />
          <div className="h-10 rounded bg-neutral-100" />
        </div>

        {/* ✅ shadcn buttons using your variants */}
        <div className="mt-6 flex gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>
    </div>
  );
}
