import React, { Component } from 'react';
import { StyleSheet, Text, Dimensions, View, FlatList, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { TouchableOpacity } from 'react-native-gesture-handler';
const notice = [
  {
    id: 1,
    image: require('../assets/images/sdk.png'),
    title: 'Việt Nam, bàn tiến không bàn lùi',
    content: 'Khi mua ô tô, việc bàn lùi sẽ mang đến những hậu quả thật sự khó lường. Đại hoạ nào đã ập đến gia đình này?',
    watch: 'Xem video ngay!',
    link: 'https://www.youtube.com/watch?v=s4TaBsEuWmw'
  },
  {
    id: 2,
    image: require('../assets/images/sdk1.png'),
    title: 'Người hùng bàn tiến',
    content: 'Khi mua ô tô, việc bàn lùi sẽ mang đến những hậu quả thật sự khó lường. Đại hoạ nào đã ập đến gia đình này?',
    watch: 'Xem ngay!',
    link: 'https://bit.ly/2RkAxUv'
  },
  {
    id: 3,
    image: require('../assets/images/sdk2.png'),
    title: 'Khẩu chiến Bụt vs. Tiều Phu-Kẻ tám lạng? - Người nửa cân!',
    content: 'Khi mua ô tô, việc bàn lùi sẽ mang đến những hậu quả thật sự khó lường. Đại hoạ nào đã ập đến gia đình này?',
    watch: 'Xem video ngay!',
    link: 'https://youtu.be/FdiIIis2Dig'
  },
  {
    id: 4,
    image: require('../assets/images/sdk3.png'),
    title: 'Boss tuyển sen, ai bon chen quẹo lựa?',
    content: 'Hàng ngàn boss trên Chợ Tốt Thú Cưng đã ban thánh chỉ, ra lệnh các sen phải xem ngay video triệu view của boss!',
    watch: 'Xem ngay👉',
    link: 'https://www.youtube.com/watch?v=OEg4rNZY8Ds'
  },
  {
    id: 5,
    image: require('../assets/images/sdk4.png'),
    title: 'Thay đổi giao diện TRUNG TÂM TRỢ GIÚP',
    content: 'Chợ Tốt vừa ra mắt giao diện TRUNG TÂM TRỢ GIÚP hoàn toàn mới, giúp người dùng giải đáp thắc mắc khi sử dụng dịch vụ trên Chợ Tốt một cách dễ dàng và thuận tiện.',
    watch: 'TRẢI NGHIỆM NGAY!',
    link: 'https://trogiup.chotot.com/'
  },
  {
    id: 6,
    image: require('../assets/images/sdk5.png'),
    title: '🔥 Ơn giời… VÒNG QUAY trở lại rồi!!!!!',
    content: 'Samsung Galaxy A8 2018, xé xem phim CGV và rất nhiều voucher The Coffee House đang đợi bạn. Quay ầm ầm, trúng rầm rầm!!!!!',
    watch: 'QUAY NGAY✨',
    link: 'https://www.chotot.com/chuong-trinh/vong-quay-may-man/web/game?xtor=AD-888960-[vongquay-NF]'
  },
]

export default class NotificationScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ alignItems: 'center', justifyContent: 'center', height: 40 }}>
          <Text style ={{fontWeight:'bold'}}>TIN MỚI</Text>
        </View>
        <View style={styles.line}></View>


        <ScrollView>
          <FlatList
            data={notice}
            keyExtractor={(item, id) => id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.wrapNotice} onPress = {() => this._handlePressItem(item.link)}>
                <View style={{ borderWidth: 0.5, borderColor: '#d6d7da' }}>
                  <View style={styles.notice}>
                    <Image style={styles.imageNotice}
                      source={item.image} 
                      />
                    <Text style={styles.textNoti}>{item.title}</Text>
                  </View>
                  <View style={styles.content}>
                    <Text style={styles.textContent}>
                      {item.content}
                    </Text>
                    <Text style={styles.textNoti}>{item.watch}</Text>
                  </View>
                </View>
              </TouchableOpacity>)
            }
          />
        </ScrollView>
      </View>
    );
  }



  _handlePressItem = (link) => {
    WebBrowser.openBrowserAsync(link);
  };
}
NotificationScreen.navigationOptions ={
  header: null,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },

  line: {
    width: Dimensions.get('window').width,
    height: 3,
    backgroundColor: '#FFBA00'
  },
  wrapNotice: {
    height: 400,
    justifyContent: 'flex-start',
    alignItems: "center",

  },
  notice: {
    backgroundColor: '#f4f4f4',
    height: 'auto'
  },
  imageNotice: {
    width: 370,
    height: 290,
    marginTop: 5
  },
  content: {
    width: 370,

  },
  textNoti: {
    marginRight: 5,
    marginLeft: 5,
    fontSize: 15,
    width: 370
  },
  textContent: {
    marginRight: 5,
    marginLeft: 5,
    fontSize: 15,
    width: 370,
    color: '#8e8e8d'
  }
});
