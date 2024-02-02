// Entry point for the build script in your package.json
import "@hotwired/turbo-rails";
import React from "react";
import ReactDOM from "react-dom/client";
import { CSSReset, ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import App from "./App";
import theme from "./theme";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BeanQueryProvider } from "./components/providers/BeanQueryProvider";

const queryClent = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <QueryClientProvider client={queryClent}>
          <BeanQueryProvider>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <CSSReset />
            <App />
          </BeanQueryProvider>
        </QueryClientProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
