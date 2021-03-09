export type ContractsResponse = {
    content: Contracts[];
    totalPages: number;
}


export type Contracts = {
    id: number;
    name: string;
    value: number;
    date: string;
}