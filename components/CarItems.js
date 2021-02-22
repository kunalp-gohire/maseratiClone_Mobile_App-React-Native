import React from 'react'
import { StyleSheet, Text, View, ImageBackground,Dimensions,Linking } from 'react-native';

import StyledButton from './StyledButton'
const CarItems = props => {
    const {name,tagline,taglineCTA, image,MURL}= props.car;
    return (
        <View style={styles.carContainer}>
            <ImageBackground source={image} style={styles.image} />
            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subTitle}>
                    {tagline}
                </Text>
                <Text style={styles.taglineCTA}>{taglineCTA}</Text>
            </View>
            <View style={styles.buttonContainer}>
                
            <StyledButton type={'primary'} content={'Discover More'} onPress={()=>{Linking.openURL(MURL)}}/>
            <StyledButton type={'secondary'} content={'Build Your Own'} onPress={()=>{}}/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: Dimensions.get('window').height
    },
    titles: {
        marginTop: '28%',
        width: '100%',
        alignItems: 'center'
    },
    title: {
        fontSize: 40,
        fontWeight: '500'
    },
    subTitle: {

        fontSize: 16,
        fontWeight:'500',
        color: '#5c5e60'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute'
    },
    buttonContainer:{
        position:'absolute',
        bottom:45,
        width:'100%'
    },
    taglineCTA:{
       marginTop:10
    }
});
export default CarItems
