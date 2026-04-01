import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserProvider } from "./context/UserContext";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <UserProvider>
            <App />
      </UserProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
