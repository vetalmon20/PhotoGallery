import { StyleSheet, Dimensions } from 'react-native'

const {height, width} = Dimensions.get('window');
const halfHeight = {height}.height / 2;

export const styles = StyleSheet.create({
   blackScreen: {
       flex: 1,
       backgroundColor: 'black',
   },
   fullScreen: {
       height, width
   },
   mainImage: {
       flex: 1,
       height: '100%',
       width: '100%'
   },
   mainImageContainer: {
        height: halfHeight,
        width: '100%'
   },
   authorImage: {
       marginLeft: 10,
       height: 130,
       width: 130
   },
   description: {
    padding: 10,
    fontSize: 25,
    fontFamily: 'AcademyEngravedLetPlain',
    textAlign: 'center'
    },
   authorName: {
       padding: 10,
       fontSize: 20,
       fontFamily: 'AcademyEngravedLetPlain'
   },
   authorContainer: {
       flex: 1,
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'center'
   }
})