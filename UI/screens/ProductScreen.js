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
  Picker,
  Linking
} from "react-native";
import {
  Ionicons,
  FontAwesome,
  AntDesign,
  Feather,
  Entypo,
  EvilIcons
} from "@expo/vector-icons";
import { SearchBar, Card, Image } from "react-native-elements";
import Swiper from "react-native-swiper";
import { StackActions } from "react-navigation";

export default class ProductScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      loading: true
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {
      jsonData = {};
      const { navigation } = this.props;
      response = await fetch(
        "https://gateway.chotot.com/v1/public/ad-listing/" +
          navigation.getParam("list_id")
      );
      console.log(navigation.getParam("list_id"));
      jsonData = await response.json();
      this.setState({
        data: jsonData["ad"],
        loading: false
      });
    } catch (error) {
      console.log("error");
      this.setState({
        error: true
      });
    }
  };

  render() {
    if (this.state.loading == true) {
      return (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator size="large" color="#0e95a7" />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Ionicons
              name="md-arrow-back"
              size={22}
              color="white"
              onPress={() =>
                this.props.navigation.dispatch(StackActions.pop({ n: 1 }))
              }
            ></Ionicons>
          </View>
          <View style={styles.headerRight}>
            <Feather name="heart" size={22} color="white"></Feather>
            <Feather name="share-2" size={22} color="white"></Feather>
            <Feather name="more-vertical" size={22} color="white"></Feather>
          </View>
        </View>
        <View style={styles.body}>
          <ScrollView>
            <Swiper
              style={styles.banner}
              showsButtons={false}
              autoplayTimeout={3}
              autoplay={true}
            >
              {this.state.data["images"].map(link => {
                return (
                  <View key={link}>
                    <Image
                      style={styles.imageBanner}
                      source={{ uri: link }}
                    ></Image>
                  </View>
                );
              })}
            </Swiper>
            <View style={{ paddingLeft: 10 }}>
              <View>
                <Text style={styles.title}>{this.state.data["subject"]}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <View>
                  <Text style={styles.price_string}>
                    {this.state.data["price"]}
                  </Text>
                  <Text style={styles.time}>{this.state.data["date"]}</Text>
                </View>
                <View style={styles.bookmark}>
                  <Text style={{ color: "#D0021B" }}>Lưu tin</Text>
                  <Feather
                    name="heart"
                    style={{ color: "#D0021B", marginLeft: 5 }}
                  ></Feather>
                </View>
              </View>
            </View>
            <View style={styles.info}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <FontAwesome name="user-circle" size={30}></FontAwesome>
                  <View style={{ marginLeft: 10 }}>
                    <View>
                      <Text style={{ fontWeight: "bold" }}>
                        {this.state.data["account_name"]}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginLeft: -15,
                        marginTop: -10
                      }}
                    >
                      <Entypo
                        name="dot-single"
                        size={40}
                        style={{ color: "#9b9b9b" }}
                      ></Entypo>
                      <Text style={{ fontSize: 13, color: "#9b9b9b" }}>
                        Hoạt động 3 giờ trước
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: 10,
                    width: 80,
                    height: 25,
                    borderWidth: 1,
                    borderColor: "#FFBA00",
                    borderRadius: 50
                  }}
                >
                  <Text style={{ color: "#FFBA00", fontSize: 12 }}>
                    Xem trang
                  </Text>
                </View>
              </View>
              <View
                style={{ flexDirection: "row", justifyContent: "space-around" }}
              >
                <View style={{ alignItems: "center" }}>
                  <Text style={{ color: "#9b9b9b" }}>Môi giới</Text>
                  <Entypo name="briefcase" size={18}></Entypo>
                </View>
                <View
                  style={{ height: 25, width: 1, backgroundColor: "#9b9b9b" }}
                ></View>
                <View style={{ alignItems: "center" }}>
                  <Text style={{ color: "#9b9b9b" }}>Đánh giá</Text>
                  <Text style={{ color: "#9b9b9b" }}>- - -</Text>
                </View>
                <View
                  style={{ height: 25, width: 1, backgroundColor: "#9b9b9b" }}
                ></View>
                <View style={{ alignItems: "center" }}>
                  <Text style={{ color: "#9b9b9b" }}>Phản hồi chat</Text>
                  <Text style={{ color: "#9b9b9b" }}>91%</Text>
                </View>
              </View>
              <View
                style={{
                  height: 1,
                  width: 370,
                  backgroundColor: "#9b9b9b",
                  marginTop: 10
                }}
              ></View>
            </View>
            <View style={styles.content}>
              <Text style={{ fontSize: 15 }}>{this.state.data["body"]}</Text>
              <View style={{ marginTop: 10 }}>
                <Text
                  style={{ fontWeight: "bold", fontSize: 17, color: "#9b9b9b" }}
                >
                  Địa chỉ ĐBS
                </Text>
                <View
                  style={{
                    height: 1,
                    width: 370,
                    backgroundColor: "#9b9b9b",
                    marginTop: 10
                  }}
                ></View>
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 10,
                    marginLeft: -10
                  }}
                >
                  <EvilIcons name="location" size={30}></EvilIcons>
                  <Text>
                    {this.state.data.address +
                      ", " +
                      this.state.data.ward_name +
                      ", " +
                      this.state.data.area_name +
                      ", " +
                      this.state.data.region_name}
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity
            style={styles.call}
            onPress={() => Linking.openURL("tel:" + this.state.data.phone)}
          >
            <Feather name="phone-call" size={20} color="white"></Feather>
            <Text
              style={{ fontSize: 15, fontWeight: "bold", color: "white" }}
            >
              Gọi điện
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.itemCommunication}
            onPress={() => Linking.openURL("sms:" + this.state.data.phone)}
          >
            <AntDesign name="message1" size={20} color="#0e95a7"></AntDesign>
            <Text style={styles.itemText}>Gửi SMS</Text>
          </TouchableOpacity>
          <View style={styles.itemCommunication}>
            <Ionicons
              name="md-chatboxes"
              size={20}
              color="#0e95a7"
              backgroundColor="white"
            ></Ionicons>
            <Text style={styles.itemText}>Chat</Text>
          </View>
        </View>
      </View>
    );
  }
}

ProductScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
  body: {
    flex: 0.89
  },
  header: {
    flexDirection: "row",
    width: Dimensions.get("window").width,
    backgroundColor: "#0e95a7",
    justifyContent: "space-between",
    flex: 0.05,
    height: 100
  },
  headerLeft: {
    marginLeft: 10,
    justifyContent: "center"
  },

  headerRight: {
    flexDirection: "row",
    width: (Dimensions.get("window").width * 30) / 100,
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 10
  },
  banner: {
    height: (Dimensions.get("window").height * 30) / 100
  },
  imageBanner: {
    width: Dimensions.get("window").width,
    height: 220
  },
  title: {
    fontSize: 15
  },
  price: {
    color: "#D0021B",
    fontWeight: "bold"
  },
  time: {
    fontSize: 10,
    color: "#9B9B9B"
  },
  bookmark: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    width: 80,
    height: 32,
    borderWidth: 1,
    borderColor: "#D0021B",
    borderRadius: 50
  },
  info: {
    height: 100,
    paddingLeft: 10,
    marginTop: 10
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10
  },
  bottom: {
    flex: 0.06,
    flexDirection: "row",
    marginBottom: 15,
    alignItems: "flex-start",
    elevation: 10
  },
  itemCommunication: {
    paddingTop: 5,
    width: Dimensions.get("window").width / 3,
    height: 50,
    alignItems: "center"
  },
  call: {
    paddingTop: 5,
    width: Dimensions.get("window").width / 3,
    height: 50,
    alignItems: "center",
    backgroundColor: "#0e95a7"
  },
  itemText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#0e95a7"
  }
});
