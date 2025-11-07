import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { CardColors } from '../CardColors/CardColor'

const TravelList = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title_componente}>
                Pick up where you left off
            </Text>
            <Text style={styles.second_title}>
                Here are your recent searches
            </Text>
            <View style={styles.second_container}>
                <Image source={require('../assets/photo-1570097703229-b195d6dd291f.jpeg')} style={styles.Image} />
                <Image source={require('../assets/icons8-activar-el-modo-avión-64.png')} style={styles.plane_logo} />
                <View style={styles.travel_text}>
                    <Text style={styles.travel_title}>Tenerife-Paris</Text>
                    <Text style={styles.description}>Dec 5 - Dec 8 Return</Text>
                </View>
            </View>
            <View style={styles.second_container}>
                <Image source={require('../assets/Portada-43.png')} style={styles.Image} />
                <Image source={require('../assets/icons8-activar-el-modo-avión-64.png')} style={styles.plane_logo} />
                <View style={styles.travel_text}>
                    <Text style={styles.travel_title}>Tenerife-Portugal</Text>
                    <Text style={styles.description}>Dec 4 - Dec 8 Return</Text>
                </View>
            </View>
            <View style={styles.show_container}>
                <Text style={styles.show_text}>
                    Show more
                </Text>
                <Image source={require('../assets/icons8-más-de-50.png')} style={styles.image_show}></Image>
            </View>
        </View>
    )
}

export default TravelList

const styles = StyleSheet.create({

    container: {
        display: 'flex',
        margin: 20,
        marginTop: 0,
    },

    plane_logo: {
        position: 'absolute',
        width: 25,
        height: 25,
        transform: [{ rotate: '315deg' }],
        resizeMode: 'contain',
        marginLeft: 100,
        marginTop: 16
    },

    second_container: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20

    },


    title_componente: {
        fontWeight: 600,
        fontSize: 28,
        color: CardColors.NEGRO_OSCURO,
    },

    travel_text: {
        justifyContent: 'center',
        marginLeft: 20
    },

    second_title: {
        color: CardColors.NEGRO_OSCURO,
        fontSize: 20.
    },

    Image: {
        width: 80,
        height: 80,
        borderRadius: 20,
    },

    travel_title: {
        fontSize: 24,
        fontWeight: 600,
        marginLeft: 25
    },

    description: {
        fontSize: 18,
        color: CardColors.GRIS
    },

    show_container: {
        margin: 5,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },

    show_text: {
        fontWeight: 800,
        fontSize: 20,
        textDecorationLine: 'underline'
    },

    image_show: {
        transform: [{ rotate: '90deg' }],
        width: 22,
        height: 22,
        marginLeft: 5
    }

})