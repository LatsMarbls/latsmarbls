import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import { getDesignLabels, getDesignSelection } from "./selection";

const DesignContext = createContext(null);

export function DesignProvider({ children, initialSelection }) {
  const [selection] = useState(() => initialSelection || getDesignSelection());
  const labels = getDesignLabels(selection);

  return (
    <DesignContext.Provider value={{ selection, labels }}>
      {children}
    </DesignContext.Provider>
  );
}

DesignProvider.propTypes = {
  children: PropTypes.node,
  initialSelection: PropTypes.object,
};

export function useDesign(section) {
  const ctx = useContext(DesignContext);
  if (!ctx) throw new Error("useDesign must be used within DesignProvider");
  return ctx.selection[section] || 0;
}

export function useDesignLabels() {
  const ctx = useContext(DesignContext);
  if (!ctx) throw new Error("useDesignLabels must be used within DesignProvider");
  return ctx.labels;
}
