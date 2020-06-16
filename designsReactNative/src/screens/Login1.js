import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Svg, { Path } from "react-native-svg";

function Login1(props) {
  return (
    <View style={styles.container}>
      <View style={styles.bgStack}>
        <View style={styles.bg}>
          <View style={styles.mask}>
            <View style={styles.shape}></View>
          </View>
        </View>
        <Text style={styles.needHelp}>Need Help?</Text>
        <Text style={styles.createAccount}>Create Account</Text>
        <View style={styles.form}>
          <View style={styles.bg1}>
            <View style={styles.username}>
              <Text style={styles.username1}>USERNAME</Text>
              <Text style={styles.siennaAppCom}>sienna@app.com</Text>
              <Svg viewBox="-1 -1 494 6" style={styles.line1}>
                <Path
                  strokeWidth={2}
                  fill="transparent"
                  stroke="rgba(0,0,0,1)"
                  fillOpacity={0.5}
                  strokeOpacity={0.5}
                  d="M1.00 2.00 L491.00 2.00 "
                ></Path>
              </Svg>
            </View>
            <View style={styles.password}>
              <Text style={styles.password1}>PASSWORD</Text>
              <View style={styles.style}>
                <View style={styles.style8Row}>
                  <Svg viewBox="0 0 10 10" style={styles.style8}>
                    <Path
                      strokeWidth={0}
                      fill="rgba(0,0,0,1)"
                      fillOpacity={1}
                      strokeOpacity={1}
                      d="M5.00 10.00 C7.76 10.00 10.00 7.76 10.00 5.00 C10.00 2.24 7.76 0.00 5.00 0.00 C2.24 0.00 0.00 2.24 0.00 5.00 C0.00 7.76 2.24 10.00 5.00 10.00 Z"
                    ></Path>
                  </Svg>
                  <Svg viewBox="0 0 10 10" style={styles.style7}>
                    <Path
                      strokeWidth={0}
                      fill="rgba(0,0,0,1)"
                      fillOpacity={1}
                      strokeOpacity={1}
                      d="M5.00 10.00 C7.76 10.00 10.00 7.76 10.00 5.00 C10.00 2.24 7.76 0.00 5.00 0.00 C2.24 0.00 0.00 2.24 0.00 5.00 C0.00 7.76 2.24 10.00 5.00 10.00 Z"
                    ></Path>
                  </Svg>
                  <Svg viewBox="0 0 10 10" style={styles.style6}>
                    <Path
                      strokeWidth={0}
                      fill="rgba(0,0,0,1)"
                      fillOpacity={1}
                      strokeOpacity={1}
                      d="M5.00 10.00 C7.76 10.00 10.00 7.76 10.00 5.00 C10.00 2.24 7.76 0.00 5.00 0.00 C2.24 0.00 0.00 2.24 0.00 5.00 C0.00 7.76 2.24 10.00 5.00 10.00 Z"
                    ></Path>
                  </Svg>
                  <Svg viewBox="0 0 10 10" style={styles.style5}>
                    <Path
                      strokeWidth={0}
                      fill="rgba(0,0,0,1)"
                      fillOpacity={1}
                      strokeOpacity={1}
                      d="M5.00 10.00 C7.76 10.00 10.00 7.76 10.00 5.00 C10.00 2.24 7.76 0.00 5.00 0.00 C2.24 0.00 0.00 2.24 0.00 5.00 C0.00 7.76 2.24 10.00 5.00 10.00 Z"
                    ></Path>
                  </Svg>
                  <Svg viewBox="0 0 10 10" style={styles.style4}>
                    <Path
                      strokeWidth={0}
                      fill="rgba(0,0,0,1)"
                      fillOpacity={1}
                      strokeOpacity={1}
                      d="M5.00 10.00 C7.76 10.00 10.00 7.76 10.00 5.00 C10.00 2.24 7.76 0.00 5.00 0.00 C2.24 0.00 0.00 2.24 0.00 5.00 C0.00 7.76 2.24 10.00 5.00 10.00 Z"
                    ></Path>
                  </Svg>
                  <Svg viewBox="0 0 10 10" style={styles.style3}>
                    <Path
                      strokeWidth={0}
                      fill="rgba(0,0,0,1)"
                      fillOpacity={1}
                      strokeOpacity={1}
                      d="M5.00 10.00 C7.76 10.00 10.00 7.76 10.00 5.00 C10.00 2.24 7.76 0.00 5.00 0.00 C2.24 0.00 0.00 2.24 0.00 5.00 C0.00 7.76 2.24 10.00 5.00 10.00 Z"
                    ></Path>
                  </Svg>
                  <Svg viewBox="0 0 10 10" style={styles.style2}>
                    <Path
                      strokeWidth={0}
                      fill="rgba(0,0,0,1)"
                      fillOpacity={1}
                      strokeOpacity={1}
                      d="M5.00 10.00 C7.76 10.00 10.00 7.76 10.00 5.00 C10.00 2.24 7.76 0.00 5.00 0.00 C2.24 0.00 0.00 2.24 0.00 5.00 C0.00 7.76 2.24 10.00 5.00 10.00 Z"
                    ></Path>
                  </Svg>
                  <Svg viewBox="0 0 10 10" style={styles.style1}>
                    <Path
                      strokeWidth={0}
                      fill="rgba(0,0,0,1)"
                      fillOpacity={1}
                      strokeOpacity={1}
                      d="M5.00 10.00 C7.76 10.00 10.00 7.76 10.00 5.00 C10.00 2.24 7.76 0.00 5.00 0.00 C2.24 0.00 0.00 2.24 0.00 5.00 C0.00 7.76 2.24 10.00 5.00 10.00 Z"
                    ></Path>
                  </Svg>
                </View>
              </View>
              <Svg viewBox="-1 -1 494 6" style={styles.line}>
                <Path
                  strokeWidth={2}
                  fill="transparent"
                  stroke="rgba(0,0,0,1)"
                  fillOpacity={0.5}
                  strokeOpacity={0.5}
                  d="M1.00 2.00 L491.00 2.00 "
                ></Path>
              </Svg>
            </View>
            <View style={styles.getStarted}>
              <View style={styles.button}>
                <Text style={styles.getStarted1}>Get Started</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.mark}>
          <View style={styles.shape2}>
            <View style={styles.rectangle1}></View>
            <View style={styles.rectangle}></View>
          </View>
          <View style={styles.shape1}></View>
          <Svg viewBox="0 0 96 14.41" style={styles.shadow}>
            <Path
              strokeWidth={0}
              fill="rgba(0,0,0,1)"
              fillOpacity={1}
              strokeOpacity={1}
              d="M48.00 14.41 C74.51 14.41 96.00 11.18 96.00 7.20 C96.00 3.23 74.51 0.00 48.00 0.00 C21.49 0.00 0.00 3.23 0.00 7.20 C0.00 11.18 21.49 14.41 48.00 14.41 Z"
            ></Path>
          </Svg>
        </View>
        <Text style={styles.chat}>Chat</Text>
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
    backgroundColor: "rgba(206,185,254,1)"
  },
  shape: {
    height: 1042,
    width: 1042,
    opacity: 0.1,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: 292,
    marginLeft: -292
  },
  needHelp: {
    position: "absolute",
    top: 1248,
    left: 553,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 22,
    fontFamily: "karla-700"
  },
  createAccount: {
    position: "absolute",
    top: 1248,
    left: 80,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 22,
    fontFamily: "karla-700"
  },
  form: {
    position: "absolute",
    top: 648,
    left: 50,
    height: 540,
    width: 650,
    opacity: 1
  },
  bg1: {
    height: 540,
    width: 650,
    shadowColor: "rgba(0,0,0,0.2)",
    shadowOffset: {
      height: 60,
      width: 0
    },
    shadowRadius: 100,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  username: {
    height: 105,
    width: 490,
    opacity: 1,
    marginTop: 80,
    marginLeft: 80
  },
  username1: {
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(181,164,225,1)",
    fontSize: 20,
    fontFamily: "karla-700",
    letterSpacing: 2
  },
  siennaAppCom: {
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 28,
    fontFamily: "karla-regular",
    marginTop: 22
  },
  line1: {
    height: 6,
    width: 494,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 24,
    marginLeft: -1
  },
  password: {
    height: 105,
    width: 490,
    opacity: 1,
    marginTop: 60,
    marginLeft: 80
  },
  password1: {
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(181,164,225,1)",
    fontSize: 20,
    fontFamily: "karla-700",
    letterSpacing: 2
  },
  style: {
    height: 10,
    width: 150,
    opacity: 1,
    flexDirection: "row",
    marginTop: 38
  },
  style8: {
    height: 10,
    width: 10,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  style7: {
    height: 10,
    width: 10,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginLeft: 10
  },
  style6: {
    height: 10,
    width: 10,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginLeft: 10
  },
  style5: {
    height: 10,
    width: 10,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginLeft: 10
  },
  style4: {
    height: 10,
    width: 10,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginLeft: 10
  },
  style3: {
    height: 10,
    width: 10,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginLeft: 10
  },
  style2: {
    height: 10,
    width: 10,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginLeft: 10
  },
  style1: {
    height: 10,
    width: 10,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginLeft: 10
  },
  style8Row: {
    height: 10,
    flexDirection: "row",
    flex: 1
  },
  line: {
    height: 6,
    width: 494,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 31,
    marginLeft: -1
  },
  getStarted: {
    height: 120,
    width: 650,
    opacity: 1,
    marginTop: 70
  },
  button: {
    height: 120,
    width: 650,
    backgroundColor: "rgba(255,236,87,1)"
  },
  getStarted1: {
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "right",
    color: "rgba(0,0,0,1)",
    fontSize: 26,
    fontFamily: "karla-700",
    marginTop: 43,
    marginLeft: 254
  },
  mark: {
    position: "absolute",
    top: 258,
    left: 495,
    height: 135,
    width: 96,
    opacity: 1
  },
  shape2: {
    height: 96,
    width: 96,
    borderTopLeftRadius: 9.6,
    borderTopRightRadius: 9.6,
    borderBottomRightRadius: 9.6,
    backgroundColor: "rgba(255,236,87,1)"
  },
  rectangle1: {
    height: 8,
    width: 58,
    opacity: 1,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: 35,
    marginLeft: 19
  },
  rectangle: {
    height: 8,
    width: 29,
    opacity: 1,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: 10,
    marginLeft: 19
  },
  shape1: {
    height: 24,
    width: 24,
    transform: [
      {
        rotate: "-180.00deg"
      }
    ],
    opacity: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  shadow: {
    height: 14,
    width: 96,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  chat: {
    position: "absolute",
    top: 229,
    left: 159,
    opacity: 1,
    shadowColor: "rgba(0,0,0,0.3)",
    shadowOffset: {
      height: 60,
      width: 0
    },
    shadowRadius: 60,
    shadowOpacity: 1,
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 140,
    fontFamily: "karla-700",
    letterSpacing: -7
  },
  bgStack: {
    width: 750,
    height: 1334
  }
});

export default Login1;
