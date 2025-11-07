import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { CardColors } from '../CardColors/CardColor'

const Footer = () => {
    return (
        <View style={styles.container}>
            <View>
                <Image source={require('../assets/icons8-búsqueda-48.png')} style={styles.finder} />
                <Text style={styles.font}>Explore</Text>
            </View>
            <View>
                <Image source={require('../assets/icons8-más-de-50.png')} style={styles.logo} />
                <Text>Drops</Text>
            </View>
            <View>
                <Image source={require('../assets/icons8-me-gusta-50.png')} style={styles.Image} />
                <Text>Saved</Text>
            </View>
            <View>
                <Image source={require('../assets/icons8-usuario-masculino-en-círculo-50.png')} style={styles.Image} />
                <Text>Profile</Text>
            </View>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({

    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '85%',
        alignSelf: 'center',
        height: '18%',
        margin: 0,
        padding: 0
    },

    logo: {
        width: 37,
        height: 37,
        transform: [{ rotate: '90deg' }],

    },

    finder: {
        tintColor: CardColors.AZUL_MARINO,
        width: 37,
        height: 37
    },

    font: {
        color: CardColors.AZUL_MARINO
    },

    Image: {
        width: 37,
        height: 37
    }

})