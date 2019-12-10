import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ImageBackground,
  YellowBox 
} from "react-native";

import firebase from "firebase";

export default class RegisterScreen extends React.Component {
  emailSignUp = (email, password) => {
    try {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          firebase.database().ref('Users/'+ user.user.uid).set({
            email,
            password,
            id: user.user.uid
          })
        });
    } catch (error) {
      console.log(error.toString(error));
    }
  };

  constructor(props) {
    super(props);

    this.state = {
      logInStatus: "signed out",
      errorMessage: "none",
      email: "",
      password: ""
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style = {{borderRadius: 10, overflow: 'hidden'}}>
          <TextInput
            editable
            maxLength={40}
            style={styles.input}
            placeholder="Email"
            onChangeText={text => this.setState({ email: text })}
            value={this.state.email}
          />
        </View>
        <View style = {{borderRadius: 10, overflow: 'hidden', marginTop: 10}}>
          <TextInput
            editable
            maxLength={40}
            style={styles.input}
            placeholder="Mật khẩu"
            secureTextEntry={true}
            onChangeText={text => this.setState({ password: text })}
            value={this.state.password}
          />
        </View>

        <TouchableOpacity
          style={styles.signupButton}
          onPress={() =>
            this.emailSignUp(this.state.email, this.state.password)
          }
        >
          <Text style={{ color: "#0e95a7", fontWeight: "bold" }}>Đồng ý</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "center"
  },
  input: {
    padding: 10,
    height: 40,
    borderColor: "#0e95a7",
    borderWidth: 1,
    width: 300
  },
  signupButton: {
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    width: 300,
    height: 40,
    marginTop: 10,
    elevation: 3,
    borderRadius: 10
  }
});

RegisterScreen.navigationOptions = {
  title: 'Đăng kí tài khoản',
  headerTintColor: '#0e95a7',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
};
