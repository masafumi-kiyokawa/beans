// Entry point for the build script in your package.json
import "@hotwired/turbo-rails";
import React from "react";
import ReactDOM from "react-dom/client";
import { CSSReset, ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import App from "./App";
import theme from "./theme";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { BeanQueryProvider } from "./components/contexts/BeanQueryProvider";
import { BeansProvider } from "./components/contexts/BeansProvider";
import { RecipesProvider } from "./components/contexts/RecipesProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <BeanQueryProvider>
          <BeansProvider>
            <RecipesProvider>
              <ColorModeScript
                initialColorMode={theme.config.initialColorMode}
              />
              <CSSReset />
              <App />
            </RecipesProvider>
          </BeansProvider>
        </BeanQueryProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
