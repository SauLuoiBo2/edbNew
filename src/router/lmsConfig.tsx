const data = [
    {
        name: 'He thong',
        list: [
            {
                name: 'cau hinh chung',
                path: 'cau-hinh-chung',
                element: <div>dsaasd</div>,
            },
            {
                name: 'danh sach chu de',
                path: 'danh-sach-chu-de',
                element: <div>dsaasd</div>,
            },
            {
                name: 'danh sach don vi kien thuc',
                path: 'danh-sach-don-vi-kien-thuc',
                element: <div>dsaasd</div>,
            },
        ],
    },
    {
        name: 'Ngan hang cau hoi EBD',
        list: [
            {
                name: 'danh sach cau hoi',
                path: 'danh-sach-cau-hoi',
                element: <div>dsaasd</div>,
            },
            {
                name: 'them cau trac nhiem',
                path: 'them-cau-trac-nghiem',
                element: <div>dsaasd</div>,
            },
            {
                name: 'them cau tu luan',
                path: 'them-cau-tu-luan',
                element: <div>dsaasd</div>,
            },
        ],
    },
    {
        name: 'Quan ly du lieu rieng',
        list: [
            {
                name: 'danh sach cau hoi',
                path: 'danh-sach-cau-hoi-rieng',
                element: <div>dsaasd</div>,
            },
            {
                name: 'them cau trac nhiem',
                path: 'them-cau-trac-nghiem-rieng',
                element: <div>dsaasd</div>,
            },
            {
                name: 'them cau tu luan',
                path: 'them-cau-tu-luan-rieng',
                element: <div>dsaasd</div>,
            },
        ],
    },
    {
        name: 'Khoi tao de thi',
        list: [
            {
                name: 'quan ly ma tran de',
                path: 'quan-ly-ma-tran-de',
                element: <div>dsaasd</div>,
            },
            {
                name: 'quan ly de thi',
                path: 'quan-ly-de-thi',
                element: <div>dsaasd</div>,
            },
            {
                name: 'tao ma tran moi',
                link: 'tao-ma-tran-moi',
                element: <div>dsaasd</div>,
            },
            {
                name: 'tao de thi moi',
                path: 'tao-de-thi-moi',
                element: <div>dsaasd</div>,
            },
        ],
    },
    {
        name: 'To chuc khao thi',
        list: [
            {
                name: 'khao thi',
                path: 'khao-thi',
                element: <div>dsaasd</div>,
            },
            {
                name: 'tao moi',
                path: 'tao-moi',
                element: <div>dsaasd</div>,
            },
        ],
    },
    {
        name: 'Lam bai thi /kiem tra',
        list: [
            {
                name: 'danh sach bai thi',
                path: 'danh-sach-bai-thi',
                element: <div>dsaasd</div>,
            },
        ],
    },
];

class LmsConfig {
    data: any;
    constructor() {
        this.data = data;
    }
    getRouters = () => {
        const routers: { path: string; element: any; breadcrumb: any }[] = [];

        this.data.map((navRouter: { list: { path: string; element: any; name: any }[] }) =>
            navRouter.list.forEach((router: { path: string; element: any; name: any }) => {
                let route = {
                    path: router.path,
                    element: router.element,
                    breadcrumb: router.name,
                };
                routers.push(route);
            })
        );
        return routers;
    };
}

export const lmsConfig = new LmsConfig();
