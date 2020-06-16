import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";
import Svg, { Path } from "react-native-svg";

function Navigate(props) {
  return (
    <View style={styles.container}>
      <View style={styles.bgStack}>
        <View style={styles.bg}>
          <View style={styles.mask}>
            <ImageBackground
              source={require("../assets/images/240dd6342b8092eab9b55bda41b91e87034795af.png")}
              resizeMode="cover"
              style={styles.img}
              imageStyle={styles.img_imageStyle}
            >
              <ImageBackground
                style={styles.overlay}
                imageStyle={styles.overlay_imageStyle}
                source={require("../assets/images/Gradient_bvyZdpA.png")}
              ></ImageBackground>
            </ImageBackground>
          </View>
        </View>
        <View style={styles.logout}>
          <View style={styles.bg1}>
            <Text style={styles.logout1}>Logout</Text>
          </View>
        </View>
        <Text style={styles.stats}>Stats</Text>
        <Text style={styles.capture}>Capture</Text>
        <Text style={styles.gallery}>Gallery</Text>
        <Text style={styles.compose}>Compose</Text>
        <Text style={styles.profile}>Profile</Text>
        <Text style={styles.home}>Home</Text>
        <View style={styles.mark}>
          <View style={styles.shape1}>
            <View style={styles.rectangle1}></View>
            <View style={styles.rectangle}></View>
          </View>
          <View style={styles.shape}></View>
          <Svg viewBox="0 0 100 15.05" style={styles.shadow}>
            <Path
              strokeWidth={0}
              fill="rgba(0,0,0,1)"
              fillOpacity={1}
              strokeOpacity={1}
              d="M50.00 15.05 C77.61 15.05 100.00 11.68 100.00 7.53 C100.00 3.37 77.61 0.00 50.00 0.00 C22.39 0.00 0.00 3.37 0.00 7.53 C0.00 11.68 22.39 15.05 50.00 15.05 Z"
            ></Path>
          </Svg>
        </View>
        <View style={styles.settings}>
          <View style={styles.groupStack}>
            <View style={styles.group}>
              <Svg viewBox="0 0 40 34" style={styles.shape2}>
                <Path
                  strokeWidth={0}
                  fill="rgba(0,0,0,1)"
                  fillOpacity={1}
                  strokeOpacity={1}
                  d="M0.00 17.00 L10.00 0.00 L30.00 0.00 L40.00 17.00 L30.00 34.00 L10.00 34.00 L0.00 17.00 Z M20.00 22.00 C22.76 22.00 25.00 19.76 25.00 17.00 C25.00 14.24 22.76 12.00 20.00 12.00 C17.24 12.00 15.00 14.24 15.00 17.00 C15.00 19.76 17.24 22.00 20.00 22.00 Z"
                ></Path>
              </Svg>
            </View>
            <View style={styles.bounds}></View>
          </View>
        </View>
        <View style={styles.close}>
          <View style={styles.group1Stack}>
            <View style={styles.group1}>
              <View style={styles.shape3}>
                <View style={styles.shape4}></View>
              </View>
            </View>
            <View style={styles.bounds1}></View>
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
    backgroundColor: "rgba(242,198,178,1)"
  },
  img: {
    height: 1342,
    width: 784,
    backgroundColor: "transparent",
    marginTop: -8,
    marginLeft: -14
  },
  img_imageStyle: {
    opacity: 1
  },
  overlay: {
    height: 1334,
    width: 750,
    transform: [
      {
        rotate: "-180.00deg"
      }
    ],
    backgroundColor: "transparent",
    marginTop: 8,
    marginLeft: 14
  },
  overlay_imageStyle: {
    opacity: 1
  },
  logout: {
    position: "absolute",
    top: 1134,
    left: 110,
    height: 120,
    width: 530,
    opacity: 1
  },
  bg1: {
    height: 120,
    width: 530,
    backgroundColor: "rgba(255,189,184,1)"
  },
  logout1: {
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 26,
    fontFamily: "karla-700",
    marginTop: 44,
    marginLeft: 223
  },
  stats: {
    position: "absolute",
    top: 905,
    left: 316,
    opacity: 1,
    shadowColor: "rgba(0,0,0,0.2)",
    shadowOffset: {
      height: 40,
      width: 0
    },
    shadowRadius: 40,
    shadowOpacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 50,
    fontFamily: "karla-700",
    letterSpacing: -2
  },
  capture: {
    position: "absolute",
    top: 796,
    left: 287,
    opacity: 1,
    shadowColor: "rgba(0,0,0,0.2)",
    shadowOffset: {
      height: 40,
      width: 0
    },
    shadowRadius: 40,
    shadowOpacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 50,
    fontFamily: "karla-700",
    letterSpacing: -2
  },
  gallery: {
    position: "absolute",
    top: 687,
    left: 299,
    opacity: 1,
    shadowColor: "rgba(0,0,0,0.2)",
    shadowOffset: {
      height: 40,
      width: 0
    },
    shadowRadius: 40,
    shadowOpacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 50,
    fontFamily: "karla-700",
    letterSpacing: -2
  },
  compose: {
    position: "absolute",
    top: 578,
    left: 272,
    opacity: 1,
    shadowColor: "rgba(0,0,0,0.2)",
    shadowOffset: {
      height: 40,
      width: 0
    },
    shadowRadius: 40,
    shadowOpacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 50,
    fontFamily: "karla-700",
    letterSpacing: -2
  },
  profile: {
    position: "absolute",
    top: 469,
    left: 304,
    opacity: 1,
    shadowColor: "rgba(0,0,0,0.2)",
    shadowOffset: {
      height: 40,
      width: 0
    },
    shadowRadius: 40,
    shadowOpacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 50,
    fontFamily: "karla-700",
    letterSpacing: -2
  },
  home: {
    position: "absolute",
    top: 360,
    left: 311,
    opacity: 1,
    shadowColor: "rgba(0,0,0,0.2)",
    shadowOffset: {
      height: 40,
      width: 0
    },
    shadowRadius: 40,
    shadowOpacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 50,
    fontFamily: "karla-700",
    letterSpacing: -2
  },
  mark: {
    position: "absolute",
    top: 120,
    left: 325,
    height: 140,
    width: 100,
    opacity: 1
  },
  shape1: {
    height: 100,
    width: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: "rgba(255,255,255,1)"
  },
  rectangle1: {
    height: 8,
    width: 60,
    opacity: 1,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: 36,
    marginLeft: 20
  },
  rectangle: {
    height: 8,
    width: 30,
    opacity: 1,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: 12,
    marginLeft: 20
  },
  shape: {
    height: 25,
    width: 25,
    transform: [
      {
        rotate: "-180.00deg"
      }
    ],
    opacity: 0.2,
    backgroundColor: "rgba(0,0,0,1)"
  },
  shadow: {
    height: 15,
    width: 100,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  settings: {
    position: "absolute",
    top: 58,
    left: 676,
    height: 50,
    width: 50,
    opacity: 1
  },
  group: {
    position: "absolute",
    top: 8,
    left: 5,
    height: 34,
    width: 40,
    opacity: 1
  },
  shape2: {
    height: 34,
    width: 40,
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
  close: {
    position: "absolute",
    top: 58,
    left: 24,
    height: 50,
    width: 50,
    opacity: 1
  },
  group1: {
    position: "absolute",
    top: 12,
    left: 12,
    height: 26,
    width: 26,
    opacity: 1
  },
  shape3: {
    height: 6,
    width: 30,
    transform: [
      {
        rotate: "-225.00deg"
      }
    ],
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: 10,
    marginLeft: -2
  },
  shape4: {
    height: 6,
    width: 30,
    transform: [
      {
        rotate: "-315.00deg"
      }
    ],
    opacity: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  bounds1: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 50,
    width: 50,
    opacity: 1,
    backgroundColor: "transparent"
  },
  group1Stack: {
    width: 50,
    height: 50
  },
  bgStack: {
    width: 750,
    height: 1334
  }
});

export default Navigate;
