export interface Product{
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags:{
        brand: string;
        sku: string;
        weight: number;
    },
    dimensions:{
        width: number;
        height: number;
        depth: number;
        warrantyInformation: string;
        shippingInformation: string;
        availabilityStatus: string;
    },
    reviews:{
        rating: number;
        comment: string;
        date: Date;
        reviewerNane: string;
        reviewerEmail: string;
    }
}