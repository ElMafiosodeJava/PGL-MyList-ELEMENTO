import { Float } from "react-native/Libraries/Types/CodegenTypes";


export type gymCategory = 'mancuernas' | 'cinturones' | 'suplementos' | 'proteinas' | 'camisetas'


export interface shop {
    id: string,
    name: string,
    category: gymCategory,
    price: Float,
    marked: boolean,
    description: string;
}