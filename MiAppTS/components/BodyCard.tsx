import { ImageSourcePropType, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { CardColors } from '../CardColors/CardColor'

type CardProps = {
    imageSource: ImageSourcePropType,
    description: string,
}

const BodyCard: React.FC<CardProps> = (props: CardProps): React.ReactNode => {
    const { imageSource, description } = props
    return (
        <View>
            <View style={styles.card_container}>
                <View style={styles.circle}>
                    <Image style={styles.Image} source={imageSource} />
                </View>
                <View style={styles.text_container}>
                    <Text numberOfLines={2} style={styles.font}>{description}</Text>
                </View>
            </View>
        </View>

    )
}

export default BodyCard

const styles = StyleSheet.create({

    card_container: {
        height: 140,
        width: 170,
        backgroundColor: CardColors.AZUL_MUY_OSCURO,
        display: 'flex',
        margin: 20,
        marginRight: 1,
        borderRadius: 14,
        justifyContent: 'flex-end',

    },

    circle: {

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        marginLeft: 23,
        marginBottom: 10,
        borderRadius: 62 / 2,
        borderColor: 'transparent',
        backgroundColor: CardColors.CYAN_MUY_CLARO

    },

    Image: {
        tintColor: CardColors.AZUL_MARINO,
        height: 25,
        width: 25
    },

    text_container: {
        justifyContent: 'flex-end',
        width: 110,
        height: 50,
        margin: 24,
        marginTop: 0,
    },

    font: {
        color: CardColors.BLANCO,
        fontSize: 20,
        fontWeight: 500,
    }

})