import { useState, useEffect } from "react";

export function useIsMobile(breakpoint: number = 1024) {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkScreen = () => {
      const newIsMobile = window.innerWidth < breakpoint;
      setIsMobile((prev) => (prev !== newIsMobile ? newIsMobile : prev));
    };

    // Initial check
    checkScreen();

    // Debounced resize handler
    let timeoutId: NodeJS.Timeout;
    const debouncedCheckScreen = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkScreen, 100);
    };

    window.addEventListener("resize", debouncedCheckScreen);

    return () => {
      window.removeEventListener("resize", debouncedCheckScreen);
      clearTimeout(timeoutId);
    };
  }, [breakpoint]);

  return isMobile;
}
