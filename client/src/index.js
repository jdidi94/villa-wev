import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { Provider } from "react-redux";
import { store, history } from "./store";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ConnectedRouter history={history}>
        <Routes>
          <Route path="*" element={<App />} />
        </Routes>
      </ConnectedRouter>
    </BrowserRouter>
  </Provider>
);
