import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Svg, { Path } from "react-native-svg";

function Stats2(props) {
  return (
    <View style={styles.container}>
      <View style={styles.bgCopyStack}>
        <View style={styles.bgCopy}>
          <View style={styles.mask}>
            <View style={styles.shape}></View>
            <View style={styles.shape1}></View>
          </View>
        </View>
        <View style={styles.bg}>
          <View style={styles.avatar}>
            <View style={styles.mask1Stack}>
              <View style={styles.mask1}>
                <Image
                  source={require("../assets/images/6dd2ea66ec6adbecef5508fe4c5ee9a2bef8d8c5.png")}
                  resizeMode="cover"
                  style={styles.img}
                ></Image>
              </View>
              <Image
                source={require("../assets/images/6dd2ea66ec6adbecef5508fe4c5ee9a2bef8d8c5.png")}
                resizeMode="cover"
                style={styles.img1}
              ></Image>
            </View>
          </View>
          <View style={styles.chartStack}>
            <View style={styles.chart}>
              <View style={styles.followers2Stack}>
                <Svg viewBox="-20 -20 408.83 410" style={styles.followers2}>
                  <Path
                    strokeWidth={40}
                    fill="transparent"
                    stroke="rgba(255,236,87,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M184.41 350.00 C275.22 350.00 348.83 276.13 348.83 185.00 C348.83 93.87 275.22 20.00 184.41 20.00 C93.61 20.00 20.00 93.87 20.00 185.00 C20.00 276.13 93.61 350.00 184.41 350.00 Z"
                  ></Path>
                </Svg>
                <Svg viewBox="-20 -20 244.41 348.37" style={styles.likes2}>
                  <Path
                    strokeWidth={40}
                    fill="transparent"
                    stroke="rgba(0,0,0,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M148.15 288.37 C170.84 260.09 184.41 224.14 184.41 185.00 C184.41 93.87 110.80 20.00 20.00 20.00 "
                  ></Path>
                </Svg>
              </View>
            </View>
            <View style={styles.rect}>
              <View style={styles.group3Stack}>
                <View style={styles.group3}>
                  <View style={styles.pathStack}>
                    <Svg viewBox="0 0 30 6" style={styles.path}>
                      <Path
                        strokeWidth={0}
                        fill="rgba(0,0,0,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M0.00 0.00 L30.00 0.00 L30.00 6.00 L0.00 6.00 Z"
                      ></Path>
                    </Svg>
                    <Svg viewBox="0 0 6 30" style={styles.path1}>
                      <Path
                        strokeWidth={0}
                        fill="rgba(0,0,0,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M0.00 0.00 L150.00 0.00 L150.00 1.20 L0.00 1.20 Z"
                      ></Path>
                    </Svg>
                  </View>
                </View>
                <View style={styles.bounds3}></View>
              </View>
            </View>
          </View>
          <View style={styles.likes}>
            <View style={styles.shape5Row}>
              <View style={styles.shape5}></View>
              <Text style={styles.likes1}>Likes</Text>
              <Text style={styles.style3}>28</Text>
              <Text style={styles.style2}>%</Text>
            </View>
          </View>
          <View style={styles.followers}>
            <View style={styles.shape4Row}>
              <View style={styles.shape4}></View>
              <Text style={styles.followers1}>Followers</Text>
              <Text style={styles.style1}>72</Text>
              <Text style={styles.style}>%</Text>
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.bg1}>
            <View style={styles.barChartRow}>
              <View style={styles.barChart}>
                <View style={styles.bounds2}>
                  <View style={styles.group2}>
                    <View style={styles.shape3Row}>
                      <View style={styles.shape3}></View>
                      <View style={styles.shape2}></View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.pieChart}>
                <View style={styles.bounds1}>
                  <View style={styles.group1}>
                    <Svg viewBox="0 0 36 36" style={styles.oval}>
                      <Path
                        strokeWidth={0}
                        fill="rgba(0,0,0,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M0.00 18.00 C0.00 27.94 8.06 36.00 18.00 36.00 C27.94 36.00 36.00 27.94 36.00 18.00 C36.00 8.06 27.94 0.00 18.00 0.00 L18.00 18.03 L0.00 18.00 Z"
                      ></Path>
                    </Svg>
                  </View>
                </View>
              </View>
              <View style={styles.graph}>
                <View style={styles.bounds}>
                  <View style={styles.group}>
                    <Svg viewBox="-5 -5 60 32" style={styles.line}>
                      <Path
                        strokeWidth={10}
                        fill="transparent"
                        stroke="rgba(0,0,0,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M45.00 5.00 L32.14 17.00 L18.57 5.00 L5.00 17.00 "
                      ></Path>
                    </Svg>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Text style={styles.title}>September{"\n"}2015</Text>
        <View style={styles.nav}>
          <View style={styles.bg2}>
            <View style={styles.menuRow}>
              <View style={styles.menu}>
                <View style={styles.bounds5}>
                  <View style={styles.group5}>
                    <View style={styles.shape7}></View>
                    <View style={styles.shape6}></View>
                  </View>
                </View>
              </View>
              <Text style={styles.statistics}>Statistics</Text>
              <View style={styles.more}>
                <View style={styles.group4Stack}>
                  <View style={styles.group4}>
                    <Svg viewBox="0 0 10 10" style={styles.oval2}>
                      <Path
                        strokeWidth={0}
                        fill="rgba(255,255,255,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M5.00 10.00 C7.76 10.00 10.00 7.76 10.00 5.00 C10.00 2.24 7.76 0.00 5.00 0.00 C2.24 0.00 0.00 2.24 0.00 5.00 C0.00 7.76 2.24 10.00 5.00 10.00 Z"
                      ></Path>
                    </Svg>
                    <Svg viewBox="0 0 10 10" style={styles.oval1}>
                      <Path
                        strokeWidth={0}
                        fill="rgba(255,255,255,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M5.00 10.00 C7.76 10.00 10.00 7.76 10.00 5.00 C10.00 2.24 7.76 0.00 5.00 0.00 C2.24 0.00 0.00 2.24 0.00 5.00 C0.00 7.76 2.24 10.00 5.00 10.00 Z"
                      ></Path>
                    </Svg>
                  </View>
                  <View style={styles.bounds4}></View>
                </View>
              </View>
            </View>
            <View style={styles.tabs}>
              <View style={styles.dayRow}>
                <Text style={styles.day}>DAY</Text>
                <Text style={styles.month}>MONTH</Text>
                <Text style={styles.year}>YEAR</Text>
              </View>
              <View style={styles.active}></View>
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
  bgCopy: {
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
  bg: {
    position: "absolute",
    top: 298,
    left: 50,
    height: 1036,
    width: 650,
    shadowColor: "rgba(0,0,0,0.2)",
    shadowOffset: {
      height: 40,
      width: 0
    },
    shadowRadius: 50,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  avatar: {
    height: 100,
    width: 100,
    opacity: 1,
    marginTop: 40,
    marginLeft: 40
  },
  mask1: {
    position: "absolute",
    top: 4,
    left: 9,
    height: 100,
    width: 100,
    opacity: 1,
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,1)"
  },
  img: {
    height: 105,
    width: 112,
    opacity: 1,
    backgroundColor: "transparent",
    marginTop: -4,
    marginLeft: -9
  },
  img1: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 105,
    width: 112,
    opacity: 1,
    backgroundColor: "transparent"
  },
  mask1Stack: {
    width: 112,
    height: 105,
    marginTop: -4,
    marginLeft: -9
  },
  chart: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 330,
    width: 330,
    opacity: 1
  },
  followers2: {
    position: "absolute",
    height: 410,
    width: 409,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  likes2: {
    position: "absolute",
    height: 348,
    width: 244,
    top: 0,
    left: 165,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  followers2Stack: {
    width: 409,
    height: 410,
    marginTop: -20,
    marginLeft: -20
  },
  rect: {
    position: "absolute",
    top: 140,
    left: 140,
    height: 50,
    width: 50,
    opacity: 1
  },
  group3: {
    position: "absolute",
    top: 10,
    left: 10,
    height: 30,
    width: 30,
    opacity: 1
  },
  path: {
    position: "absolute",
    height: 6,
    width: 30,
    top: 12,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent",
    transform: [
      {
        rotate: "-180.00deg"
      }
    ]
  },
  path1: {
    position: "absolute",
    height: 30,
    width: 6,
    top: 0,
    left: 12,
    backgroundColor: "transparent",
    borderColor: "transparent",
    transform: [
      {
        rotate: "-90.00deg"
      }
    ]
  },
  pathStack: {
    width: 30,
    height: 30
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
  group3Stack: {
    width: 50,
    height: 50
  },
  chartStack: {
    width: 330,
    height: 330,
    marginTop: 100,
    marginLeft: 160
  },
  likes: {
    height: 82,
    width: 550,
    opacity: 1,
    flexDirection: "row",
    marginTop: 100,
    marginLeft: 50
  },
  shape5: {
    height: 20,
    width: 20,
    opacity: 1,
    backgroundColor: "rgba(255,236,87,1)",
    marginTop: 31
  },
  likes1: {
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
    fontSize: 70,
    fontFamily: "karla-700",
    letterSpacing: -2,
    marginLeft: 40
  },
  style3: {
    opacity: 1,
    shadowColor: "rgba(0,0,0,0.2)",
    shadowOffset: {
      height: 30,
      width: 0
    },
    shadowRadius: 40,
    shadowOpacity: 1,
    backgroundColor: "transparent",
    textAlign: "right",
    color: "rgba(0,0,0,1)",
    fontSize: 70,
    fontFamily: "karla-700",
    letterSpacing: -2,
    marginLeft: 212
  },
  style2: {
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    fontFamily: "karla-regular",
    marginLeft: 2,
    marginTop: 11
  },
  shape5Row: {
    height: 82,
    flexDirection: "row",
    flex: 1,
    marginRight: 1
  },
  followers: {
    height: 82,
    width: 550,
    opacity: 1,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 50
  },
  shape4: {
    height: 20,
    width: 20,
    opacity: 1,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: 31
  },
  followers1: {
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
    fontSize: 70,
    fontFamily: "karla-700",
    letterSpacing: -2,
    marginLeft: 40
  },
  style1: {
    opacity: 1,
    shadowColor: "rgba(0,0,0,0.2)",
    shadowOffset: {
      height: 30,
      width: 0
    },
    shadowRadius: 40,
    shadowOpacity: 1,
    backgroundColor: "transparent",
    textAlign: "right",
    color: "rgba(0,0,0,1)",
    fontSize: 70,
    fontFamily: "karla-700",
    letterSpacing: -2,
    marginLeft: 88
  },
  style: {
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    fontFamily: "karla-regular",
    marginLeft: 3,
    marginTop: 11
  },
  shape4Row: {
    height: 82,
    flexDirection: "row",
    flex: 1,
    marginRight: 1
  },
  footer: {
    position: "absolute",
    top: 1214,
    left: 0,
    height: 120,
    width: 750,
    opacity: 1
  },
  bg1: {
    height: 120,
    width: 750,
    shadowColor: "rgba(0,0,0,0.1)",
    shadowOffset: {
      height: 0,
      width: 0
    },
    shadowRadius: 100,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,236,87,1)",
    flexDirection: "row"
  },
  barChart: {
    height: 49,
    width: 50,
    opacity: 1
  },
  bounds2: {
    height: 49,
    width: 50,
    backgroundColor: "transparent"
  },
  group2: {
    height: 30,
    width: 30,
    opacity: 1,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 10
  },
  shape3: {
    height: 30,
    width: 12,
    opacity: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  shape2: {
    height: 21,
    width: 12,
    opacity: 1,
    backgroundColor: "rgba(0,0,0,1)",
    marginLeft: 6,
    marginTop: 9
  },
  shape3Row: {
    height: 30,
    flexDirection: "row",
    flex: 1
  },
  pieChart: {
    height: 49,
    width: 50,
    opacity: 1,
    marginLeft: 180
  },
  bounds1: {
    height: 49,
    width: 50,
    backgroundColor: "transparent"
  },
  group1: {
    height: 36,
    width: 36,
    opacity: 1,
    marginTop: 7,
    marginLeft: 7
  },
  oval: {
    height: 36,
    width: 36,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  graph: {
    height: 49,
    width: 50,
    opacity: 1,
    marginLeft: 180
  },
  bounds: {
    height: 49,
    width: 50,
    backgroundColor: "transparent"
  },
  group: {
    height: 12,
    width: 40,
    opacity: 1,
    marginTop: 18,
    marginLeft: 5
  },
  line: {
    height: 32,
    width: 60,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: -5,
    marginLeft: -5
  },
  barChartRow: {
    height: 49,
    flexDirection: "row",
    flex: 1,
    marginRight: 120,
    marginLeft: 120,
    marginTop: 36
  },
  title: {
    position: "absolute",
    top: 338,
    left: 403,
    opacity: 1,
    shadowColor: "rgba(0,0,0,0.2)",
    shadowOffset: {
      height: 40,
      width: 0
    },
    shadowRadius: 40,
    shadowOpacity: 1,
    backgroundColor: "transparent",
    lineHeight: 70,
    textAlign: "right",
    color: "rgba(0,0,0,1)",
    fontSize: 70,
    fontFamily: "karla-700",
    letterSpacing: -2
  },
  nav: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 248,
    width: 750,
    opacity: 1
  },
  bg2: {
    height: 248,
    width: 750,
    backgroundColor: "rgba(0,0,0,1)"
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
  group5: {
    height: 24,
    width: 38,
    opacity: 1,
    marginTop: 13,
    marginLeft: 6
  },
  shape7: {
    height: 6,
    width: 28,
    opacity: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  shape6: {
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
  group4: {
    position: "absolute",
    top: 11,
    left: 20,
    height: 28,
    width: 10,
    opacity: 1
  },
  oval2: {
    height: 10,
    width: 10,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  oval1: {
    height: 10,
    width: 10,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 8
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
  group4Stack: {
    width: 50,
    height: 50
  },
  menuRow: {
    height: 50,
    flexDirection: "row",
    marginTop: 58,
    marginLeft: 24,
    marginRight: 24
  },
  tabs: {
    height: 60,
    width: 556,
    opacity: 1,
    marginTop: 80,
    marginLeft: 101
  },
  day: {
    opacity: 1,
    backgroundColor: "transparent",
    lineHeight: 26,
    textAlign: "right",
    color: "rgba(255,255,255,1)",
    fontSize: 22,
    fontFamily: "karla-700",
    letterSpacing: 2
  },
  month: {
    opacity: 1,
    backgroundColor: "transparent",
    lineHeight: 26,
    textAlign: "right",
    color: "rgba(255,236,87,1)",
    fontSize: 22,
    fontFamily: "karla-700",
    letterSpacing: 2,
    marginLeft: 182
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
  dayRow: {
    height: 26,
    flexDirection: "row",
    marginRight: 1
  },
  active: {
    height: 6,
    width: 250,
    opacity: 1,
    backgroundColor: "rgba(249,235,89,1)",
    marginTop: 28,
    marginLeft: 149
  },
  bgCopyStack: {
    width: 750,
    height: 1334
  }
});

export default Stats2;
