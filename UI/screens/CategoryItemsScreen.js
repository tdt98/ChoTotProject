import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  ScrollView,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Slider,
  Picker
} from "react-native";
import {
  Ionicons,
  FontAwesome,
  AntDesign,
  Feather,
  Entypo
} from "@expo/vector-icons";
import { SearchBar, Card, Image } from "react-native-elements";
import { StackActions } from "react-navigation";
import ItemList from "../components/ItemList";

export default class CategoryItemsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      price: 0,
      city: "0",
      data: []
    };
  }

  filterData = async value => {
    try {
      jsonData = [];
      if (value == "0") {
        response = await fetch(
          "https://gateway.chotot.com/v1/public/ad-listing?cg=1000&limit=10&st=s,k"
        );
        jsonData = await response.json();
      } else {
        response = await fetch(
          "https://gateway.chotot.com/v1/public/ad-listing?region_v2=" +
            value +
            "&cg=1000&limit=10&st=s,k"
        );
        jsonData = await response.json();
      }
      this.setState({
        data: jsonData["ads"],
        city: value
      });
    } catch (error) {
      console.log("error");
      this.setState({
        error: true
      });
    }
  };

  filterPrice = async () => {
    try {
        jsonData = [];
        response = await fetch(
            "https://gateway.chotot.com/v1/public/ad-listing?region_v2=" +
              this.state.city +
              "&cg=1000&limit=10&st=s,k&price="+this.state.price+"-*"
          );
        
        jsonData = await response.json();
        console.log( "https://gateway.chotot.com/v1/public/ad-listing?region_v2=" +
        this.state.city +
        "&cg=1000&limit=10&st=s,k&price="+this.state.price+"-*")
        this.setState({
          data: jsonData["ads"],
        });
      } catch (error) {
        console.log("error");
        this.setState({
          error: true
        });
      }
  }

  componentDidMount() {
    this.filterData(0);
  }

  updateSearch = search => {
    this.setState({ search });
  };
  change(value) {
    this.setState(() => {
      return {
        value: parseFloat(value)
      };
    });
  }
  render() {
    const { search } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.search}>
          <View style={styles.searchIconText}>
            <View style={{ paddingLeft: 10, justifyContent: "flex-start" }}>
              <Ionicons
                name="md-arrow-back"
                color='white'
                size={25}
                onPress={() =>
                  this.props.navigation.dispatch(StackActions.pop({ n: 1 }))
                }
              ></Ionicons>
            </View>
            <View style={styles.searchIcon}>
              <Ionicons name="md-search" size={20} color='white'></Ionicons>
            </View>
            <View>
              <TextInput
                style={styles.searchText}
                placeholder="Tìm kiếm trên Chợ Tốt"
              ></TextInput>
            </View>
          </View>
          <View>
            <View style={styles.line}></View>
          </View>
        </View>

        <View style={styles.body}>
          <ScrollView>
            <View>
              <Picker
                selectedValue={this.state.city}
                style={{ height: 50, width: Dimensions.get("window").width }}
                onValueChange={(itemValue, itemIndex) =>
                  this.filterData(itemValue)
                }
              >
                <Picker.Item label="Chọn tỉnh thành" value="0" />
                <Picker.Item label="Hồ Chí Minh" value="13000" />
                <Picker.Item label="Hà Nội" value="12000" />
              </Picker>
            </View>
            <View>
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 16 }}>
                  Giá từ: {this.state.price} -> 30.000.000.000đ
                </Text>
              </View>
              <View style = {{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <View style = {{flex: 1, alignContent: 'stretch'}}>
                    <Slider
                    minimumTrackTintColor="#0e95a7"
                    thumbTintColor="#0e95a7"
                    step={100000000}
                    minimumValue={0}
                    maximumValue={30000000000}
                    onValueChange={val => this.setState({ price: val })}
                    value={this.state.price}
                    onSlidingComplete={val => {
                        this.change(val);
                    }}
                />
                </View>
                <TouchableOpacity style={styles.applyButton} onPress ={() => this.filterPrice()}>
                  <Text style={{ color: "white" }}>Áp dụng</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ height: 10, backgroundColor: "#f4f4f4" }}></View>
            <FlatList
              data={this.state.data}
              keyExtractor={(item, ad_id) => ad_id.toString()}
              renderItem={({ item }) => (
                <ItemList
                  item={item}
                  itemClick={() => this.props.navigation.navigate("Product",{'list_id':item.list_id})}
                />
              )}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}

CategoryItemsScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginBottom: 40,
  },
  body: {},
  wrapper: {
    height: (Dimensions.get("window").height * 21) / 100
  },
  search: {
    width: Dimensions.get("window").width,
    backgroundColor: "#0e95a7",
    height: 40,
    justifyContent: "center",
  },
  searchIconText: {
    flexDirection: "row"
  },
  searchIcon: {
    marginLeft: 20,
    marginTop: 5,
  },
  searchText: {
    marginLeft: 10,
    marginTop: 4,
    fontSize: 18,
    color: "black"
  },
  line: {
    width: 350,
    height: 0.5,
    backgroundColor: "black",
    marginLeft: 50
  },

  imageBanner: {
    width: Dimensions.get("window").width,
    height: 140
  },

  categoryText: {
    fontWeight: "bold",
    fontSize: 15,
    paddingLeft: 5
  },
  categoryList: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  cardCate: {
    backgroundColor: "#f4f4f4",
    justifyContent: "space-around",
    alignItems: "center",
    width: 120
  },
  product: {
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 10
  },
  infoProduct: {
    flexDirection: "column",
    flex: 8,
    paddingLeft: 10,
    paddingRight: 20,
    justifyContent: "space-around"
  },
  title: {
    fontSize: 12
  },
  price: {
    color: "#D0021B",
    fontWeight: "bold"
  },
  imageProduct: {
    flex: 2,
    width: 130,
    height: 90
  },
  area: {
    color: "#a5a5a5",
    fontSize: 10
  },
  verticalLine: {
    backgroundColor: "#a5a5a5",
    height: 15,
    width: 0.5
  },
  applyButton: {
    backgroundColor: "#0e95a7",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    height: 30,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: 'flex-end'
  }
});
