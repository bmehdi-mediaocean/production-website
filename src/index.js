import React from 'react';
import { createRoot } from 'react-dom/client';

//component file
import ProdContainer from './components/ProdContainer';

//stylesheet
import "./App.scss"

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ProdContainer />
    </React.StrictMode>
);