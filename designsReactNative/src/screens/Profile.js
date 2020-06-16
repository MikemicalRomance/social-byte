import React, { Component } from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import Svg, { Path } from "react-native-svg";

function Profile(props) {
  return (
    <View style={styles.container}>
      <View style={styles.bg}>
        <View style={styles.nav}>
          <View style={styles.bg5}>
            <View style={styles.menuRow}>
              <View style={styles.menu}>
                <View style={styles.bounds5}>
                  <View style={styles.group10}>
                    <View style={styles.shape8}></View>
                    <View style={styles.shape7}></View>
                  </View>
                </View>
              </View>
              <Text style={styles.text}>Profile</Text>
              <View style={styles.settings}>
                <View style={styles.group9Stack}>
                  <View style={styles.group9}>
                    <Svg viewBox="0 0 40 34" style={styles.shape6}>
                      <Path
                        strokeWidth={0}
                        fill="rgba(255,255,255,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M0.00 17.00 L10.00 0.00 L30.00 0.00 L40.00 17.00 L30.00 34.00 L10.00 34.00 L0.00 17.00 Z M20.00 22.00 C22.76 22.00 25.00 19.76 25.00 17.00 C25.00 14.24 22.76 12.00 20.00 12.00 C17.24 12.00 15.00 14.24 15.00 17.00 C15.00 19.76 17.24 22.00 20.00 22.00 Z"
                      ></Path>
                    </Svg>
                  </View>
                  <View style={styles.bounds4}></View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.avatarStack}>
          <View style={styles.avatar}>
            <View style={styles.mask1Stack}>
              <View style={styles.mask1}>
                <ImageBackground
                  source={require("../assets/images/5cdee231ee2888cef305893bbdc6e3f865b81507.png")}
                  resizeMode="cover"
                  style={styles.img}
                  imageStyle={styles.img_imageStyle}
                >
                  <ImageBackground
                    style={styles.overlay}
                    imageStyle={styles.overlay_imageStyle}
                    source={require("../assets/images/Gradient_pYEn1Fz.png")}
                  ></ImageBackground>
                </ImageBackground>
              </View>
              <ImageBackground
                source={require("../assets/images/5cdee231ee2888cef305893bbdc6e3f865b81507.png")}
                resizeMode="cover"
                style={styles.img1}
                imageStyle={styles.img1_imageStyle}
              >
                <ImageBackground
                  style={styles.overlay1}
                  imageStyle={styles.overlay1_imageStyle}
                  source={require("../assets/images/Gradient_yJxWGN7.png")}
                ></ImageBackground>
              </ImageBackground>
            </View>
          </View>
          <View style={styles.more}>
            <View style={styles.group8Stack}>
              <View style={styles.group8}>
                <Svg viewBox="0 0 10 10" style={styles.oval1}>
                  <Path
                    strokeWidth={0}
                    fill="rgba(255,255,255,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M5.00 10.00 C7.76 10.00 10.00 7.76 10.00 5.00 C10.00 2.24 7.76 0.00 5.00 0.00 C2.24 0.00 0.00 2.24 0.00 5.00 C0.00 7.76 2.24 10.00 5.00 10.00 Z"
                  ></Path>
                </Svg>
                <Svg viewBox="0 0 10 10" style={styles.oval}>
                  <Path
                    strokeWidth={0}
                    fill="rgba(255,255,255,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M5.00 10.00 C7.76 10.00 10.00 7.76 10.00 5.00 C10.00 2.24 7.76 0.00 5.00 0.00 C2.24 0.00 0.00 2.24 0.00 5.00 C0.00 7.76 2.24 10.00 5.00 10.00 Z"
                  ></Path>
                </Svg>
              </View>
              <View style={styles.bounds3}></View>
            </View>
          </View>
          <Text style={styles.name}>Todd Fisher</Text>
          <Text style={styles.place}>Los Angeles</Text>
          <Text style={styles.role}>Photographer</Text>
        </View>
        <View style={styles.group4}>
          <View style={styles.chatRow}>
            <View style={styles.chat}>
              <View style={styles.group7Stack}>
                <View style={styles.group7}>
                  <View style={styles.shape5}></View>
                  <View style={styles.shape4}></View>
                </View>
                <View style={styles.bounds2}></View>
              </View>
            </View>
            <View style={styles.video}>
              <View style={styles.bounds1}>
                <View style={styles.group6}>
                  <View style={styles.shape2Stack}>
                    <View style={styles.shape2}></View>
                    <Svg viewBox="0 0 16 26" style={styles.shape3}>
                      <Path
                        strokeWidth={0}
                        fill="rgba(0,0,0,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M0.00 13.00 L16.00 0.00 L16.00 26.00 L0.00 13.00 Z"
                      ></Path>
                    </Svg>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.stats}>
              <View style={styles.bounds}>
                <View style={styles.group5}>
                  <View style={styles.shape1Row}>
                    <View style={styles.shape1}></View>
                    <View style={styles.shape}></View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.groupStack}>
          <View style={styles.group}>
            <View style={styles.group3Row}>
              <View style={styles.group3}>
                <View style={styles.bg3}>
                  <View style={styles.likes}>
                    <Text style={styles.style1}>765</Text>
                    <Text style={styles.likes1}>LIKES</Text>
                  </View>
                </View>
              </View>
              <View style={styles.group2Column}>
                <View style={styles.group2}>
                  <View style={styles.bg2}>
                    <View style={styles.following}>
                      <Text style={styles.style}>1,679</Text>
                      <Text style={styles.following1}>FOLLOWING</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.group1}>
                  <View style={styles.bg1}>
                    <View style={styles.followers}>
                      <Text style={styles.k}>145k</Text>
                      <Text style={styles.followers1}>FOLLOWERS</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.getStartedCopy}>
            <View style={styles.bg4Stack}>
              <View style={styles.bg4}>
                <View style={styles.mask}></View>
              </View>
              <Text style={styles.following2}>Following</Text>
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
    height: 1334,
    width: 750,
    backgroundColor: "rgba(255,189,184,1)"
  },
  nav: {
    height: 128,
    width: 750,
    opacity: 1
  },
  bg5: {
    height: 128,
    width: 750,
    backgroundColor: "rgba(0,0,0,1)",
    flexDirection: "row"
  },
  menu: {
    height: 50,
    width: 50,
    opacity: 1
  },
  bounds5: {
    height: 50,
    width: 50,
    backgroundColor: "transparent"
  },
  group10: {
    height: 24,
    width: 38,
    opacity: 1,
    marginTop: 13,
    marginLeft: 6
  },
  shape8: {
    height: 6,
    width: 28,
    opacity: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  shape7: {
    height: 6,
    width: 38,
    opacity: 1,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 12
  },
  text: {
    opacity: 1,
    color: "rgba(255,255,255,1)",
    lineHeight: 34,
    textAlign: "center",
    fontSize: 34,
    fontFamily: "karla-regular",
    marginLeft: 252,
    marginTop: 6
  },
  settings: {
    height: 50,
    width: 50,
    opacity: 1,
    marginLeft: 251
  },
  group9: {
    position: "absolute",
    top: 8,
    left: 5,
    height: 34,
    width: 40,
    opacity: 1
  },
  shape6: {
    height: 34,
    width: 40,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  bounds4: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 50,
    width: 50,
    opacity: 1,
    backgroundColor: "transparent"
  },
  group9Stack: {
    width: 50,
    height: 50
  },
  menuRow: {
    height: 50,
    flexDirection: "row",
    flex: 1,
    marginRight: 24,
    marginLeft: 24,
    marginTop: 58
  },
  avatar: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 430,
    width: 750,
    opacity: 1
  },
  mask1: {
    position: "absolute",
    top: 17,
    left: 0,
    height: 430,
    width: 750,
    opacity: 1,
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,1)"
  },
  img: {
    height: 469,
    width: 750,
    backgroundColor: "transparent",
    marginTop: -17
  },
  img_imageStyle: {
    opacity: 1
  },
  overlay: {
    height: 300,
    width: 750,
    backgroundColor: "transparent",
    marginTop: 147
  },
  overlay_imageStyle: {
    opacity: 1
  },
  img1: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 469,
    width: 750,
    backgroundColor: "transparent"
  },
  img1_imageStyle: {
    opacity: 1
  },
  overlay1: {
    height: 300,
    width: 750,
    backgroundColor: "transparent",
    marginTop: 147
  },
  overlay1_imageStyle: {
    opacity: 1
  },
  mask1Stack: {
    width: 750,
    height: 469,
    marginTop: -17
  },
  more: {
    position: "absolute",
    top: 268,
    left: 659,
    height: 50,
    width: 50,
    opacity: 1
  },
  group8: {
    position: "absolute",
    top: 11,
    left: 20,
    height: 28,
    width: 10,
    opacity: 1
  },
  oval1: {
    height: 10,
    width: 10,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  oval: {
    height: 10,
    width: 10,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 8
  },
  bounds3: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 50,
    width: 50,
    opacity: 1,
    backgroundColor: "transparent"
  },
  group8Stack: {
    width: 50,
    height: 50
  },
  name: {
    position: "absolute",
    top: 258,
    left: 60,
    opacity: 1,
    backgroundColor: "transparent",
    lineHeight: 60,
    color: "rgba(255,255,255,1)",
    fontSize: 60,
    fontFamily: "karla-700",
    letterSpacing: -2
  },
  place: {
    position: "absolute",
    top: 348,
    left: 540,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "right",
    color: "rgba(255,255,255,1)",
    fontSize: 28,
    fontFamily: "karla-regular"
  },
  role: {
    position: "absolute",
    top: 348,
    left: 60,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 28,
    fontFamily: "karla-regular"
  },
  avatarStack: {
    width: 750,
    height: 430
  },
  group4: {
    height: 50,
    width: 470,
    opacity: 1,
    flexDirection: "row",
    marginTop: 60,
    marginLeft: 140
  },
  chat: {
    height: 49,
    width: 50,
    opacity: 1
  },
  group7: {
    position: "absolute",
    top: 6,
    left: 6,
    height: 36,
    width: 36,
    opacity: 1
  },
  shape5: {
    height: 26,
    width: 36,
    opacity: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  shape4: {
    height: 10,
    width: 10,
    transform: [
      {
        rotate: "-270.00deg"
      }
    ],
    opacity: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  bounds2: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 49,
    width: 50,
    opacity: 1,
    backgroundColor: "transparent"
  },
  group7Stack: {
    width: 50,
    height: 49
  },
  video: {
    height: 50,
    width: 50,
    opacity: 1,
    marginLeft: 160
  },
  bounds1: {
    height: 50,
    width: 50,
    backgroundColor: "transparent"
  },
  group6: {
    height: 30,
    width: 43,
    opacity: 1,
    marginTop: 10,
    marginLeft: 4
  },
  shape2: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 30,
    width: 32,
    opacity: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  shape3: {
    position: "absolute",
    height: 26,
    width: 16,
    top: 2,
    left: 27,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  shape2Stack: {
    width: 43,
    height: 30
  },
  stats: {
    height: 49,
    width: 50,
    opacity: 1,
    marginLeft: 160
  },
  bounds: {
    height: 49,
    width: 50,
    backgroundColor: "transparent"
  },
  group5: {
    height: 30,
    width: 30,
    opacity: 1,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 10
  },
  shape1: {
    height: 30,
    width: 12,
    opacity: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  shape: {
    height: 21,
    width: 12,
    opacity: 1,
    backgroundColor: "rgba(0,0,0,1)",
    marginLeft: 6,
    marginTop: 9
  },
  shape1Row: {
    height: 30,
    flexDirection: "row",
    flex: 1
  },
  chatRow: {
    height: 50,
    flexDirection: "row",
    flex: 1
  },
  group: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 428,
    width: 630,
    opacity: 1
  },
  group3: {
    height: 427,
    width: 315,
    opacity: 1
  },
  bg3: {
    height: 427,
    width: 315,
    shadowColor: "rgba(0,0,0,0.1)",
    shadowOffset: {
      height: 30,
      width: 30
    },
    shadowRadius: 60,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  likes: {
    height: 107,
    width: 102,
    opacity: 1,
    marginTop: 160,
    marginLeft: 107
  },
  style1: {
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 60,
    fontFamily: "karla-700"
  },
  likes1: {
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(182,148,145,1)",
    fontSize: 20,
    fontFamily: "karla-700",
    letterSpacing: 2,
    marginTop: 14,
    marginLeft: 19
  },
  group2: {
    height: 214,
    width: 315,
    opacity: 1
  },
  bg2: {
    height: 214,
    width: 315,
    shadowColor: "rgba(0,0,0,0.1)",
    shadowOffset: {
      height: 30,
      width: 0
    },
    shadowRadius: 60,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  following: {
    height: 107,
    width: 140,
    opacity: 1,
    marginTop: 54,
    marginLeft: 88
  },
  style: {
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 60,
    fontFamily: "karla-700"
  },
  following1: {
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(182,148,145,1)",
    fontSize: 20,
    fontFamily: "karla-700",
    letterSpacing: 2,
    marginTop: 14,
    marginLeft: 5
  },
  group1: {
    height: 214,
    width: 315,
    opacity: 1
  },
  bg1: {
    height: 214,
    width: 315,
    shadowColor: "rgba(0,0,0,0.1)",
    shadowOffset: {
      height: 30,
      width: 0
    },
    shadowRadius: 60,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  followers: {
    height: 107,
    width: 136,
    opacity: 1,
    marginTop: 53,
    marginLeft: 90
  },
  k: {
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 60,
    fontFamily: "karla-700"
  },
  followers1: {
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(182,148,145,1)",
    fontSize: 20,
    fontFamily: "karla-700",
    letterSpacing: 2.34667,
    marginTop: 14
  },
  group2Column: {
    width: 315
  },
  group3Row: {
    height: 428,
    flexDirection: "row"
  },
  getStartedCopy: {
    position: "absolute",
    top: 427,
    left: 0,
    height: 120,
    width: 630,
    opacity: 1
  },
  bg4: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 120,
    width: 630,
    opacity: 1
  },
  mask: {
    height: 120,
    width: 630,
    opacity: 1,
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,1)"
  },
  following2: {
    position: "absolute",
    top: 43,
    left: 255,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 26,
    fontFamily: "karla-700"
  },
  bg4Stack: {
    width: 630,
    height: 120
  },
  groupStack: {
    width: 630,
    height: 547,
    marginTop: 59,
    marginLeft: 60
  }
});

export default Profile;
