export interface reqSearchP {
    keyword: string | null;
    page: string | number | null;
    limit: string | number | null;
}

export interface resSearchP {
    data: any[];
    total: number;
}

export interface dataP {
    id: number;
    createAt: string;
    name: string;
    description: string | null;
}
