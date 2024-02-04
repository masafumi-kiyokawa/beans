// Entry point for the build script in your package.json
import '@hotwired/turbo-rails';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { CSSReset, ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import theme from './theme';
import { BeanQueryProvider } from './components/providers/BeanQueryProvider';
import App from './components/App';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <ChakraProvider>
                <QueryClientProvider client={queryClient}>
                    <BeanQueryProvider>
                        <ColorModeScript
                            initialColorMode={
                                theme.config.initialColorMode || undefined
                            }
                        />
                        <CSSReset />
                        <App />
                    </BeanQueryProvider>
                </QueryClientProvider>
            </ChakraProvider>
        </BrowserRouter>
    </React.StrictMode>,
);
