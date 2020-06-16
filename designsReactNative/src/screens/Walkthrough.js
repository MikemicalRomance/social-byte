import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";
import Svg, { Path } from "react-native-svg";

function Walkthrough(props) {
  return (
    <View style={styles.container}>
      <View style={styles.bgStack}>
        <View style={styles.bg}>
          <View style={styles.mask}>
            <View style={styles.imgStack}>
              <ImageBackground
                source={require("../assets/images/7f4982f707f04d4b8c91a9702f9c8dced4b8a95b.png")}
                resizeMode="cover"
                style={styles.img}
                imageStyle={styles.img_imageStyle}
              >
                <ImageBackground
                  style={styles.overlay1}
                  imageStyle={styles.overlay1_imageStyle}
                  source={require("../assets/images/Gradient_TKE8OaF.png")}
                ></ImageBackground>
              </ImageBackground>
              <ImageBackground
                style={styles.overlay}
                imageStyle={styles.overlay_imageStyle}
                source={require("../assets/images/Gradient_qY2MiLY.png")}
              ></ImageBackground>
            </View>
          </View>
        </View>
        <Text style={styles.skip}>Skip</Text>
        <View style={styles.startTour}>
          <View style={styles.bg1Stack}>
            <View style={styles.bg1}>
              <View style={styles.mask1}></View>
            </View>
            <Text style={styles.startTour1}>Start Tour</Text>
            <View style={styles.go}>
              <View style={styles.groupStack}>
                <View style={styles.group}>
                  <Svg viewBox="0 0 14 20" style={styles.shape}>
                    <Path
                      strokeWidth={0}
                      fill="rgba(0,0,0,1)"
                      fillOpacity={1}
                      strokeOpacity={1}
                      d="M0.00 0.00 L14.00 10.00 L0.00 20.00 Z"
                    ></Path>
                  </Svg>
                </View>
                <View style={styles.bounds}></View>
              </View>
            </View>
          </View>
        </View>
        <Text style={styles.paragraph}>
          See what your friends are up to anywhere you go.
        </Text>
        <Text style={styles.hiTodd}>Hi, Todd!</Text>
        <View style={styles.avatar}>
          <View style={styles.mask2Stack}>
            <View style={styles.mask2}>
              <Image
                source={require("../assets/images/41f198f08d86d8aadaa5f92b6bb88ded45a65fb8.png")}
                resizeMode="cover"
                style={styles.img1}
              ></Image>
            </View>
            <Image
              source={require("../assets/images/41f198f08d86d8aadaa5f92b6bb88ded45a65fb8.png")}
              resizeMode="cover"
              style={styles.img2}
            ></Image>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    flex: 1
  },
  bg: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 1334,
    width: 750,
    opacity: 1
  },
  mask: {
    height: 1334,
    width: 750,
    opacity: 1,
    overflow: "hidden",
    backgroundColor: "rgba(225,181,162,1)"
  },
  img: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 1359,
    width: 779,
    backgroundColor: "transparent"
  },
  img_imageStyle: {
    opacity: 1
  },
  overlay1: {
    height: 1334,
    width: 750,
    transform: [
      {
        rotate: "-180.00deg"
      }
    ],
    backgroundColor: "transparent",
    marginLeft: 11
  },
  overlay1_imageStyle: {
    opacity: 1
  },
  overlay: {
    position: "absolute",
    top: 1134,
    left: 11,
    height: 200,
    width: 750,
    backgroundColor: "transparent"
  },
  overlay_imageStyle: {
    opacity: 1
  },
  imgStack: {
    width: 779,
    height: 1359,
    marginLeft: -11
  },
  skip: {
    position: "absolute",
    top: 1243,
    left: 347,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 26,
    fontFamily: "karla-700"
  },
  startTour: {
    position: "absolute",
    top: 1074,
    left: 110,
    height: 120,
    width: 530,
    opacity: 1
  },
  bg1: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 120,
    width: 530,
    opacity: 1
  },
  mask1: {
    height: 120,
    width: 530,
    opacity: 1,
    overflow: "hidden",
    backgroundColor: "rgba(255,189,184,1)"
  },
  startTour1: {
    position: "absolute",
    top: 43,
    left: 50,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 26,
    fontFamily: "karla-700"
  },
  go: {
    position: "absolute",
    top: 35,
    left: 430,
    height: 50,
    width: 50,
    opacity: 1
  },
  group: {
    position: "absolute",
    top: 15,
    left: 18,
    height: 20,
    width: 14,
    opacity: 1
  },
  shape: {
    height: 20,
    width: 14,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  bounds: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 50,
    width: 50,
    opacity: 1,
    backgroundColor: "transparent"
  },
  groupStack: {
    width: 50,
    height: 50
  },
  bg1Stack: {
    width: 530,
    height: 120
  },
  paragraph: {
    position: "absolute",
    top: 660,
    left: 125,
    height: 80,
    width: 500,
    opacity: 1,
    backgroundColor: "transparent",
    lineHeight: 40,
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    fontFamily: "karla-regular"
  },
  hiTodd: {
    position: "absolute",
    top: 510,
    left: 188,
    opacity: 1,
    backgroundColor: "transparent",
    lineHeight: 90,
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 100,
    fontFamily: "karla-700",
    letterSpacing: -4
  },
  avatar: {
    position: "absolute",
    top: 250,
    left: 275,
    height: 200,
    width: 200,
    opacity: 1,
    shadowColor: "rgba(0,0,0,0.2)",
    shadowOffset: {
      height: 40,
      width: 0
    },
    shadowRadius: 50,
    shadowOpacity: 1
  },
  mask2: {
    position: "absolute",
    top: 16,
    left: 17,
    height: 200,
    width: 200,
    opacity: 1,
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,1)"
  },
  img1: {
    height: 253,
    width: 266,
    opacity: 1,
    backgroundColor: "transparent",
    marginTop: -16,
    marginLeft: -17
  },
  img2: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 253,
    width: 266,
    opacity: 1,
    backgroundColor: "transparent"
  },
  mask2Stack: {
    width: 266,
    height: 253,
    marginTop: -16,
    marginLeft: -17
  },
  bgStack: {
    width: 750,
    height: 1334
  }
});

export default Walkthrough;
