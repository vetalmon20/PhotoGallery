import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { Text, View, Image} from 'react-native';
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';

import { styles } from '../styles/styles';

class ListScreen extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          images: [],
          isLoading: true
        };
    
        this.renderItem = this.renderItem.bind(this);
        this.pressHandler = this.pressHandler.bind(this);
    }
    
    componentDidMount() {
        fetch('https://api.unsplash.com/photos/random?count=30&client_id=IAMWV6Tx62TMZPQfRSTlJhbqzcireMDNXamZhjwXmX8')
        .then((response) => response.json())
        .then(function(data) {
            console.log(data); 
            this.setState({images:data, isLoading: false})
        }.bind(this)) 
        .catch((error) => console.error(error))
        .finally(() => {
        this.setState({ isLoading: false });
        });
    }
    
    pressHandler(image){
        this.props.navigation.navigate('Photo', image.urls.regular) 
    }
    
    renderItem(image){
        return (
          <View style = {styles.fullScreen}>
            <View style = {{flex:1}}>
              <TouchableHighlight onPress = {() => this.pressHandler(image)}>
                <View style = {styles.mainImageContainer}>
                  <Image style = {styles.mainImage} source = {{uri:image.urls.regular}} />
                </View>
              </TouchableHighlight>
            </View>
            <View style = {{flex: 1, backgroundColor:'#f59714'}}>
              <Text style = {styles.description}>{image.alt_description}</Text>
              <View style = {styles.authorContainer}> 
                <Text style = {styles.authorName}>{image.user.first_name} {image.user.last_name}</Text>
                <Image 
                  style = {styles.authorImage}
                  source = {{uri:image.user.profile_image.large}}/>
              </View>
            </View>  
          </View>
        )
    }
    
    render() {    
        if(this.state.isLoading){
          return (
            <View style = {styles.blackScreen}></View>);
        } else {
          return (
            <View>
              <FlatList 
                horizontal 
                pagingEnabled 
                data = {this.state.images}
                renderItem = {({item}) => this.renderItem(item)}
                keyExtractor = {item => item.id}
                />
            </View>
          );
        }
    }
}

export default ListScreen;