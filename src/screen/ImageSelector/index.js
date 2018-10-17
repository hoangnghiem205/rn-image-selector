import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
const imgs = [
    require('../../../assets/1.jpg'),
    require('../../../assets/2.jpg'),
    require('../../../assets/3.jpg'),
    require('../../../assets/4.jpg'),
    require('../../../assets/5.jpg'),
    require('../../../assets/6.jpg'),
    require('../../../assets/7.jpg'),
    require('../../../assets/8.jpg'),
    require('../../../assets/9.jpg'),
    require('../../../assets/10.jpg'),
    require('../../../assets/1.jpg'),
    require('../../../assets/2.jpg'),
    require('../../../assets/3.jpg'),
    require('../../../assets/4.jpg'),
    require('../../../assets/5.jpg'),
    require('../../../assets/6.jpg'),
    require('../../../assets/7.jpg'),
    require('../../../assets/8.jpg'),
    require('../../../assets/9.jpg'),
    require('../../../assets/1.jpg'),
    require('../../../assets/2.jpg'),
    require('../../../assets/3.jpg'),
    require('../../../assets/4.jpg'),
    require('../../../assets/5.jpg'),
    require('../../../assets/6.jpg'),
    require('../../../assets/7.jpg'),
    require('../../../assets/8.jpg'),
    require('../../../assets/9.jpg'),
    require('../../../assets/1.jpg'),
    require('../../../assets/2.jpg'),
    require('../../../assets/3.jpg'),
    require('../../../assets/4.jpg'),
    require('../../../assets/5.jpg'),
    require('../../../assets/6.jpg'),
    require('../../../assets/7.jpg'),
    require('../../../assets/8.jpg'),
    require('../../../assets/9.jpg'),
    require('../../../assets/10.jpg')
]
export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            selected: []
        }
        this.select = this.select.bind(this);
    }

    select(i) {
        let arr = this.state.selected;
        if (arr.indexOf(i) > -1) {
            arr.splice(arr.indexOf(i), 1);
            this.setState({
                count: this.state.count - 1,
                selected: arr
            })    
        } else {
            arr.push(i);
            this.setState({
                count: this.state.count + 1,
                selected: arr
            })
        }
    }

    renderImage() {
        let imagesConponent = []
        imgs.map((item, i) => {
            if (this.state.selected.indexOf(i) > -1) {
                imagesConponent.push(
                    <TouchableOpacity key={i} style={styles.imgContainer} onPress={() => this.select(i)}>
                        <Image source={item} style={styles.img} resizeMode="cover" />
                        <View style={styles.iconContainer}>
                            <Icon name="check-circle" size={25} color="#FFF" style={styles.icon} />
                        </View>
                    </TouchableOpacity>)
            } else {
                imagesConponent.push(
                    <TouchableOpacity key={i} style={styles.imgContainer} onPress={() => this.select(i)}>
                        <Image source={item} style={styles.img} resizeMode="cover" />
                    </TouchableOpacity>)
            }

        })
        return imagesConponent;
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>{this.state.count == 0 ? 'Select Image' : `${this.state.count} images has been selected`}</Text>
                </View>
                <View style={styles.content}>
                    <ScrollView contentContainerStyle={styles.contentContainer}>
                        {this.renderImage()}
                    </ScrollView>
                </View>
            </View>
        );
    }
}