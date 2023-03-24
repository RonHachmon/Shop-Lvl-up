
export interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    quantity: number;
    image: string;
    description: string;
    creation_date: Date;
    update_on: Date;
    deletion_date: Date | null;
}
