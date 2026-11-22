import { useEffect } from "react";
import PropTypes from "prop-types";

const SESSION_KEY = "lm-swarm-ran";

function waitForApi(timeout = 4000) {
  return new Promise((resolve) => {
    const start = performance.now();
    const tick = () => {
      if (window.__swarmRebuild) {
        resolve(window.__swarmRebuild);
        return;
      }
      if (performance.now() - start > timeout) {
        resolve(null);
        return;
      }
      window.setTimeout(tick, 50);
    };
    tick();
  });
}

export default function SwarmRebuild({ onDone, onReady }) {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const force = params.has("build");

    let finished = false;
    let readyCalled = false;
    const timers = [];

    const ready = () => {
      if (readyCalled) return;
      readyCalled = true;
      onReady();
    };

    const reveal = () => {
      if (finished) return;
      finished = true;
      ready();
      timers.forEach((id) => window.clearTimeout(id));
      try {
        window.__swarmRebuild?.stop(true);
      } catch {
        // ignore teardown errors
      }
      onDone();
      // The tour scrolls to the footer; bring the visitor back to the top
      // once the rebuild is finished.
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
    };

    if (!force && window.sessionStorage.getItem(SESSION_KEY) === "1") {
      onDone();
      ready();
      return;
    }

    const run = async () => {
      if (force) {
        document.querySelector("script[data-swarm]")?.remove();
        delete window.__swarmRebuild;
      }

      if (!document.querySelector("script[data-swarm]")) {
        const script = document.createElement("script");
        script.src = "/swarm.js";
        script.dataset.swarm = "1";
        document.body.appendChild(script);
      }

      window.sessionStorage.setItem(SESSION_KEY, "1");

      const api = await waitForApi();
      if (finished) return;

      if (!api) {
        reveal();
        return;
      }

      if (!api.app) {
        api.start();
      }

      // The swarm host is attached synchronously and its background fades in
      // over ~500 ms. Signal readiness once it is opaque so the intro can exit.
      timers.push(window.setTimeout(ready, 1000));

      const poll = window.setInterval(() => {
        const app = window.__swarmRebuild?.app;
        if (app && app.complete) {
          window.clearInterval(poll);
          window.setTimeout(reveal, 1400);
        }
      }, 400);
      timers.push(poll);

      const guard = window.setTimeout(() => {
        window.clearInterval(poll);
        reveal();
      }, 60000);
      timers.push(guard);
    };

    run().catch(() => reveal());

    return () => {
      timers.forEach((id) => window.clearTimeout(id));
      try {
        window.__swarmRebuild?.stop(true);
      } catch {
        // ignore
      }
    };
  }, [onDone, onReady]);

  return null;
}

SwarmRebuild.propTypes = {
  onDone: PropTypes.func.isRequired,
  onReady: PropTypes.func.isRequired,
};
