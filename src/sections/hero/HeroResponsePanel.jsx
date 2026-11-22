import { Dot } from "../../ui/Icons";
import { responseArtifactShape } from "../propTypes";

export default function HeroResponsePanel({ responseArtifact }) {
  const { endpoint, status, contentType, body } = responseArtifact;
  return (
    <div data-build="panel" className="relative min-w-0 max-w-full border border-line bg-panel/80">
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <div className="flex items-center gap-2">
          <Dot />
          <span className="font-mono text-[11px] tracking-wider text-fg">{status}</span>
        </div>
        <span className="font-mono text-[10px] text-faint">{contentType}</span>
      </div>
      <div className="border-b border-line px-4 py-3">
        <span className="font-mono text-[11px] text-faint">GET</span>{" "}
        <span className="font-mono text-[11px] text-fg">{endpoint.replace("GET ", "")}</span>
      </div>
      <pre className="overflow-x-auto px-4 py-4 font-mono text-[10.5px] leading-[1.85] text-dim sm:text-[11.5px]">
        <code>
          <span className="text-faint">{"{"}</span>
          {Object.entries(body).map(([key, value], i, arr) => (
            <span key={key}>
              {"\n  "}
              <span className="text-accent/80">&quot;{key}&quot;</span>
              <span className="text-faint">: </span>
              {Array.isArray(value) ? (
                <>
                  <span className="text-faint">[</span>
                  {value.map((item, index) => (
                    <span key={item}>
                      {"\n    "}
                      <span className="text-fg">&quot;{item}&quot;</span>
                      {index < value.length - 1 ? <span className="text-faint">,</span> : null}
                    </span>
                  ))}
                  {"\n  "}
                  <span className="text-faint">]</span>
                </>
              ) : (
                <span className="text-fg">&quot;{value}&quot;</span>
              )}
              {i < arr.length - 1 ? <span className="text-faint">,</span> : null}
            </span>
          ))}
          {"\n"}
          <span className="text-faint">{"}"}</span>
        </code>
      </pre>
    </div>
  );
}

HeroResponsePanel.propTypes = {
  responseArtifact: responseArtifactShape.isRequired,
};
