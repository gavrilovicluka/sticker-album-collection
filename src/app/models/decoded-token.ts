import { UserRoles } from "./user-roles.enum";

export interface DecodedToken {
    sub: number,
    username: string,
    role: UserRoles
}