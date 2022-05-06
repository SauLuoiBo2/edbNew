import StyledTheme from 'assets/theme/ThemeProdiver';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <StyledTheme>
                <Routes>
                    <Route path='/*' element={<App />} />
                </Routes>
            </StyledTheme>
        </BrowserRouter>
    </React.StrictMode>
);
