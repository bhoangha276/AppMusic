import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Touchable,
  Button,
  Image,
  StatusBar,
  ImageBackground,
  ScrollView,
} from "react-native";

export default class Person extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <StatusBar translucent> </StatusBar>
          <View style={styles.header}>
            <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
              Profile
            </Text>
          </View>
          <View style={styles.profile}>
            <Image
              source={require("../Screen_HomePage/Image/logo.jpg")}
              style={styles.ProfileImage}
            ></Image>
            <View style={{ paddingRight: 100, marginTop: 40 }}>
              <Text style={{ color: "white", marginBottom: 20 }}>Name</Text>
              <Text style={{ color: "white" }}>Age</Text>
              <Text style={{ color: "white", marginTop: 20 }}>Date</Text>
            </View>
          </View>
          <View style={styles.content}>
            <Image
              source={require("./../Screen_Person/icon.jpg")}
              style={styles.icon}
            ></Image>
            <TouchableOpacity>
              <Text style={styles.textContent}>Songs</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("./../Screen_Person/play.png")}
                style={styles.play}
              ></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.content}>
            <Image
              source={require("./../Screen_Person/icon.jpg")}
              style={styles.icon}
            ></Image>
            <TouchableOpacity>
              <Text style={styles.textContent}>Playlis</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("./../Screen_Person/play.png")}
                style={styles.play}
              ></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.content}>
            <Image
              source={require("./../Screen_Person/icon.jpg")}
              style={styles.icon}
            ></Image>
            <TouchableOpacity>
              <Text style={styles.textContent}>Album</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("./../Screen_Person/play.png")}
                style={styles.play}
              ></Image>
            </TouchableOpacity>
          </View>
            <TouchableOpacity>
              <Text
                style={{
                  color: "white",
                  marginTop: 15,
                  marginBottom: 10,
                  marginLeft: 10,
                  fontSize: 30,
                  fontWeight: "bold",
                }}
              >
                History
              </Text>
            </TouchableOpacity>
              <View style={styles.history}>
                <Image
                  source={require("../Screen_HomePage/Image/logo.jpg")}
                  style={styles.imageMusic}
                ></Image>
                <View>
                  <Text style={{ color: "white", marginBottom: 5 }}>Song</Text>
                  <Text style={{ color: "white" }}>Author</Text>
                </View>
              </View>
              <View style={styles.history}>
                <Image
                  source={require("../Screen_HomePage/Image/logo.jpg")}
                  style={styles.imageMusic}
                ></Image>
                <View>
                  <Text style={{ color: "white", marginBottom: 5 }}>Song</Text>
                  <Text style={{ color: "white" }}>Author</Text>
                </View>
              </View>
              <View style={styles.history}>
                <Image
                  source={require("../Screen_HomePage/Image/logo.jpg")}
                  style={styles.imageMusic}
                ></Image>
                <View>
                  <Text style={{ color: "white", marginBottom: 5 }}>Song</Text>
                  <Text style={{ color: "white" }}>Author</Text>
                </View>
              </View>
        </ScrollView>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#42275a",
    width: "100%",
    height: "100%",
  },
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "black",
  },
  ProfileImage: {
    width: 150,
    height: 150,
    borderRadius: 5,
    marginTop: 10,
  },
  profile: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  content: {
    flex: 1,
    flexDirection: "row",
    marginTop: 20,
    backgroundColor: "white",
    borderRadius: 15,
  },
  icon: {
    width: 20,
    height: 30,
    borderRadius: 5,
    marginLeft: 10,
  },
  textContent: {
    color: "purple",
    marginLeft: 15,
    marginTop: 5,
  },
  play: {
    width: 30,
    height: 30,
    borderRadius: 5,
    marginLeft: 250,
  },
  imageMusic: {
    width: 50,
    height: 50,
    marginRight: 20,
  },
  history: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 10,
  },
});
