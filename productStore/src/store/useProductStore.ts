import { create } from 'zustand';


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
    thumbnail: string;
}

interface StoreState {
  products: Product[];
  fetchProducts: () => Promise<void>;
}

export const useProductStore = create<StoreState>((set) => ({
products: [],

fetchProducts: async() => {
try{
    const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();

      set({ products: data.products });
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  },
}));

