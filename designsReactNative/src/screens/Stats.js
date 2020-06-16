import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Svg, { Path } from "react-native-svg";

function Stats(props) {
  return (
    <View style={styles.container}>
      <View style={styles.bg}>
        <View style={styles.nav}>
          <View style={styles.bg5}>
            <View style={styles.menuRow}>
              <View style={styles.menu}>
                <View style={styles.bounds1}>
                  <View style={styles.group9}>
                    <View style={styles.shape1}></View>
                    <View style={styles.shape}></View>
                  </View>
                </View>
              </View>
              <Text style={styles.statistics}>Statistics</Text>
              <View style={styles.more}>
                <View style={styles.group8Stack}>
                  <View style={styles.group8}>
                    <Svg viewBox="0 0 10 10" style={styles.oval3}>
                      <Path
                        strokeWidth={0}
                        fill="rgba(255,255,255,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M5.00 10.00 C7.76 10.00 10.00 7.76 10.00 5.00 C10.00 2.24 7.76 0.00 5.00 0.00 C2.24 0.00 0.00 2.24 0.00 5.00 C0.00 7.76 2.24 10.00 5.00 10.00 Z"
                      ></Path>
                    </Svg>
                    <Svg viewBox="0 0 10 10" style={styles.oval2}>
                      <Path
                        strokeWidth={0}
                        fill="rgba(255,255,255,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M5.00 10.00 C7.76 10.00 10.00 7.76 10.00 5.00 C10.00 2.24 7.76 0.00 5.00 0.00 C2.24 0.00 0.00 2.24 0.00 5.00 C0.00 7.76 2.24 10.00 5.00 10.00 Z"
                      ></Path>
                    </Svg>
                  </View>
                  <View style={styles.bounds}></View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.picker}>
          <View style={styles.bg4}>
            <View style={styles.dayRow}>
              <Text style={styles.day}>Day</Text>
              <Text style={styles.month}>Month</Text>
              <Text style={styles.year}>Year</Text>
            </View>
            <View style={styles.aprRow}>
              <Text style={styles.apr}>APR</Text>
              <Text style={styles.mar}>MAR</Text>
              <Text style={styles.jun}>JUN</Text>
              <Text style={styles.jul}>JUL</Text>
              <Text style={styles.aug}>AUG</Text>
            </View>
            <View style={styles.active}></View>
          </View>
        </View>
        <View style={styles.chart2}>
          <View style={styles.bg3}>
            <View style={styles.group7Row}>
              <View style={styles.group7}>
                <View style={styles.followers8Row}>
                  <View style={styles.followers8}></View>
                  <View style={styles.following8}></View>
                </View>
              </View>
              <View style={styles.group6}>
                <View style={styles.followers7Row}>
                  <View style={styles.followers7}></View>
                  <View style={styles.following7}></View>
                </View>
              </View>
              <View style={styles.group5}>
                <View style={styles.followers6Row}>
                  <View style={styles.followers6}></View>
                  <View style={styles.following6}></View>
                </View>
              </View>
              <View style={styles.group4}>
                <View style={styles.followers5Row}>
                  <View style={styles.followers5}></View>
                  <View style={styles.following5}></View>
                </View>
              </View>
              <View style={styles.group3}>
                <View style={styles.followers4Row}>
                  <View style={styles.followers4}></View>
                  <View style={styles.following4}></View>
                </View>
              </View>
              <View style={styles.group2}>
                <View style={styles.followers3Row}>
                  <View style={styles.followers3}></View>
                  <View style={styles.following3}></View>
                </View>
              </View>
              <View style={styles.group1}>
                <View style={styles.followers2Row}>
                  <View style={styles.followers2}></View>
                  <View style={styles.following2}></View>
                </View>
              </View>
            </View>
            <View style={styles.group}>
              <View style={styles.style4Row}>
                <Text style={styles.style4}>1</Text>
                <Text style={styles.style5}>5</Text>
                <Text style={styles.style6}>10</Text>
                <Text style={styles.style7}>15</Text>
                <Text style={styles.style8}>20</Text>
                <Text style={styles.style9}>25</Text>
                <Text style={styles.style10}>30</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.followersRow}>
          <View style={styles.followers}>
            <View style={styles.bg2}>
              <Svg viewBox="0 0 24 16" style={styles.path1}>
                <Path
                  strokeWidth={0}
                  fill="rgba(0,0,0,1)"
                  fillOpacity={1}
                  strokeOpacity={1}
                  d="M0.00 0.00 L10.67 18.00 L0.00 36.00 Z"
                ></Path>
              </Svg>
              <View style={styles.chart1}>
                <View style={styles.oval1Stack}>
                  <Svg viewBox="-5 -5 170 170" style={styles.oval1}>
                    <Path
                      strokeWidth={10}
                      fill="transparent"
                      stroke="rgba(151,151,151,1)"
                      fillOpacity={0.1}
                      strokeOpacity={0.1}
                      d="M80.00 155.00 C121.42 155.00 155.00 121.42 155.00 80.00 C155.00 38.58 121.42 5.00 80.00 5.00 C38.58 5.00 5.00 38.58 5.00 80.00 C5.00 121.42 38.58 155.00 80.00 155.00 Z"
                    ></Path>
                  </Svg>
                  <Svg viewBox="-5 -5 150.84 170" style={styles.line1}>
                    <Path
                      strokeWidth={10}
                      fill="transparent"
                      stroke="rgba(0,0,0,1)"
                      fillOpacity={1}
                      strokeOpacity={1}
                      d="M5.00 130.07 C18.73 145.37 38.66 155.00 60.84 155.00 C102.27 155.00 135.84 121.42 135.84 80.00 C135.84 38.58 102.27 5.00 60.84 5.00 "
                    ></Path>
                  </Svg>
                </View>
              </View>
              <View style={styles.style2Row}>
                <Text style={styles.style2}>64</Text>
                <Text style={styles.style3}>%</Text>
              </View>
              <Text style={styles.followers1}>FOLLOWERS</Text>
            </View>
          </View>
          <View style={styles.following}>
            <View style={styles.bg1}>
              <Svg viewBox="0 0 24 16" style={styles.path}>
                <Path
                  strokeWidth={0}
                  fill="rgba(0,0,0,1)"
                  fillOpacity={1}
                  strokeOpacity={1}
                  d="M0.00 0.00 L10.67 18.00 L0.00 36.00 Z"
                ></Path>
              </Svg>
              <View style={styles.chart}>
                <View style={styles.ovalStack}>
                  <Svg viewBox="-5 -5 170 170" style={styles.oval}>
                    <Path
                      strokeWidth={10}
                      fill="transparent"
                      stroke="rgba(151,151,151,1)"
                      fillOpacity={0.1}
                      strokeOpacity={0.1}
                      d="M80.00 155.00 C121.42 155.00 155.00 121.42 155.00 80.00 C155.00 38.58 121.42 5.00 80.00 5.00 C38.58 5.00 5.00 38.58 5.00 80.00 C5.00 121.42 38.58 155.00 80.00 155.00 Z"
                    ></Path>
                  </Svg>
                  <Svg viewBox="-5 -5 95 138.93" style={styles.line}>
                    <Path
                      strokeWidth={10}
                      fill="transparent"
                      stroke="rgba(255,189,184,1)"
                      fillOpacity={1}
                      strokeOpacity={1}
                      d="M65.79 123.93 C74.73 111.59 80.00 96.41 80.00 80.00 C80.00 38.58 46.42 5.00 5.00 5.00 "
                    ></Path>
                  </Svg>
                </View>
              </View>
              <View style={styles.styleRow}>
                <Text style={styles.style}>36</Text>
                <Text style={styles.style1}>%</Text>
              </View>
              <Text style={styles.following1}>FOLLOWING</Text>
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
    backgroundColor: "rgba(253,187,182,1)"
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
  bounds1: {
    height: 50,
    width: 50,
    backgroundColor: "transparent"
  },
  group9: {
    height: 24,
    width: 38,
    opacity: 1,
    marginTop: 13,
    marginLeft: 6
  },
  shape1: {
    height: 6,
    width: 28,
    opacity: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  shape: {
    height: 6,
    width: 38,
    opacity: 1,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 12
  },
  statistics: {
    opacity: 1,
    color: "rgba(255,255,255,1)",
    lineHeight: 34,
    textAlign: "center",
    fontSize: 34,
    fontFamily: "karla-regular",
    marginLeft: 225,
    marginTop: 6
  },
  more: {
    height: 50,
    width: 50,
    opacity: 1,
    marginLeft: 225
  },
  group8: {
    position: "absolute",
    top: 11,
    left: 20,
    height: 28,
    width: 10,
    opacity: 1
  },
  oval3: {
    height: 10,
    width: 10,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  oval2: {
    height: 10,
    width: 10,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 8
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
  group8Stack: {
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
  picker: {
    height: 230,
    width: 750,
    opacity: 1
  },
  bg4: {
    height: 230,
    width: 750,
    shadowColor: "rgba(0,0,0,0.1)",
    shadowOffset: {
      height: 30,
      width: 0
    },
    shadowRadius: 60,
    shadowOpacity: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  day: {
    opacity: 1,
    backgroundColor: "transparent",
    lineHeight: 60,
    color: "rgba(255,255,255,1)",
    fontSize: 60,
    fontFamily: "karla-700",
    letterSpacing: -2
  },
  month: {
    opacity: 1,
    backgroundColor: "transparent",
    lineHeight: 60,
    color: "rgba(239,176,172,1)",
    fontSize: 60,
    fontFamily: "karla-700",
    letterSpacing: -2,
    marginLeft: 128
  },
  year: {
    opacity: 1,
    backgroundColor: "transparent",
    lineHeight: 60,
    color: "rgba(255,255,255,1)",
    fontSize: 60,
    fontFamily: "karla-700",
    letterSpacing: -2,
    marginLeft: 107
  },
  dayRow: {
    height: 60,
    flexDirection: "row",
    marginTop: 40,
    marginLeft: 60,
    marginRight: 65
  },
  apr: {
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 22,
    fontFamily: "karla-700",
    letterSpacing: 2
  },
  mar: {
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 22,
    fontFamily: "karla-700",
    letterSpacing: 2,
    marginLeft: 95
  },
  jun: {
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 22,
    fontFamily: "karla-700",
    letterSpacing: 2,
    marginLeft: 96
  },
  jul: {
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 22,
    fontFamily: "karla-700",
    letterSpacing: 2,
    marginLeft: 95
  },
  aug: {
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(242,179,174,1)",
    fontSize: 22,
    fontFamily: "karla-700",
    letterSpacing: 2,
    marginLeft: 97
  },
  aprRow: {
    height: 26,
    flexDirection: "row",
    marginTop: 50,
    marginLeft: 66,
    marginRight: 62
  },
  active: {
    height: 2,
    width: 44,
    opacity: 1,
    backgroundColor: "rgba(253,187,182,1)",
    marginTop: 6,
    marginLeft: 639
  },
  chart2: {
    height: 436,
    width: 630,
    opacity: 1,
    marginTop: 60,
    marginLeft: 60
  },
  bg3: {
    height: 436,
    width: 630,
    shadowColor: "rgba(0,0,0,0.1)",
    shadowOffset: {
      height: 30,
      width: 30
    },
    shadowRadius: 60,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  group7: {
    height: 260,
    width: 20,
    opacity: 1,
    flexDirection: "row",
    marginTop: 20
  },
  followers8: {
    height: 260,
    width: 10,
    opacity: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  following8: {
    height: 132,
    width: 10,
    opacity: 1,
    backgroundColor: "rgba(255,189,184,1)",
    marginTop: 128
  },
  followers8Row: {
    height: 260,
    flexDirection: "row",
    flex: 1
  },
  group6: {
    height: 170,
    width: 20,
    opacity: 1,
    flexDirection: "row",
    marginLeft: 60,
    marginTop: 110
  },
  followers7: {
    height: 170,
    width: 10,
    opacity: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  following7: {
    height: 81,
    width: 10,
    opacity: 1,
    backgroundColor: "rgba(255,189,184,1)",
    marginTop: 89
  },
  followers7Row: {
    height: 170,
    flexDirection: "row",
    flex: 1
  },
  group5: {
    height: 201,
    width: 20,
    opacity: 1,
    flexDirection: "row",
    marginLeft: 60,
    marginTop: 80
  },
  followers6: {
    height: 200,
    width: 10,
    opacity: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  following6: {
    height: 102,
    width: 10,
    opacity: 1,
    backgroundColor: "rgba(255,189,184,1)",
    marginTop: 98
  },
  followers6Row: {
    height: 200,
    flexDirection: "row",
    flex: 1
  },
  group4: {
    height: 231,
    width: 20,
    opacity: 1,
    flexDirection: "row",
    marginLeft: 60,
    marginTop: 50
  },
  followers5: {
    height: 230,
    width: 10,
    opacity: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  following5: {
    height: 170,
    width: 10,
    opacity: 1,
    backgroundColor: "rgba(255,189,184,1)",
    marginTop: 60
  },
  followers5Row: {
    height: 230,
    flexDirection: "row",
    flex: 1
  },
  group3: {
    height: 251,
    width: 20,
    opacity: 1,
    flexDirection: "row",
    marginLeft: 60,
    marginTop: 30
  },
  followers4: {
    height: 250,
    width: 10,
    opacity: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  following4: {
    height: 191,
    width: 10,
    opacity: 1,
    backgroundColor: "rgba(255,189,184,1)",
    marginTop: 59
  },
  followers4Row: {
    height: 250,
    flexDirection: "row",
    flex: 1
  },
  group2: {
    height: 280,
    width: 20,
    opacity: 1,
    flexDirection: "row",
    marginLeft: 60
  },
  followers3: {
    height: 280,
    width: 10,
    opacity: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  following3: {
    height: 199,
    width: 10,
    opacity: 1,
    backgroundColor: "rgba(255,189,184,1)",
    marginTop: 81
  },
  followers3Row: {
    height: 280,
    flexDirection: "row",
    flex: 1
  },
  group1: {
    height: 211,
    width: 20,
    opacity: 1,
    flexDirection: "row",
    marginLeft: 60,
    marginTop: 70
  },
  followers2: {
    height: 210,
    width: 10,
    opacity: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  following2: {
    height: 173,
    width: 10,
    opacity: 1,
    backgroundColor: "rgba(255,189,184,1)",
    marginTop: 37
  },
  followers2Row: {
    height: 210,
    flexDirection: "row",
    flex: 1
  },
  group7Row: {
    height: 281,
    flexDirection: "row",
    marginTop: 50,
    marginLeft: 65,
    marginRight: 65
  },
  group: {
    height: 26,
    width: 530,
    opacity: 1,
    flexDirection: "row",
    marginTop: 29,
    marginLeft: 50
  },
  style4: {
    height: 26,
    width: 50,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(184,149,147,1)",
    fontSize: 22,
    fontFamily: "karla-700",
    letterSpacing: 2
  },
  style5: {
    height: 26,
    width: 50,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(184,149,147,1)",
    fontSize: 22,
    fontFamily: "karla-700",
    letterSpacing: 2,
    marginLeft: 30
  },
  style6: {
    height: 26,
    width: 50,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(184,149,147,1)",
    fontSize: 22,
    fontFamily: "karla-700",
    letterSpacing: 2,
    marginLeft: 30
  },
  style7: {
    height: 26,
    width: 50,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(184,149,147,1)",
    fontSize: 22,
    fontFamily: "karla-700",
    letterSpacing: 2,
    marginLeft: 30
  },
  style8: {
    height: 26,
    width: 50,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(184,149,147,1)",
    fontSize: 22,
    fontFamily: "karla-700",
    letterSpacing: 2,
    marginLeft: 30
  },
  style9: {
    height: 26,
    width: 50,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(184,149,147,1)",
    fontSize: 22,
    fontFamily: "karla-700",
    letterSpacing: 2,
    marginLeft: 30
  },
  style10: {
    height: 26,
    width: 50,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(184,149,147,1)",
    fontSize: 22,
    fontFamily: "karla-700",
    letterSpacing: 2,
    marginLeft: 30
  },
  style4Row: {
    height: 26,
    flexDirection: "row",
    flex: 1
  },
  followers: {
    height: 420,
    width: 315,
    opacity: 1
  },
  bg2: {
    height: 420,
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
  path1: {
    height: 16,
    width: 24,
    backgroundColor: "transparent",
    borderColor: "transparent",
    transform: [
      {
        rotate: "-90.00deg"
      }
    ],
    marginTop: 30,
    marginLeft: 261
  },
  chart1: {
    height: 150,
    width: 150,
    opacity: 1,
    marginTop: 24,
    marginLeft: 83
  },
  oval1: {
    position: "absolute",
    height: 170,
    width: 170,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  line1: {
    position: "absolute",
    height: 170,
    width: 151,
    top: 0,
    left: 19,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  oval1Stack: {
    width: 170,
    height: 170,
    marginTop: -5,
    marginLeft: -5
  },
  style2: {
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 80,
    fontFamily: "karla-700",
    letterSpacing: -2
  },
  style3: {
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    fontFamily: "karla-regular",
    marginLeft: 14,
    marginTop: 10
  },
  style2Row: {
    height: 93,
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 111,
    marginRight: 68
  },
  followers1: {
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(181,147,144,1)",
    fontSize: 20,
    fontFamily: "karla-700",
    letterSpacing: 2,
    marginTop: 10,
    marginLeft: 92
  },
  following: {
    height: 420,
    width: 315,
    opacity: 1
  },
  bg1: {
    height: 420,
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
  path: {
    height: 16,
    width: 24,
    backgroundColor: "transparent",
    borderColor: "transparent",
    transform: [
      {
        rotate: "-180.00deg"
      }
    ],
    marginTop: 30,
    marginLeft: 261
  },
  chart: {
    height: 150,
    width: 150,
    opacity: 1,
    marginTop: 24,
    marginLeft: 83
  },
  oval: {
    position: "absolute",
    height: 170,
    width: 170,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  line: {
    position: "absolute",
    height: 139,
    width: 95,
    top: 0,
    left: 75,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalStack: {
    width: 170,
    height: 170,
    marginTop: -5,
    marginLeft: -5
  },
  style: {
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 80,
    fontFamily: "karla-700",
    letterSpacing: -2
  },
  style1: {
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    fontFamily: "karla-regular",
    marginLeft: 13,
    marginTop: 10
  },
  styleRow: {
    height: 93,
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 110,
    marginRight: 68
  },
  following1: {
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(181,147,144,1)",
    fontSize: 20,
    fontFamily: "karla-700",
    letterSpacing: 2,
    marginTop: 10,
    marginLeft: 93
  },
  followersRow: {
    height: 420,
    flexDirection: "row",
    marginLeft: 60,
    marginRight: 60
  }
});

export default Stats;
