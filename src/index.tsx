import StyledTheme from 'assets/theme/ThemeProdiver';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import { QueryClientProvider } from 'react-query';
import { queryClient } from 'api/queries/config';
import { ReactQueryDevtools } from 'react-query/devtools';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <BrowserRouter>
                <StyledTheme>
                    <Routes>
                        <Route path='/*' element={<App />} />
                    </Routes>
                </StyledTheme>
            </BrowserRouter>
        </QueryClientProvider>
    </React.StrictMode>
);
