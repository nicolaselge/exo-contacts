export class User {
    id!: number;
    lastname!: string;
    firstname!: string;
    phone!: string;
    email!: string;
    address!: string;
    postalZip!: string;
    city!: string;
    company!: string;
    password!: string;
    token!: string;
    isAdmin?: number;
    createdAt!: Date;
    updatedAt!: Date;
}