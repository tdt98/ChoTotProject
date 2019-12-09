import React from "react";
import {
  StyleSheet,
  Text,
  Dimensions,
  View,
  Image,
  TouchableOpacity
} from "react-native";
import {
  Ionicons,
  Octicons,
  Entypo,
  Feather,
  AntDesign,
  MaterialIcons,
  EvilIcons,
  MaterialCommunityIcons,
  FontAwesome
} from "@expo/vector-icons";

export default class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.info}>
          <View style={styles.avatarWrapper}>
            <Image
              style={styles.avatar}
              source={require("../assets/images/avatar.jpg")}
            ></Image>
          </View>
          <View style={styles.userInfo}>
            <View>
              <View>
                <Text style={styles.userName}>Vương Nguyễn</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text>0 Người theo dõi </Text>
              <Text>0 Đang theo dõi</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <TouchableOpacity>
                <View
                  style={{
                    borderRadius: 50,
                    borderWidth: 1,
                    borderColor: "#d6d7da",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 180,
                    height: 30
                  }}
                >
                  <Text>Chỉnh sửa trang cá nhân</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    borderRadius: 50,
                    borderWidth: 1,
                    borderColor: "#d6d7da",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 30,
                    height: 30
                  }}
                >
                  <Feather name="more-horizontal" size={20}></Feather>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.line}></View>
        <View
          style={{
            paddingLeft: 10,
            height: 180,
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <FontAwesome name="star-o" size={20} color="#BCBCBC"></FontAwesome>
            <View style={{ marginLeft: 5 }}>
              <Text style={{ color: "#BCBCBC" }}>
                Đánh giá: Chưa có đánh giá
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <AntDesign name="calendar" size={20} color="#BCBCBC"></AntDesign>
            <View style={{ marginLeft: 5, flexDirection: "row" }}>
              <Text style={{ color: "#BCBCBC" }}>Ngày tham gia: </Text>
              <Text style={{ color: "black" }}>16/11/2019</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <EvilIcons name="location" size={20} color="#BCBCBC"></EvilIcons>
            <View style={{ marginLeft: 5 }}>
              <Text style={{ color: "#BCBCBC" }}>Địa chỉ: chưa cung cấp</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Feather name="message-square" size={20} color="#BCBCBC"></Feather>
            <View style={{ marginLeft: 5 }}>
              <Text style={{ color: "#BCBCBC" }}>
                Phản hồi chat: Chưa có thông tin
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <AntDesign
              name="checkcircleo"
              size={20}
              color="#BCBCBC"
            ></AntDesign>
            <View style={{ marginLeft: 5 }}>
              <Text style={{ color: "#BCBCBC" }}>Đã cung cấp: </Text>
            </View>
            <View
              style={{
                marginLeft: 5,
                flexDirection: "row",
                width: 90,
                justifyContent: "space-between"
              }}
            >
              <FontAwesome
                name="facebook"
                size={18}
                color="#27812A"
              ></FontAwesome>
              <EvilIcons name="location" size={18}></EvilIcons>
              <Ionicons name="md-call" size={18} color="#27812A"></Ionicons>
              <Octicons name="mail" size={18}></Octicons>
            </View>
          </View>
        </View>
        <View style={styles.line}></View>
        <View
          style={{
            paddingLeft: 10,
            paddingRight: 10,
            justifyContent: "space-around"
          }}
        >
          <TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                height: 30,
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <MaterialIcons name="help" size={30}></MaterialIcons>
              <View
                style={{
                  width: 100,
                  marginLeft: 10
                }}
              >
                <Text style={{ fontSize: 10, fontWeight: 'bold'}}>Trợ giúp</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                height: 30,
                alignItems: "center"
              }}
            >
              <MaterialCommunityIcons
                name="logout"
                size={30}
              ></MaterialCommunityIcons>
              <View
                style={{
                  width: 100,
                  marginLeft: 10
                }}
              >
                <Text style={{ fontSize: 10, fontWeight: 'bold'}}>Đăng xuất</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

SettingsScreen.navigationOptions ={
  header: null
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: 25,
  },
  info: {
    flexDirection: "row",
    alignItems: "center"
  },
  avatarWrapper: {
    flex: 0.3,
    alignItems: "center"
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  userInfo: {
    flex: 0.6,
    height: 100,
    justifyContent: "space-between",
    marginLeft: 10
  },
  userName: {
    fontWeight: "bold",
    fontSize: 20
  },
  line: {
    marginTop: 10,
    marginBottom: 10,
    width: Dimensions.get("window").width,
    height: 0.5,
    backgroundColor: "#bcbcbc"
  }
});
