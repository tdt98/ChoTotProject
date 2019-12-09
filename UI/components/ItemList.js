import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Image
} from "react-native";

import {
  Ionicons,
  FontAwesome,
  AntDesign,
  Feather,
  Entypo
} from "@expo/vector-icons";

ItemList = props => {
  return (
    <TouchableOpacity onPress={() => props.itemClick()}>
      <View style={styles.product}>
        <Image
          style={styles.imageProduct}
          PlaceholderContent={<ActivityIndicator />}
          source={{
            uri: props.item.image
          }}
        />
        <View style={styles.infoProduct}>
          <Text style={styles.title}>{props.item.subject}</Text>
          <Text style={styles.price}>
            {props.item.price_string}
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View
              style={{
                flexDirection: "row",
                width: 170,
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <Entypo name="briefcase" size={18} color="#a5a5a5"></Entypo>
              <Text style={styles.area}>
                {" " + props.item.account_name + " "}
              </Text>
              <View style={styles.verticalLine}></View>
              <Text style={styles.area}>{" " + props.item.date + " "}</Text>
              <View style={styles.verticalLine}></View>
              <Text style={styles.area}>{" " + props.item.area_name}</Text>
            </View>
            <View>
              <Feather name="heart" size={18} color="#D0021B"></Feather>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemList;
const styles = StyleSheet.create({
  product: {
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 10
  },
  imageProduct: {
    flex: 2,
    width: 130,
    height: 90
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
  area: {
    color: "#a5a5a5",
    fontSize: 10
  },
  verticalLine: {
    backgroundColor: "#a5a5a5",
    height: 15,
    width: 0.5
  }
});
