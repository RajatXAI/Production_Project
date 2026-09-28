import { createBrowserRouter } from 'react-router';
import React from 'react';
import Register from '../features/auth/pages/Register.jsx';


export const routes = createBrowserRouter([
    {
        path: '/',
        element: React.createElement('h1', null, 'Hello world')
    },
    {
        path: '/register',
        element: React.createElement(Register)
    },
])
