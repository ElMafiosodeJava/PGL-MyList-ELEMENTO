import { ImageSourcePropType } from "react-native";
import { gymCategory } from "../types/CardsTypes";

type categoryConfig = {
    label: string;
    icon: ImageSourcePropType
}


export const GYM_CATEGORIES: Record<gymCategory, categoryConfig> = {
    mancuernas: {
        label: "mancuernas",
        icon: require('../assets/mancuerna-ajustable-415kg-en-incrementos-de-15kg-26-mancuernas-en-1.jpg')
    },
    cinturones: {
        label: "cinturones",
        icon: require('../assets/cinturon.jpg')
    },
    suplementos: {
        label: "suplementos",
        icon: require('../assets/creatina.png')
    },
    proteinas: {
        label: "proteinas",
        icon: require('../assets/protes.jpg')
    },
    camisetas: {
        label: "camisetas",
        icon: require('../assets/Sin título-1.jpg')
    }
}
