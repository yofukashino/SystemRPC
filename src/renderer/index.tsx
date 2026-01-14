import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root")!);

export const render = (): void => {
  root.render(
    <React.StrictMode>
      <div className="sex" />
    </React.StrictMode>,
  );
};

export default { render };
