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
  ImageBackground
} from "react-native";
import firebase from "firebase";
import * as Facebook from "expo-facebook";

const FACEBOOK_APP_ID = "1094201460916838";
const config = {
  apiKey: "AIzaSyCDfYg5_k2PEGrpUBVa8X2gO0QUIErpjpM",
  authDomain: "chotot-2abc8.firebaseapp.com",
  databaseURL: "https://chotot-2abc8.firebaseio.com",
  projectId: "chotot-2abc8",
  storageBucket: "chotot-2abc8.appspot.com",
  messagingSenderId: "492310603571",
  appId: "1:492310603571:web:901d8ed5340bd868804046",
  measurementId: "G-HGF1MMM699"
};
firebase.initializeApp(config);
const auth = firebase.auth();

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      logInStatus: 0,
      errorMessage: "none",
      email: "",
      password: ""
    };
  }

  // componentWillMount() {
  //   auth.onAuthStateChanged(user => {
  //     if (user != null) {
  //       this.props.navigation.navigate("Main");
  //     } else {
  //       this.setState({ logInStatus: "0" });
  //     }
  //   });
  // }

  emailLogin = (email, password) => {
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(res => {
          this.props.navigation.navigate("Main");
        });
    } catch (error) {
      console.log(error.toString(error));
    }
  };

  emailSignUp = (email, password) => {
    try {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          console.log(user);
        });
    } catch (error) {
      console.log(error.toString(error));
    }
  };

  handleFacebookButton = async () => {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(
      FACEBOOK_APP_ID,
      {
        permissions: ["public_profile", "email"]
      }
    );
    if (type === "success") {
      //Firebase credential is created with the Facebook access token.
      const credential = firebase.auth.FacebookAuthProvider.credential(token);
      auth.signInWithCredential(credential).catch(error => {
        this.setState({ errorMessage: error.message });
      });
    } else {
      console.log("error");
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../assets/images/logo.png")}
          style={{ height: 200, width: 200 }}
        />
        <View>
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
            style={styles.loginButton}
            // onPress={() =>
            //   this.emailLogin(this.state.email, this.state.password)
            // }
            onPress={() => this.props.navigation.navigate("Main")}
          >
            <Text style={{ color: "white" , fontWeight: 'bold'}}>Đăng nhập</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.facebookLogin}
            onPress={() => this.handleFacebookButton()}
          >
            <Text style={{ color: "white", fontWeight: 'bold' }}>Đăng nhập bằng</Text>
            <Image
              source={require("../assets/images/facebook.png")}
              style={styles.facebookLogo}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.signupButton}
            onPress={() => this.props.navigation.navigate("Register")}
          >
            <Text style={{ color: "#0e95a7", fontWeight: 'bold'}}>Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

LoginScreen.navigationOptions = {
  header: null
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around"
  },
  input: {
    padding: 10,
    height: 40,
    borderColor: "#0e95a7",
    borderWidth: 1,
    width: 300
  },
  loginButton: {
    alignItems: "center",
    backgroundColor: "#0e95a7",
    padding: 10,
    width: 300,
    height: 40,
    marginTop: 10,
    elevation: 3,
    borderRadius: 10
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
  },
  facebookLogin: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3B5998",
    padding: 10,
    height: 40,
    marginTop: 10,
    flexDirection: "row",
    elevation: 5,
    borderRadius: 10
  },
  facebookLogo: {
    width: 20,
    height: 20
  }
});
