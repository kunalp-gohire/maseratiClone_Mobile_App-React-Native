import React from 'react'
import {View,Text,FlatList,Dimensions} from 'react-native';

import cars from './cars';
import styles from './styles';
import CarItem from '../CarItems';
const CarsList  = props => {
    return (
        <View style={styles.container}>
            <FlatList data={cars} keyExtractor={(item, index) => item.name}
            renderItem={({item})=><CarItem key={item.name} car={item}/>}
            showsHorizontalScrollIndicator={false}
            snapToAlignment={'start'}
            decelerationRate={'fast'}
            snapToInterval={Dimensions.get('window').height}/>
        </View>
    )
}

export default CarsList 
