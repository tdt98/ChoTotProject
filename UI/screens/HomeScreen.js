import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput, ScrollView, ActivityIndicator, FlatList, TouchableOpacity, YellowBox } from 'react-native';
import { Ionicons, FontAwesome, AntDesign, Feather, Entypo } from '@expo/vector-icons';
import { SearchBar, Card, Image } from 'react-native-elements';
import Swiper from '../node_modules/react-native-swiper'
import ItemList from '../components/ItemList'
import firebase from "firebase"

console.disableYellowBox = true

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      data: [],
    }
  }
  getData = async () => {
    try {
      jsonData = [];
      userID = firebase.auth().currentUser.uid
      id = -1

      await firebase.database().ref('Users/'+userID).once('value').then(function(snapshot){
        id = snapshot.val().id
      })
      response = await fetch(
          "http://192.168.100.146:4500/result?user_id="+id
      );
      
      jsonData = await response.json();
      this.setState({
        data: jsonData["list"],
      });
    } catch (error) {
      console.log("error");
      this.setState({
        error: true
      });
    }
  };

  componentDidMount() {
    this.getData();
  }

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;
    return (

      <View style={styles.container}>
        <SearchBar
          placeholder="Tìm kiếm trên Chợ Tốt"
          onChangeText={this.updateSearch}
          value={search}
          lightTheme = {true}
        />
        <View>
          <ScrollView>
            <Swiper style={styles.wrapper} showsButtons={false} autoplayTimeout={3} autoplay={true}>
              <View >
                <Image style={styles.imageBanner} source={require('../assets/images/banner1.jpg')}></Image>
              </View>
              <View>
                <Image style={styles.imageBanner} source={require('../assets/images/banner2.jpg')}></Image>
              </View>
              <View>
                <Image style={styles.imageBanner} source={require('../assets/images/banner3.jpg')}></Image>
              </View>
            </Swiper>
            <View style={{ height: 10, backgroundColor: '#f4f4f4' }}></View>
            <View style={{ height: 50, justifyContent: 'center' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 15, paddingLeft: 5, color:'#0e95a7' }}> Khám phá danh mục</Text>
            </View>
            <View style={styles.categoryList}>
              <TouchableOpacity style={styles.cardCate} onPress = {() => this.props.navigation.navigate("CategoryItems",{category: 1000})}>
                <Text style={styles.categoryText}>Bất động sản</Text>
                <FontAwesome name="home" size={50} color = '#0e95a7'></FontAwesome>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cardCate} onPress = {() => this.props.navigation.navigate("CategoryItems",{category: 2000})}>
                <Text style={styles.categoryText}>Xe cộ</Text>
                <AntDesign name="car" size={50} color = '#0e95a7'></AntDesign>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cardCate} onPress = {() => this.props.navigation.navigate("CategoryItems",{category:5000})} >
                <Text style={styles.categoryText}>Đồ điện tử</Text>
                <FontAwesome name="mobile-phone" size={50} color = '#0e95a7'></FontAwesome>
              </TouchableOpacity>
            </View>

            <FlatList
              data={this.state.data}
              keyExtractor={(item, id) => id.toString()}
              renderItem={({ item }) => <ItemList item = {item} itemClick = {() =>this.props.navigation.navigate("Product",{list_id: item.list_id})}/>
              }
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}
HomeScreen.navigationOptions = {
  header: null,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 17,
    marginBottom:40,
  },
  wrapper: {
    height: Dimensions.get('window').height * 21 / 100,
  },
  search: {
    width: Dimensions.get('window').width,
    backgroundColor: '#FFBA00',
    // height: 40
    flex: 0.1
  },
  searchIconText: {
    flexDirection: 'row',
    flex: 0.9
  },
  searchIcon: {
    marginLeft: 20,
    justifyContent: 'flex-start',
    marginTop: 8
  },
  searchText: {
    marginLeft: 10,
    marginTop: 4,
    fontSize: 18,
    color: 'black'
  },
  line: {
    width: 350,
    height: 0.5,
    backgroundColor: 'black',
    marginLeft: 20,
  },

  imageBanner: {
    width: Dimensions.get('window').width,
    height: 140
  },

  categoryText: {
    fontWeight: 'bold',
    fontSize: 15,
    paddingLeft: 5,
    color: '#0e95a7',
  },
  categoryList: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  cardCate: {
    backgroundColor: '#f4f4f4',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 120
  },
  product: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 10,
  },
  infoProduct: {
    flexDirection: 'column',
    flex: 8,
    paddingLeft: 10,
    paddingRight: 20,
    justifyContent: 'space-around'
  },
  title: {
    fontSize: 12
  },
  price: {
    color: '#D0021B',
    fontWeight: 'bold'
  },
  imageProduct: {
    flex: 2,
    width: 130,
    height: 90
  },
  area: {
    color: '#a5a5a5',
    fontSize: 10
  },
  verticalLine: {
    backgroundColor: '#a5a5a5',
    height: 15,
    width: 0.5

  }
});
