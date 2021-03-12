export type UserResponse = {
    content: User[];
    totalPages: number;
}

export type User = {
    id: number,
    name: string;
    email: string;
    role: Role[]
}

export type Role = {
    authority: string;
}