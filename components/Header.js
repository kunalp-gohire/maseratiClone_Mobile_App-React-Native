import React from 'react'
import {View,StyleSheet,Image}from 'react-native'
const Header = () => {
    return (
        <View style={styles.container}>
           <Image style={styles.logo} source={require('../assets/images/Final.png')}/>
           <Image style={styles.menu} source={require('../assets/images/menu.png')}/>
        </View>
    )
}
const styles= StyleSheet.create({
    container:{
        position:'absolute',
        top:45,
        zIndex:100,
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        paddingHorizontal:20
    },
    logo:{
        width:100,
        height:35,
        resizeMode:'contain' 
    } ,
    menu:{
        width:25,
        height:25,
        resizeMode:'contain'
    }
});
export default Header
