import { HomePages } from 'pages';

export const HOME_ROUTER = [
    {
        name: 'Trang chủ',
        path: '/',
        element: <HomePages.HomePage />,
    },
    {
        name: 'Giới thiệu',
        path: '/gioi-thieu',
        element: <HomePages.HomePage />,
    },
    {
        name: 'Tin tức',
        path: '/tin-tuc',
        element: <HomePages.HomePage />,
    },
    {
        name: 'Liên hệ',
        path: '/lien-he',
        element: <HomePages.HomePage />,
    },
    {
        name: 'LMS',
        path: '/lms',
        element: <HomePages.LmsPage />,
    },
];

export const LMS_ROUTER = [
    {
        name: 'He thong',
        path: '/',
        element: <HomePages.HomePage />,
    },
    {
        name: 'Ngan hang cau hoi EDB',
        path: '/gioi-thieu',
        element: <HomePages.HomePage />,
    },
    {
        name: 'Quan ly du lieu rieng',
        path: '/tin-tuc',
        element: <HomePages.HomePage />,
    },
    {
        name: 'Khoi tao de thi',
        path: '/lien-he',
        element: <HomePages.HomePage />,
    },
    {
        name: 'LMS',
        path: '/lms',
        element: <HomePages.LmsPage />,
    },
];
