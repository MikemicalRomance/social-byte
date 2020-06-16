import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Svg, { Path } from "react-native-svg";

function Stats3(props) {
  return (
    <View style={styles.container}>
      <View style={styles.bgStack}>
        <View style={styles.bg}>
          <View style={styles.mask}>
            <View style={styles.shapeStack}>
              <View style={styles.shape}></View>
              <View style={styles.shape1}></View>
            </View>
          </View>
        </View>
        <View style={styles.lines}>
          <View style={styles.line5Row}>
            <Svg viewBox="-1 -1 6 422" style={styles.line5}>
              <Path
                strokeWidth={2}
                fill="transparent"
                stroke="rgba(255,255,255,1)"
                fillOpacity={0.2}
                strokeOpacity={0.2}
                d="M1.67 1.78 L1.67 417.88 "
              ></Path>
            </Svg>
            <Svg viewBox="-1 -1 6 422" style={styles.line4}>
              <Path
                strokeWidth={2}
                fill="transparent"
                stroke="rgba(255,255,255,1)"
                fillOpacity={0.2}
                strokeOpacity={0.2}
                d="M1.67 1.78 L1.67 417.88 "
              ></Path>
            </Svg>
            <Svg viewBox="-1 -1 6 422" style={styles.line3}>
              <Path
                strokeWidth={2}
                fill="transparent"
                stroke="rgba(255,255,255,1)"
                fillOpacity={0.2}
                strokeOpacity={0.2}
                d="M1.67 1.78 L1.67 417.88 "
              ></Path>
            </Svg>
            <Svg viewBox="-1 -1 6 422" style={styles.line2}>
              <Path
                strokeWidth={2}
                fill="transparent"
                stroke="rgba(255,255,255,1)"
                fillOpacity={0.2}
                strokeOpacity={0.2}
                d="M1.67 1.78 L1.67 417.88 "
              ></Path>
            </Svg>
            <Svg viewBox="-1 -1 6 422" style={styles.line1}>
              <Path
                strokeWidth={2}
                fill="transparent"
                stroke="rgba(255,255,255,1)"
                fillOpacity={0.2}
                strokeOpacity={0.2}
                d="M1.67 1.78 L1.67 417.88 "
              ></Path>
            </Svg>
            <Svg viewBox="-1 -1 6 422" style={styles.line}>
              <Path
                strokeWidth={2}
                fill="transparent"
                stroke="rgba(255,255,255,1)"
                fillOpacity={0.2}
                strokeOpacity={0.2}
                d="M1.67 1.78 L1.67 417.88 "
              ></Path>
            </Svg>
          </View>
        </View>
        <View style={styles.group}>
          <View style={styles.followersRow}>
            <View style={styles.followers}></View>
            <View style={styles.likes}></View>
          </View>
        </View>
        <View style={styles.group1}>
          <View style={styles.followers1Row}>
            <View style={styles.followers1}></View>
            <View style={styles.likes1}></View>
          </View>
        </View>
        <View style={styles.group2}>
          <View style={styles.followers2Row}>
            <View style={styles.followers2}></View>
            <View style={styles.likes2}></View>
          </View>
        </View>
        <View style={styles.group3}>
          <View style={styles.followers3Row}>
            <View style={styles.followers3}></View>
            <View style={styles.likes3}></View>
          </View>
        </View>
        <View style={styles.group4}>
          <View style={styles.followers4Row}>
            <View style={styles.followers4}></View>
            <View style={styles.likes4}></View>
          </View>
        </View>
        <View style={styles.group5}>
          <View style={styles.followers5Row}>
            <View style={styles.followers5}></View>
            <View style={styles.likes5}></View>
          </View>
        </View>
        <View style={styles.group6}>
          <View style={styles.followers6Row}>
            <View style={styles.followers6}></View>
            <View style={styles.likes6}></View>
          </View>
        </View>
        <Text style={styles.style}>1</Text>
        <Text style={styles.style1}>5</Text>
        <Text style={styles.style2}>10</Text>
        <Text style={styles.style3}>15</Text>
        <Text style={styles.style4}>20</Text>
        <Text style={styles.style5}>25</Text>
        <Text style={styles.style6}>30</Text>
        <View style={styles.chart}>
          <View style={styles.bg1}>
            <View style={styles.likes7Row}>
              <View style={styles.likes7}>
                <View style={styles.chart2}>
                  <View style={styles.oval1Stack}>
                    <Svg viewBox="0 0 150 150" style={styles.oval1}>
                      <Path
                        strokeWidth={0}
                        fill="rgba(255,189,184,1)"
                        fillOpacity={0.3}
                        strokeOpacity={0.3}
                        d="M75.00 150.00 C116.42 150.00 150.00 116.42 150.00 75.00 C150.00 33.58 116.42 0.00 75.00 0.00 C33.58 0.00 0.00 33.58 0.00 75.00 C0.00 116.42 33.58 150.00 75.00 150.00 Z"
                      ></Path>
                    </Svg>
                    <Svg viewBox="-5 -5 95 138.93" style={styles.line8}>
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
                <View style={styles.style10Row}>
                  <Text style={styles.style10}>36</Text>
                  <Text style={styles.style9}>%</Text>
                </View>
                <Text style={styles.likes8}>LIKES</Text>
              </View>
              <Svg viewBox="-1 -1 5 344" style={styles.line7}>
                <Path
                  strokeWidth={2}
                  fill="transparent"
                  stroke="rgba(0,0,0,1)"
                  fillOpacity={0.1}
                  strokeOpacity={0.1}
                  d="M1.00 1.00 L1.00 341.00 "
                ></Path>
              </Svg>
              <View style={styles.followers7}>
                <View style={styles.chart1}>
                  <View style={styles.ovalStack}>
                    <Svg viewBox="0 0 150 150" style={styles.oval}>
                      <Path
                        strokeWidth={0}
                        fill="rgba(0,160,255,1)"
                        fillOpacity={0.3}
                        strokeOpacity={0.3}
                        d="M75.00 150.00 C116.42 150.00 150.00 116.42 150.00 75.00 C150.00 33.58 116.42 0.00 75.00 0.00 C33.58 0.00 0.00 33.58 0.00 75.00 C0.00 116.42 33.58 150.00 75.00 150.00 Z"
                      ></Path>
                    </Svg>
                    <Svg viewBox="-5 -5 150.84 170" style={styles.line6}>
                      <Path
                        strokeWidth={10}
                        fill="transparent"
                        stroke="rgba(0,160,255,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M5.00 130.07 C18.73 145.37 38.66 155.00 60.84 155.00 C102.27 155.00 135.84 121.42 135.84 80.00 C135.84 38.58 102.27 5.00 60.84 5.00 "
                      ></Path>
                    </Svg>
                  </View>
                </View>
                <View style={styles.style7Stack}>
                  <Text style={styles.style7}>%</Text>
                  <Text style={styles.style8}>64</Text>
                </View>
                <Text style={styles.followers8}>FOLLOWERS</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.next}>
          <View style={styles.line9Stack}>
            <Svg viewBox="-3 -3 28 28" style={styles.line9}>
              <Path
                strokeWidth={6}
                fill="transparent"
                stroke="rgba(255,255,255,1)"
                fillOpacity={1}
                strokeOpacity={1}
                d="M3.00 3.00 L19.00 3.00 L19.00 19.00 "
              ></Path>
            </Svg>
            <View style={styles.bounds}></View>
          </View>
        </View>
        <Text style={styles.month}>September</Text>
        <Text style={styles.style11}>2015</Text>
        <View style={styles.tabs}>
          <View style={styles.weekRow}>
            <Text style={styles.week}>WEEK</Text>
            <Text style={styles.month1}>MONTH</Text>
            <Text style={styles.year}>YEAR</Text>
          </View>
          <Svg viewBox="-1 -1 87 6" style={styles.line10}>
            <Path
              strokeWidth={2}
              fill="transparent"
              stroke="rgba(255,255,255,1)"
              fillOpacity={1}
              strokeOpacity={1}
              d="M1.39 2.00 L83.25 2.00 "
            ></Path>
          </Svg>
        </View>
        <View style={styles.nav}>
          <View style={styles.bg2}>
            <View style={styles.menuRow}>
              <View style={styles.menu}>
                <View style={styles.bounds2}>
                  <View style={styles.group8}>
                    <View style={styles.shape3}></View>
                    <View style={styles.shape2}></View>
                  </View>
                </View>
              </View>
              <Text style={styles.statistics}>Statistics</Text>
              <View style={styles.more}>
                <View style={styles.group7Stack}>
                  <View style={styles.group7}>
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
                  <View style={styles.bounds1}></View>
                </View>
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
    position: "absolute",
    top: 0,
    left: 0,
    height: 750,
    width: 750,
    opacity: 0.1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  shape1: {
    position: "absolute",
    top: 534,
    left: 1,
    height: 757,
    width: 750,
    opacity: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  shapeStack: {
    width: 751,
    height: 1291,
    marginTop: 43
  },
  lines: {
    position: "absolute",
    top: 916,
    left: 124,
    height: 418,
    width: 502,
    opacity: 1,
    flexDirection: "row"
  },
  line5: {
    height: 422,
    width: 6,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  line4: {
    height: 422,
    width: 6,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginLeft: 94
  },
  line3: {
    height: 422,
    width: 6,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginLeft: 94
  },
  line2: {
    height: 422,
    width: 6,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginLeft: 94
  },
  line1: {
    height: 422,
    width: 6,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginLeft: 94
  },
  line: {
    height: 422,
    width: 6,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginLeft: 94
  },
  line5Row: {
    height: 422,
    flexDirection: "row",
    flex: 1,
    marginRight: -3,
    marginLeft: -1,
    marginTop: -1
  },
  group: {
    position: "absolute",
    top: 1042,
    left: 664,
    height: 196,
    width: 32,
    opacity: 1,
    flexDirection: "row"
  },
  followers: {
    height: 196,
    width: 16,
    opacity: 1,
    backgroundColor: "rgba(0,160,255,1)"
  },
  likes: {
    height: 125,
    width: 16,
    opacity: 1,
    backgroundColor: "rgba(255,189,184,1)",
    marginTop: 71
  },
  followersRow: {
    height: 196,
    flexDirection: "row",
    flex: 1
  },
  group1: {
    position: "absolute",
    top: 1062,
    left: 563,
    height: 176,
    width: 32,
    opacity: 1,
    flexDirection: "row"
  },
  followers1: {
    height: 176,
    width: 16,
    opacity: 1,
    backgroundColor: "rgba(0,160,255,1)"
  },
  likes1: {
    height: 115,
    width: 16,
    opacity: 1,
    backgroundColor: "rgba(255,189,184,1)",
    marginTop: 61
  },
  followers1Row: {
    height: 176,
    flexDirection: "row",
    flex: 1
  },
  group2: {
    position: "absolute",
    top: 1012,
    left: 462,
    height: 226,
    width: 32,
    opacity: 1,
    flexDirection: "row"
  },
  followers2: {
    height: 226,
    width: 16,
    opacity: 1,
    backgroundColor: "rgba(0,160,255,1)"
  },
  likes2: {
    height: 85,
    width: 16,
    opacity: 1,
    backgroundColor: "rgba(255,189,184,1)",
    marginTop: 141
  },
  followers2Row: {
    height: 226,
    flexDirection: "row",
    flex: 1
  },
  group3: {
    position: "absolute",
    top: 1022,
    left: 361,
    height: 216,
    width: 32,
    opacity: 1,
    flexDirection: "row"
  },
  followers3: {
    height: 216,
    width: 16,
    opacity: 1,
    backgroundColor: "rgba(0,160,255,1)"
  },
  likes3: {
    height: 105,
    width: 16,
    opacity: 1,
    backgroundColor: "rgba(255,189,184,1)",
    marginTop: 111
  },
  followers3Row: {
    height: 216,
    flexDirection: "row",
    flex: 1
  },
  group4: {
    position: "absolute",
    top: 1042,
    left: 260,
    height: 196,
    width: 32,
    opacity: 1,
    flexDirection: "row"
  },
  followers4: {
    height: 196,
    width: 16,
    opacity: 1,
    backgroundColor: "rgba(0,160,255,1)"
  },
  likes4: {
    height: 165,
    width: 16,
    opacity: 1,
    backgroundColor: "rgba(255,189,184,1)",
    marginTop: 31
  },
  followers4Row: {
    height: 196,
    flexDirection: "row",
    flex: 1
  },
  group5: {
    position: "absolute",
    top: 1122,
    left: 159,
    height: 116,
    width: 32,
    opacity: 1,
    flexDirection: "row"
  },
  followers5: {
    height: 116,
    width: 16,
    opacity: 1,
    backgroundColor: "rgba(0,160,255,1)"
  },
  likes5: {
    height: 55,
    width: 16,
    opacity: 1,
    backgroundColor: "rgba(255,189,184,1)",
    marginTop: 61
  },
  followers5Row: {
    height: 116,
    flexDirection: "row",
    flex: 1
  },
  group6: {
    position: "absolute",
    top: 1012,
    left: 58,
    height: 226,
    width: 32,
    opacity: 1,
    flexDirection: "row"
  },
  followers6: {
    height: 226,
    width: 16,
    opacity: 1,
    backgroundColor: "rgba(0,160,255,1)"
  },
  likes6: {
    height: 165,
    width: 16,
    opacity: 1,
    backgroundColor: "rgba(255,189,184,1)",
    marginTop: 61
  },
  followers6Row: {
    height: 226,
    flexDirection: "row",
    flex: 1
  },
  style: {
    position: "absolute",
    top: 1268,
    left: 50,
    height: 26,
    width: 50,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 22,
    fontFamily: "karla-700",
    letterSpacing: 2
  },
  style1: {
    position: "absolute",
    top: 1268,
    left: 150,
    height: 26,
    width: 50,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 22,
    fontFamily: "karla-700",
    letterSpacing: 2
  },
  style2: {
    position: "absolute",
    top: 1268,
    left: 250,
    height: 26,
    width: 50,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 22,
    fontFamily: "karla-700",
    letterSpacing: 2
  },
  style3: {
    position: "absolute",
    top: 1268,
    left: 350,
    height: 26,
    width: 50,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 22,
    fontFamily: "karla-700",
    letterSpacing: 2
  },
  style4: {
    position: "absolute",
    top: 1268,
    left: 450,
    height: 26,
    width: 50,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 22,
    fontFamily: "karla-700",
    letterSpacing: 2
  },
  style5: {
    position: "absolute",
    top: 1268,
    left: 550,
    height: 26,
    width: 50,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 22,
    fontFamily: "karla-700",
    letterSpacing: 2
  },
  style6: {
    position: "absolute",
    top: 1268,
    left: 650,
    height: 26,
    width: 50,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 22,
    fontFamily: "karla-700",
    letterSpacing: 2
  },
  chart: {
    position: "absolute",
    top: 455,
    left: 50,
    height: 461,
    width: 650,
    opacity: 1
  },
  bg1: {
    height: 460,
    width: 650,
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row"
  },
  likes7: {
    height: 338,
    width: 176,
    opacity: 1,
    marginTop: 1
  },
  chart2: {
    height: 150,
    width: 150,
    opacity: 1
  },
  oval1: {
    position: "absolute",
    height: 150,
    width: 150,
    top: 5,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  line8: {
    position: "absolute",
    height: 139,
    width: 95,
    top: 0,
    left: 70,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  oval1Stack: {
    width: 165,
    height: 155,
    marginTop: -5
  },
  style10: {
    opacity: 1,
    shadowColor: "rgba(0,0,0,0.2)",
    shadowOffset: {
      height: 30,
      width: 0
    },
    shadowRadius: 40,
    shadowOpacity: 1,
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 100,
    fontFamily: "karla-700"
  },
  style9: {
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    fontFamily: "karla-regular",
    marginLeft: 10,
    marginTop: 20
  },
  style10Row: {
    height: 117,
    flexDirection: "row",
    marginTop: 31,
    marginLeft: 13,
    marginRight: 1
  },
  likes8: {
    opacity: 1,
    backgroundColor: "transparent",
    lineHeight: 26,
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 22,
    fontFamily: "karla-700",
    letterSpacing: 2,
    marginTop: 14,
    marginLeft: 40
  },
  line7: {
    height: 344,
    width: 5,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginLeft: 60
  },
  followers7: {
    height: 338,
    width: 169,
    opacity: 1,
    marginLeft: 84,
    marginTop: 1
  },
  chart1: {
    height: 150,
    width: 150,
    opacity: 1
  },
  oval: {
    position: "absolute",
    height: 150,
    width: 150,
    top: 5,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  line6: {
    position: "absolute",
    height: 170,
    width: 151,
    top: 0,
    left: 14,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ovalStack: {
    width: 165,
    height: 170,
    marginTop: -5
  },
  style7: {
    position: "absolute",
    top: 30,
    left: 118,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    fontFamily: "karla-regular"
  },
  style8: {
    position: "absolute",
    top: 0,
    left: 0,
    opacity: 1,
    shadowColor: "rgba(0,0,0,0.2)",
    shadowOffset: {
      height: 30,
      width: 0
    },
    shadowRadius: 40,
    shadowOpacity: 1,
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 100,
    fontFamily: "karla-700"
  },
  style7Stack: {
    width: 147,
    height: 117,
    marginTop: 30,
    marginLeft: 21
  },
  followers8: {
    opacity: 1,
    backgroundColor: "transparent",
    lineHeight: 26,
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 22,
    fontFamily: "karla-700",
    letterSpacing: 2,
    marginTop: 15,
    marginLeft: 3
  },
  likes7Row: {
    height: 344,
    flexDirection: "row",
    flex: 1,
    marginRight: 68,
    marginLeft: 88,
    marginTop: 59
  },
  next: {
    position: "absolute",
    top: 282,
    left: 650,
    height: 50,
    width: 50,
    opacity: 1
  },
  line9: {
    position: "absolute",
    height: 28,
    width: 28,
    top: 14,
    left: 10,
    backgroundColor: "transparent",
    borderColor: "transparent",
    transform: [
      {
        rotate: "-315.00deg"
      }
    ]
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
  line9Stack: {
    width: 50,
    height: 50
  },
  month: {
    position: "absolute",
    top: 266,
    left: 50,
    opacity: 1,
    shadowColor: "rgba(0,0,0,0.2)",
    shadowOffset: {
      height: 40,
      width: 0
    },
    shadowRadius: 40,
    shadowOpacity: 1,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 70,
    fontFamily: "karla-700",
    letterSpacing: -2
  },
  style11: {
    position: "absolute",
    top: 358,
    left: 55,
    opacity: 0.5,
    backgroundColor: "transparent",
    lineHeight: 26,
    color: "rgba(255,255,255,1)",
    fontSize: 22,
    fontFamily: "karla-700",
    letterSpacing: 2
  },
  tabs: {
    position: "absolute",
    top: 188,
    left: 90,
    height: 38,
    width: 567,
    opacity: 1
  },
  week: {
    opacity: 1,
    backgroundColor: "transparent",
    lineHeight: 26,
    textAlign: "right",
    color: "rgba(255,255,255,1)",
    fontSize: 22,
    fontFamily: "karla-700",
    letterSpacing: 2
  },
  month1: {
    opacity: 1,
    backgroundColor: "transparent",
    lineHeight: 26,
    textAlign: "right",
    color: "rgba(255,255,255,1)",
    fontSize: 22,
    fontFamily: "karla-700",
    letterSpacing: 2,
    marginLeft: 172
  },
  year: {
    opacity: 1,
    backgroundColor: "transparent",
    lineHeight: 26,
    textAlign: "right",
    color: "rgba(255,255,255,1)",
    fontSize: 22,
    fontFamily: "karla-700",
    letterSpacing: 2,
    marginLeft: 176
  },
  weekRow: {
    height: 26,
    flexDirection: "row",
    marginRight: 1
  },
  line10: {
    height: 6,
    width: 87,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 9,
    marginLeft: 240
  },
  nav: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 128,
    width: 750,
    opacity: 1
  },
  bg2: {
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
  bounds2: {
    height: 50,
    width: 50,
    backgroundColor: "transparent"
  },
  group8: {
    height: 24,
    width: 38,
    opacity: 1,
    marginTop: 13,
    marginLeft: 6
  },
  shape3: {
    height: 6,
    width: 28,
    opacity: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  shape2: {
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
  group7: {
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
  bounds1: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 50,
    width: 50,
    opacity: 1,
    backgroundColor: "transparent"
  },
  group7Stack: {
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
  bgStack: {
    width: 750,
    height: 1334
  }
});

export default Stats3;
