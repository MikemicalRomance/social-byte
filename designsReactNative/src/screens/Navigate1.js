import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Svg, { Path } from "react-native-svg";

function Navigate1(props) {
  return (
    <View style={styles.container}>
      <View style={styles.bgStack}>
        <View style={styles.bg}>
          <View style={styles.mask}>
            <View style={styles.shape}></View>
            <View style={styles.shape1}></View>
          </View>
        </View>
        <View style={styles.bg1}>
          <View style={styles.logoutColumnRow}>
            <View style={styles.logoutColumn}>
              <Text style={styles.logout}>Logout</Text>
              <Text style={styles.andreaJameson}>ANDREA JAMESON</Text>
            </View>
            <View style={styles.avatar}>
              <View style={styles.mask1Stack}>
                <View style={styles.mask1}>
                  <Image
                    source={require("../assets/images/8ba146349df415306e8da9d6bea75d48582b2505.png")}
                    resizeMode="cover"
                    style={styles.img}
                  ></Image>
                </View>
                <Image
                  source={require("../assets/images/8ba146349df415306e8da9d6bea75d48582b2505.png")}
                  resizeMode="cover"
                  style={styles.img1}
                ></Image>
              </View>
            </View>
          </View>
        </View>
        <Text style={styles.stats}>Stats</Text>
        <Text style={styles.capture}>Capture</Text>
        <Text style={styles.gallery}>Gallery</Text>
        <Text style={styles.compose}>Compose</Text>
        <Text style={styles.profile}>Profile</Text>
        <Text style={styles.home}>Home</Text>
        <View style={styles.nav}>
          <View style={styles.closeRow}>
            <View style={styles.close}>
              <View style={styles.groupStack}>
                <View style={styles.group}>
                  <View style={styles.shape2}>
                    <View style={styles.shape3}></View>
                  </View>
                </View>
                <View style={styles.bounds}></View>
              </View>
            </View>
            <View style={styles.settingsCopy}>
              <View style={styles.group1Stack}>
                <View style={styles.group1}>
                  <Svg viewBox="0 0 40 34" style={styles.shape4}>
                    <Path
                      strokeWidth={0}
                      fill="rgba(255,255,255,1)"
                      fillOpacity={1}
                      strokeOpacity={1}
                      d="M0.00 17.00 L10.00 0.00 L30.00 0.00 L40.00 17.00 L30.00 34.00 L10.00 34.00 L0.00 17.00 Z M20.00 22.00 C22.76 22.00 25.00 19.76 25.00 17.00 C25.00 14.24 22.76 12.00 20.00 12.00 C17.24 12.00 15.00 14.24 15.00 17.00 C15.00 19.76 17.24 22.00 20.00 22.00 Z"
                    ></Path>
                  </Svg>
                </View>
                <View style={styles.bounds1}></View>
              </View>
            </View>
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
    backgroundColor: "rgba(0,160,255,1)"
  },
  shape: {
    height: 750,
    width: 750,
    opacity: 0.1,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: 43
  },
  shape1: {
    height: 540,
    width: 750,
    opacity: 0.1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  bg1: {
    position: "absolute",
    top: 1174,
    left: 0,
    height: 160,
    width: 750,
    backgroundColor: "rgba(0,0,0,1)"
  },
  logout: {
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 50,
    fontFamily: "karla-700",
    letterSpacing: -2
  },
  andreaJameson: {
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(255,189,184,1)",
    fontSize: 20,
    fontFamily: "karla-700",
    letterSpacing: 2,
    marginTop: 11
  },
  logoutColumn: {
    width: 202,
    marginTop: 29,
    marginBottom: 38
  },
  avatar: {
    height: 160,
    width: 160,
    opacity: 1,
    marginLeft: 318
  },
  mask1: {
    position: "absolute",
    top: 10,
    left: 12,
    height: 160,
    width: 160,
    opacity: 1,
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,1)"
  },
  img: {
    height: 180,
    width: 178,
    opacity: 0.9,
    backgroundColor: "transparent",
    marginTop: -10,
    marginLeft: -12
  },
  img1: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 180,
    width: 178,
    opacity: 0.9,
    backgroundColor: "transparent"
  },
  mask1Stack: {
    width: 178,
    height: 180,
    marginTop: -10,
    marginLeft: -12
  },
  logoutColumnRow: {
    height: 160,
    flexDirection: "row",
    marginLeft: 70
  },
  stats: {
    position: "absolute",
    top: 910,
    left: 292,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 70,
    fontFamily: "karla-700",
    letterSpacing: -2
  },
  capture: {
    position: "absolute",
    top: 768,
    left: 248,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 70,
    fontFamily: "karla-700",
    letterSpacing: -2
  },
  gallery: {
    position: "absolute",
    top: 626,
    left: 265,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 70,
    fontFamily: "karla-700",
    letterSpacing: -2
  },
  compose: {
    position: "absolute",
    top: 484,
    left: 227,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 70,
    fontFamily: "karla-700",
    letterSpacing: -2
  },
  profile: {
    position: "absolute",
    top: 342,
    left: 272,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 70,
    fontFamily: "karla-700",
    letterSpacing: -2
  },
  home: {
    position: "absolute",
    top: 200,
    left: 281,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(255,189,184,1)",
    fontSize: 70,
    fontFamily: "karla-700",
    letterSpacing: -2
  },
  nav: {
    position: "absolute",
    top: 57,
    left: 24,
    height: 50,
    width: 702,
    opacity: 1,
    flexDirection: "row"
  },
  close: {
    height: 50,
    width: 50,
    opacity: 1
  },
  group: {
    position: "absolute",
    top: 12,
    left: 12,
    height: 26,
    width: 26,
    opacity: 1
  },
  shape2: {
    height: 6,
    width: 30,
    transform: [
      {
        rotate: "-225.00deg"
      }
    ],
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 10,
    marginLeft: -2
  },
  shape3: {
    height: 6,
    width: 30,
    transform: [
      {
        rotate: "-315.00deg"
      }
    ],
    opacity: 1,
    backgroundColor: "rgba(255,255,255,1)"
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
  settingsCopy: {
    height: 50,
    width: 50,
    opacity: 1,
    marginLeft: 602
  },
  group1: {
    position: "absolute",
    top: 8,
    left: 5,
    height: 34,
    width: 40,
    opacity: 1
  },
  shape4: {
    height: 34,
    width: 40,
    backgroundColor: "transparent",
    borderColor: "transparent"
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
  closeRow: {
    height: 50,
    flexDirection: "row",
    flex: 1
  },
  bgStack: {
    width: 750,
    height: 1334
  }
});

export default Navigate1;
