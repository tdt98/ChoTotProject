import React from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  FlatList,
  Dimensions,
  View,
  Image,
  TouchableOpacity
} from "react-native";
import { Feather } from "@expo/vector-icons";

const chat = [
  {
    id: 1,
    avatar: require("../assets/images/phi.jpg"),
    name: "Phi Nguyễn",
    message: "OK",
    time: "17:50"
  },
  {
    id: 2,
    avatar: require("../assets/images/mon.jpg"),
    name: "Trâm Anh",
    message: "Hẹn ngày mai gặp",
    time: "8:14"
  },
  {
    id: 3,
    avatar: require("../assets/images/vinh.jpg"),
    name: "Vinh",
    message: "Chắc chắn rồi",
    time: "15:07"
  },
  {
    id: 4,
    avatar: require("../assets/images/dung.jpg"),
    name: "Phương Dung",
    message: "Bye",
    time: "9:00"
  },
  {
    id: 5,
    avatar: require("../assets/images/huu.jpg"),
    name: "Phan Thanh Hữu",
    message: "Hẹn dịp khác nhé",
    time: "13:35"
  },
  {
    id: 6,
    avatar: require("../assets/images/huong.jpg"),
    name: "Hương Nguyễn",
    message: "Được rồi",
    time: "12:48"
  },
  {
    id: 7,
    avatar: require("../assets/images/noname.jpg"),
    name: "Khánh Huy",
    message: "Haha",
    time: "8:46"
  },
  {
    id: 8,
    avatar: require("../assets/images/yhuong.jpg"),
    name: "Yến Hương",
    message: "yeah",
    time: "7:44"
  }
];
export default class LinksScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row", marginLeft: 10, marginTop: 10 }}>
          <View>
            <Image
              style={{ height: 40, width: 40, borderRadius: 50 }}
              source={require("../assets/images/avatar.jpg")}
            ></Image>
          </View>
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontWeight: "bold", fontSize: 25 }}>Chat</Text>
          </View>
        </View>
        <View style={{ alignItems: "center", marginTop: 20, marginBottom: 20 }}>
          <View
            style={{
              flexDirection: "row",
              width: 350,
              height: 45,
              borderWidth: 0.5,
              borderColor: "#bebebe",
              borderRadius: 50,
              alignItems: "center",
              paddingLeft: 10
            }}
          >
            <Feather name="search" size={20}></Feather>
            <TextInput
              style={{ fontSize: 18, marginLeft: 10 }}
              placeholder="Tìm kiếm"
            ></TextInput>
          </View>
        </View>
        <ScrollView>
          <FlatList
            data={chat}
            keyExtractor={(item, id) => id.toString()}
            renderItem={({ item }) => (
              <View style={styles.chat}>
                <View style={styles.wrapAvatar}>
                  <Image style={styles.avatar} source={item.avatar}></Image>
                </View>
                <View style={{ paddingLeft: 10, width: 310 }}>
                  <Text style={styles.textName}>{item.name}</Text>
                  <View style={styles.wrapMessage}>
                    <Text>{item.message}</Text>
                    <Text>{item.time}</Text>
                  </View>
                </View>
              </View>
            )}
          />
        </ScrollView>
      </View>
    );
  }
}

LinksScreen.navigationOptions={
  header: null
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20
  },
  chat: {
    height: 100,
    flexDirection: "row",
    alignItems: "center"
  },
  wrapAvatar: {
    width: 60,
    height: 60,
    justifyContent: "center",
    marginLeft: 10
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50
  },
  name: {},
  textName: {
    fontWeight: "bold",
    fontSize: 20
  },
  wrapMessage: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
