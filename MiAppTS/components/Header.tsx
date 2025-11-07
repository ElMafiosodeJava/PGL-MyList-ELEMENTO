import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CardColors } from '../CardColors/CardColor'
const Header = () => {
    return (
        <View style={styles.header}>
            <View style={styles.container}>
                <Image source={require('../assets/Skyscanner-Symbol.png')} style={styles.sky_logo} />
                <Text style={styles.font_title}>Skyscanner</Text>
            </View>
            <View style={styles.logos_container}>
                <View style={styles.logo_and_text}>
                    <Pressable style={styles.circle}>
                        <Image source={require('../assets/icons8-activar-el-modo-avión-64.png')} style={styles.logos} />
                    </Pressable>
                    <Text style={styles.logo_text}>Flights</Text>
                </View>
                <View style={styles.logo_and_text}>
                    <Pressable style={styles.circle}>
                        <Image source={require('../assets/icons8-cama-64.png')} style={styles.logos} />
                    </Pressable>
                    <Text style={styles.logo_text}>Hotels</Text>
                </View>
                <View style={styles.logo_and_text}>
                    <Pressable style={styles.circle}>
                        <Image source={require('../assets/icons8-personas-en-coche,-vista-lateral-50.png')} style={styles.logos} />
                    </Pressable>
                    <Text style={styles.logo_text}>Car Rental</Text>
                </View>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({

    header: {
        backgroundColor: CardColors.AZUL_MUY_OSCURO,

    },

    container: {
        margin: 25,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        marginTop: 40,

    },

    sky_logo: {
        width: 64,
        height: 64,
        resizeMode: 'contain',
    },

    font_title: {
        color: CardColors.BLANCO,
        fontSize: 34,
        marginLeft: 5,
        fontWeight: 800

    },

    logos_container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '75%',
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 45,

    },

    logo_and_text: {
        justifyContent: 'center',
        alignItems: 'center',
    },


    circle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 65,
        height: 65,
        borderWidth: 3,
        borderRadius: 65 / 2,
        borderColor: 'transparent',
        backgroundColor: CardColors.AZUL_MARINO

    },

    logos: {
        width: 25,
        height: 25,
        tintColor: CardColors.BLANCO,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'contain'

    },

    logo_text: {
        marginTop: 14,
        fontSize: 16,
        color: CardColors.BLANCO,
        fontWeight: 600,
        flexShrink: 1,
    }


})