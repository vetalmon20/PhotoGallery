import React from 'react';
import { Image, View } from 'react-native';   

import { styles } from '../styles/styles';

function PhotoScreen({route, navigation }) {

    const image = route.params;
    
    return (
        <View styles = {styles.fullScreen}>
            <Image style = {styles.fullScreen} source = {{uri:image}}></Image>
        </View>
    );
    
}

export default PhotoScreen;