import React, { lazy, Suspense } from 'react'
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom';
import MainContentArea from '../maincontentarea/MainContentArea';
// import Optionone from '../optionone/Optionone';
// import Project from '../project/Project';
// import Notifications from '../notifications/Notifications';
// import Login from '../login/Login';
// import Home from '../home/Home';
// import Layout from '../navbar/layout/Layout';
// import Dashboard from '../dashboard/Dashboard';
// import Chitchat from '../chitchat/Chitchat';
// import Updates from '../chitchat/Updates';
// import Alerts from '../alerts/Alerts';
// import Reminders from '../reminders/Reminders';
// import {Tasks} from '../tasks/Tasks';



const Login = lazy(() => import('../login/Login'));
const Home = lazy(() => import('../home/Home'));
const Layout = lazy(() => import('../navbar/layout/Layout'));
const Dashboard = lazy(() => import('../dashboard/Dashboard'));
const Chitchat = lazy(() => import('../chitchat/Chitchat'));
const Updates = lazy(() => import('../chitchat/Updates'));
const Alerts = lazy(() => import('../alerts/Alerts'));
const Reminders = lazy(() => import('../reminders/Reminders'));
const Tasks = lazy(() => import('../tasks/Tasks'));
const Notifications = lazy(() => import('../notifications/Notifications'));
const Project = lazy(() => import('../project/Project'));
const Optionone = lazy(() => import('../optionone/Optionone'));

function Routing() {

    const AuthenticatedLayout = () => (
        <Layout>
            <Outlet />
        </Layout>
    );

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Navigate to="/login" replace />,
        },
        {
            path: '/login',
            element: <Login />,
        },
        {
            path: '/home',
            element: <AuthenticatedLayout />,
            children: [
                {
                    path: '',
                    element: <Home />,
                },
            ]
        },
        {
            path: '/projects',
            element: <AuthenticatedLayout />,
            children: [
                {
                    path: '',
                    element: <Project />,
                },
            ]
        },
        {
            path: '/optionone',
            element: <AuthenticatedLayout />,
            children: [
                {
                    path: '',
                    element: <Optionone />,
                },
            ]
        },
        {
            path: '/dashboard',
            element: <AuthenticatedLayout />,
            children: [
                {
                    path: '',
                    element: <Dashboard />,
                },
            ]
        },
        {
            path: '/chitchat',
            element: <AuthenticatedLayout />,
            children: [
                {
                    path: '',
                    element: <Chitchat />,
                },
                {
                    path: 'chitchat',
                    // element: <Chitchat />,
                },
                {
                    path: 'updates',
                    element: <Updates />,
                },
                {
                    path: 'alerts', // Renders Messages component when accessing /chitchat/messages
                    element: <Alerts />,
                },
                {
                    path: 'notifications', // Renders Notifications component when accessing /chitchat/notifications
                    element: <Notifications />,
                },
                {
                    path: 'reminders', // Renders Notifications component when accessing /chitchat/notifications
                    element: <Reminders />,
                },
                {
                    path: 'tasks', // Renders Notifications component when accessing /chitchat/tasks
                    element: <Tasks />,
                },
            ]
        },

        {
            path: '/maincontentarea',
            element: <AuthenticatedLayout />,
            children: [
                {
                    path: '',
                    element: <MainContentArea />,
                },
            ]

        }

    ]);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <RouterProvider router={router} />
        </Suspense>
    )
}

export default Routing