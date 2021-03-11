export type UserResponse = {
    content: User[];
    totalPages: number;
}

export type User = {
    name: string;
    email: string;
    roles: Role[]
}

export type Role = {
    authority: string;
}