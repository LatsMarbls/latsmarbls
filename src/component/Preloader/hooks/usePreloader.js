import { useState, useEffect } from "react";

const STORAGE_KEY = "lm-intro-seen";

const usePreloader = (loadingDuration = 1200, welcomeDuration = 900) => {
  const [loading, setLoading] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const seen =
      typeof window !== "undefined" &&
      window.sessionStorage.getItem(STORAGE_KEY) === "1";

    if (seen) {
      setLoading(false);
      setComplete(true);
      return;
    }

    const loadingTimer = setTimeout(() => {
      setLoading(false);
      setShowWelcome(true);
    }, loadingDuration);

    const welcomeTimer = setTimeout(() => {
      setShowWelcome(false);
      setComplete(true);
      window.sessionStorage.setItem(STORAGE_KEY, "1");
    }, loadingDuration + welcomeDuration);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(welcomeTimer);
    };
  }, [loadingDuration, welcomeDuration]);

  return {
    loading,
    showWelcome,
    complete,
  };
};

export default usePreloader;
