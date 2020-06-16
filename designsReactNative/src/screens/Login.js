import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Svg, { Path } from "react-native-svg";

function Login(props) {
  return (
    <View style={styles.container}>
      <View style={styles.bgStack}>
        <View style={styles.bg}>
          <View style={styles.mask}>
            <View style={styles.shape}></View>
          </View>
        </View>
        <View style={styles.group}>
          <View style={styles.bg1}>
            <View style={styles.createAccountRow}>
              <Text style={styles.createAccount}>Create Account</Text>
              <Svg viewBox="-1 -1 29 47.3" style={styles.line}>
                <Path
                  strokeWidth={2}
                  fill="transparent"
                  stroke="rgba(255,255,255,1)"
                  fillOpacity={1}
                  strokeOpacity={1}
                  d="M26.00 1.00 L1.00 44.30 "
                ></Path>
              </Svg>
              <Text style={styles.forgotPassword}>Forgot Password</Text>
            </View>
          </View>
        </View>
        <View style={styles.form}>
          <View style={styles.usernameStack}>
            <View style={styles.username}>
              <View style={styles.group3Stack}>
                <View style={styles.group3}>
                  <Svg viewBox="0 0 14 14" style={styles.shape4}>
                    <Path
                      strokeWidth={0}
                      fill="rgba(0,0,0,1)"
                      fillOpacity={1}
                      strokeOpacity={1}
                      d="M7.00 14.00 C10.85 14.00 14.00 10.85 14.00 7.00 C14.00 3.15 10.85 0.00 7.00 0.00 C3.15 0.00 0.00 3.15 0.00 7.00 C0.00 10.85 3.15 14.00 7.00 14.00 Z"
                    ></Path>
                  </Svg>
                  <Svg viewBox="0 0 32 12" style={styles.shape3}>
                    <Path
                      strokeWidth={0}
                      fill="rgba(0,0,0,1)"
                      fillOpacity={1}
                      strokeOpacity={1}
                      d="M32.00 12.00 C32.00 3.90 21.40 0.00 16.00 0.00 C10.60 0.00 0.00 3.90 0.00 12.00 Z"
                    ></Path>
                  </Svg>
                </View>
                <View style={styles.bounds1}></View>
              </View>
            </View>
            <View style={styles.group4}>
              <Text style={styles.username1}>USERNAME</Text>
              <Text style={styles.isabelAppCom}>isabel@app.com</Text>
              <Svg viewBox="-1 -1 554 6" style={styles.line3}>
                <Path
                  strokeWidth={2}
                  fill="transparent"
                  stroke="rgba(0,0,0,1)"
                  fillOpacity={0.5}
                  strokeOpacity={0.5}
                  d="M1.00 2.00 L551.00 2.00 "
                ></Path>
              </Svg>
            </View>
          </View>
          <View style={styles.passwordStack}>
            <View style={styles.password}>
              <View style={styles.group1Stack}>
                <View style={styles.group1}>
                  <View style={styles.pathStack}>
                    <Svg viewBox="0 0 30 22" style={styles.path}>
                      <Path
                        strokeWidth={0}
                        fill="rgba(0,0,0,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M0.00 0.00 L30.00 0.00 L30.00 22.00 L0.00 22.00 Z M14.73 14.47 C16.80 14.47 18.47 12.80 18.47 10.73 C18.47 8.67 16.80 7.00 14.73 7.00 C12.67 7.00 11.00 8.67 11.00 10.73 C11.00 12.80 12.67 14.47 14.73 14.47 Z"
                      ></Path>
                    </Svg>
                    <Svg viewBox="-3 -3 36 36" style={styles.shape2}>
                      <Path
                        strokeWidth={6}
                        fill="transparent"
                        stroke="rgba(0,0,0,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M3.00 27.00 L3.00 15.00 C3.00 8.21 8.38 3.00 15.00 3.00 C21.62 3.00 27.00 8.21 27.00 15.00 L27.00 27.00 "
                      ></Path>
                    </Svg>
                  </View>
                </View>
                <View style={styles.bounds}></View>
              </View>
            </View>
            <View style={styles.group2}>
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
              <Svg viewBox="-1 -1 554 6" style={styles.line2}>
                <Path
                  strokeWidth={2}
                  fill="transparent"
                  stroke="rgba(0,0,0,1)"
                  fillOpacity={0.5}
                  strokeOpacity={0.5}
                  d="M1.00 2.00 L551.00 2.00 "
                ></Path>
              </Svg>
            </View>
          </View>
          <View style={styles.getStarted}>
            <View style={styles.bg2}>
              <View style={styles.getStarted1Row}>
                <Text style={styles.getStarted1}>Get Started</Text>
                <View style={styles.next}>
                  <View style={styles.line1Stack}>
                    <Svg viewBox="-1 -1 54 6" style={styles.line1}>
                      <Path
                        strokeWidth={2}
                        fill="transparent"
                        stroke="rgba(255,255,255,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M1.00 2.00 L51.00 2.00 "
                      ></Path>
                    </Svg>
                    <Svg viewBox="-1 -1 14 14" style={styles.shape1}>
                      <Path
                        strokeWidth={2}
                        fill="transparent"
                        stroke="rgba(255,255,255,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M1.00 1.00 L11.00 1.00 L11.00 11.00 "
                      ></Path>
                    </Svg>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.mark}>
          <View style={styles.shape6}>
            <View style={styles.rectangle1}></View>
            <View style={styles.rectangle}></View>
          </View>
          <View style={styles.shape5}></View>
          <Svg viewBox="0 0 200 30" style={styles.shadow}>
            <Path
              strokeWidth={0}
              fill="rgba(0,0,0,1)"
              fillOpacity={1}
              strokeOpacity={1}
              d="M100.00 30.00 C155.23 30.00 200.00 23.28 200.00 15.00 C200.00 6.72 155.23 0.00 100.00 0.00 C44.77 0.00 0.00 6.72 0.00 15.00 C0.00 23.28 44.77 30.00 100.00 30.00 Z"
            ></Path>
          </Svg>
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
    backgroundColor: "rgba(249,235,89,1)"
  },
  shape: {
    height: 1294,
    width: 1294,
    opacity: 0.05,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: 40
  },
  group: {
    position: "absolute",
    top: 1194,
    left: 0,
    height: 140,
    width: 750,
    opacity: 1
  },
  bg1: {
    height: 140,
    width: 750,
    backgroundColor: "rgba(0,0,0,1)",
    flexDirection: "row"
  },
  createAccount: {
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 22,
    fontFamily: "karla-700italic",
    marginTop: 9
  },
  line: {
    height: 47,
    width: 29,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginLeft: 118
  },
  forgotPassword: {
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "right",
    color: "rgba(255,255,255,1)",
    fontSize: 22,
    fontFamily: "karla-700italic",
    marginLeft: 102,
    marginTop: 9
  },
  createAccountRow: {
    height: 47,
    flexDirection: "row",
    flex: 1,
    marginRight: 101,
    marginLeft: 100,
    marginTop: 47
  },
  form: {
    position: "absolute",
    top: 694,
    left: 0,
    height: 500,
    width: 750,
    opacity: 1
  },
  username: {
    position: "absolute",
    top: 0,
    left: 490,
    height: 50,
    width: 50,
    opacity: 1
  },
  group3: {
    position: "absolute",
    top: 10,
    left: 9,
    height: 30,
    width: 32,
    opacity: 1
  },
  shape4: {
    height: 14,
    width: 14,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginLeft: 9
  },
  shape3: {
    height: 12,
    width: 32,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 4
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
  group3Stack: {
    width: 50,
    height: 50
  },
  group4: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 105,
    width: 550,
    opacity: 1
  },
  username1: {
    opacity: 0.5,
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontFamily: "karla-700",
    letterSpacing: 2
  },
  isabelAppCom: {
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 28,
    fontFamily: "karla-regular",
    marginTop: 22
  },
  line3: {
    height: 6,
    width: 554,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 24,
    marginLeft: -1
  },
  usernameStack: {
    width: 550,
    height: 105,
    marginLeft: 100
  },
  password: {
    position: "absolute",
    top: 0,
    left: 490,
    height: 50,
    width: 50,
    opacity: 1
  },
  group1: {
    position: "absolute",
    top: 11,
    left: 10,
    height: 33,
    width: 30,
    opacity: 1
  },
  path: {
    position: "absolute",
    height: 22,
    width: 30,
    top: 14,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  shape2: {
    position: "absolute",
    height: 36,
    width: 36,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  pathStack: {
    width: 36,
    height: 36,
    marginTop: -3
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
  group1Stack: {
    width: 50,
    height: 50
  },
  group2: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 105,
    width: 550,
    opacity: 1
  },
  password1: {
    opacity: 0.5,
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
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
  line2: {
    height: 6,
    width: 554,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 31,
    marginLeft: -1
  },
  passwordStack: {
    width: 550,
    height: 105,
    marginTop: 60,
    marginLeft: 100
  },
  getStarted: {
    height: 140,
    width: 750,
    opacity: 1,
    marginTop: 90
  },
  bg2: {
    height: 140,
    width: 750,
    backgroundColor: "rgba(0,160,255,1)",
    flexDirection: "row"
  },
  getStarted1: {
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 26,
    fontFamily: "karla-700"
  },
  next: {
    height: 15,
    width: 53,
    opacity: 1,
    marginLeft: 356,
    marginTop: 9
  },
  line1: {
    position: "absolute",
    height: 6,
    width: 54,
    top: 4,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  shape1: {
    position: "absolute",
    height: 14,
    width: 14,
    top: 0,
    left: 40,
    backgroundColor: "transparent",
    borderColor: "transparent",
    transform: [
      {
        rotate: "-315.00deg"
      }
    ]
  },
  line1Stack: {
    width: 54,
    height: 14,
    marginTop: 1,
    marginLeft: -1
  },
  getStarted1Row: {
    height: 31,
    flexDirection: "row",
    flex: 1,
    marginRight: 100,
    marginLeft: 100,
    marginTop: 54
  },
  mark: {
    position: "absolute",
    top: 210,
    left: 275,
    height: 290,
    width: 200,
    opacity: 1
  },
  shape6: {
    height: 199,
    width: 200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "rgba(0,0,0,1)"
  },
  rectangle1: {
    height: 16,
    width: 120,
    opacity: 1,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 72,
    marginLeft: 40
  },
  rectangle: {
    height: 16,
    width: 60,
    opacity: 1,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 23,
    marginLeft: 40
  },
  shape5: {
    height: 50,
    width: 50,
    transform: [
      {
        rotate: "-180.00deg"
      }
    ],
    opacity: 0.5,
    backgroundColor: "rgba(0,0,0,1)"
  },
  shadow: {
    height: 30,
    width: 200,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 11
  },
  bgStack: {
    width: 750,
    height: 1334
  }
});

export default Login;
