// BodyCard.tsx

import {
    ImageSourcePropType,
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
} from 'react-native';
import React from 'react';
import { CardColors } from '../CardColors/CardColor';

type CardProps = {
    imageSource: ImageSourcePropType;
    name: string;
    categoryLabel: string;
    price: number;
    marked: boolean;
    onToggleMarked: () => void;
    onDelete: () => void;
};

const BodyCard: React.FC<CardProps> = ({
    imageSource,
    name,
    categoryLabel,
    price,
    marked,
    onToggleMarked,
    onDelete,
}) => {
    return (
        <View style={styles.card_container}>
            {/* Icono categoría */}
            <View style={styles.circle}>
                <Image style={styles.icon} source={imageSource} />
            </View>

            {/* Info producto */}
            <View style={styles.text_container}>
                <Text
                    numberOfLines={1}
                    style={styles.name}
                >
                    {name}
                </Text>
                <Text style={styles.category}>{categoryLabel}</Text>
                <Text style={styles.price}>{price.toFixed(2)} €</Text>
            </View>

            {/* Marcar / desmarcar */}
            <Pressable
                style={[styles.mark_circle, marked && styles.mark_circle_active]}
                onPress={onToggleMarked}
            >
                <Text style={styles.mark_text}>{marked ? '✓' : ''}</Text>
            </Pressable>

            <Pressable style={styles.delete_btn} onPress={onDelete}>
                <Text style={styles.delete_text}>🗑</Text>
            </Pressable>
        </View>
    );
};

export default BodyCard;

const styles = StyleSheet.create({
    card_container: {
        height: 110,
        backgroundColor: CardColors.AZUL_MUY_OSCURO,
        marginHorizontal: 20,
        marginVertical: 8,
        borderRadius: 14,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 14,
    },
    circle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        borderRadius: 10,
        backgroundColor: CardColors.BLANCO,
    },
    icon: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        borderRadius: 10
    },
    text_container: {
        flex: 1,
        marginLeft: 12,
    },
    name: {
        color: CardColors.BLANCO,
        fontSize: 18,
        fontWeight: '600',
    },
    category: {
        color: CardColors.GRIS,
        fontSize: 13,
        marginTop: 2,
    },
    price: {
        color: CardColors.BLANCO,
        fontSize: 15,
        marginTop: 4,
    },
    mark_circle: {
        width: 26,
        height: 26,
        borderRadius: 13,
        borderWidth: 2,
        borderColor: CardColors.VERDE_TURQUESA,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 6,
    },
    mark_circle_active: {
        backgroundColor: CardColors.VERDE_TURQUESA,
    },
    mark_text: {
        color: CardColors.BLANCO,
        fontWeight: '700',
    },
    delete_btn: {
        paddingHorizontal: 4,
    },
    delete_text: {
        fontSize: 18,
        color: CardColors.BLANCO,
    },
});
