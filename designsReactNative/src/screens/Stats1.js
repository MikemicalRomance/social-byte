import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Svg, { Path } from "react-native-svg";

function Stats1(props) {
  return (
    <View style={styles.container}>
      <View style={styles.bgStack}>
        <View style={styles.bg}>
          <View style={styles.mask}>
            <View style={styles.shape}></View>
          </View>
        </View>
        <View style={styles.grid}>
          <View style={styles.line5Row}>
            <Svg viewBox="-1 -1 6 901" style={styles.line5}>
              <Path
                strokeWidth={2}
                fill="transparent"
                stroke="rgba(255,255,255,1)"
                fillOpacity={0.3}
                strokeOpacity={0.3}
                d="M1.67 2.68 L1.67 895.59 "
              ></Path>
            </Svg>
            <Svg viewBox="-1 -1 6 901" style={styles.line4}>
              <Path
                strokeWidth={2}
                fill="transparent"
                stroke="rgba(255,255,255,1)"
                fillOpacity={0.3}
                strokeOpacity={0.3}
                d="M1.67 2.68 L1.67 895.59 "
              ></Path>
            </Svg>
            <Svg viewBox="-1 -1 6 901" style={styles.line3}>
              <Path
                strokeWidth={2}
                fill="transparent"
                stroke="rgba(255,255,255,1)"
                fillOpacity={0.3}
                strokeOpacity={0.3}
                d="M1.67 2.68 L1.67 895.59 "
              ></Path>
            </Svg>
            <Svg viewBox="-1 -1 6 901" style={styles.line2}>
              <Path
                strokeWidth={2}
                fill="transparent"
                stroke="rgba(255,255,255,1)"
                fillOpacity={0.3}
                strokeOpacity={0.3}
                d="M1.67 2.68 L1.67 895.59 "
              ></Path>
            </Svg>
            <Svg viewBox="-1 -1 6 901" style={styles.line1}>
              <Path
                strokeWidth={2}
                fill="transparent"
                stroke="rgba(255,255,255,1)"
                fillOpacity={0.3}
                strokeOpacity={0.3}
                d="M1.67 2.68 L1.67 895.59 "
              ></Path>
            </Svg>
            <Svg viewBox="-1 -1 6 901" style={styles.line}>
              <Path
                strokeWidth={2}
                fill="transparent"
                stroke="rgba(255,255,255,1)"
                fillOpacity={0.3}
                strokeOpacity={0.3}
                d="M1.67 2.68 L1.67 895.59 "
              ></Path>
            </Svg>
          </View>
        </View>
        <View style={styles.dates}>
          <View style={styles.style6Row}>
            <Text style={styles.style6}>1</Text>
            <Text style={styles.style5}>5</Text>
            <Text style={styles.style4}>10</Text>
            <Text style={styles.style3}>15</Text>
            <Text style={styles.style2}>20</Text>
            <Text style={styles.style1}>25</Text>
            <Text style={styles.style}>30</Text>
          </View>
        </View>
        <View style={styles.followers}>
          <Svg viewBox="-3 -3 698.17 407.86" style={styles.followers1}>
            <Path
              strokeWidth={6}
              fill="transparent"
              stroke="rgba(126,239,204,1)"
              fillOpacity={1}
              strokeOpacity={1}
              d="M42.37 335.04 L54.17 362.61 C73.86 408.57 102.31 405.31 111.07 356.08 L166.56 44.49 C175.32 -4.74 197.98 -5.93 211.87 42.10 L246.85 163.10 C260.74 211.13 294.48 213.27 314.32 167.38 L325.48 141.57 C345.33 95.68 378.99 97.84 392.80 145.89 L428.09 268.69 C441.91 316.75 469.16 316.64 482.60 268.48 L519.38 136.67 C532.82 88.51 568.54 85.12 590.82 129.88 L592.25 132.75 C614.53 177.51 655.90 176.06 674.99 129.85 L689.17 95.53 C708.26 49.31 679.89 18.83 632.43 34.56 "
            ></Path>
          </Svg>
        </View>
        <View style={styles.likes}>
          <Svg viewBox="-3 -3 32 32" style={styles.oval5}>
            <Path
              strokeWidth={6}
              fill="rgba(0,0,0,1)"
              stroke="rgba(184,166,228,1)"
              fillOpacity={1}
              strokeOpacity={1}
              d="M13.00 23.00 C18.52 23.00 23.00 18.52 23.00 13.00 C23.00 7.48 18.52 3.00 13.00 3.00 C7.48 3.00 3.00 7.48 3.00 13.00 C3.00 18.52 7.48 23.00 13.00 23.00 Z"
            ></Path>
          </Svg>
          <View style={styles.oval5Filler}>
            <View style={styles.oval4Row}>
              <Svg viewBox="-3 -3 32 32" style={styles.oval4}>
                <Path
                  strokeWidth={6}
                  fill="rgba(0,0,0,1)"
                  stroke="rgba(184,166,228,1)"
                  fillOpacity={1}
                  strokeOpacity={1}
                  d="M13.00 23.00 C18.52 23.00 23.00 18.52 23.00 13.00 C23.00 7.48 18.52 3.00 13.00 3.00 C7.48 3.00 3.00 7.48 3.00 13.00 C3.00 18.52 7.48 23.00 13.00 23.00 Z"
                ></Path>
              </Svg>
              <Svg viewBox="-3 -3 32 32" style={styles.oval2}>
                <Path
                  strokeWidth={6}
                  fill="rgba(0,0,0,1)"
                  stroke="rgba(184,166,228,1)"
                  fillOpacity={1}
                  strokeOpacity={1}
                  d="M13.00 23.00 C18.52 23.00 23.00 18.52 23.00 13.00 C23.00 7.48 18.52 3.00 13.00 3.00 C7.48 3.00 3.00 7.48 3.00 13.00 C3.00 18.52 7.48 23.00 13.00 23.00 Z"
                ></Path>
              </Svg>
            </View>
            <View style={styles.oval3Row}>
              <Svg viewBox="-3 -3 32 32" style={styles.oval3}>
                <Path
                  strokeWidth={6}
                  fill="rgba(0,0,0,1)"
                  stroke="rgba(184,166,228,1)"
                  fillOpacity={1}
                  strokeOpacity={1}
                  d="M13.00 23.00 C18.52 23.00 23.00 18.52 23.00 13.00 C23.00 7.48 18.52 3.00 13.00 3.00 C7.48 3.00 3.00 7.48 3.00 13.00 C3.00 18.52 7.48 23.00 13.00 23.00 Z"
                ></Path>
              </Svg>
              <Svg viewBox="-3 -3 32 32" style={styles.oval1}>
                <Path
                  strokeWidth={6}
                  fill="rgba(0,0,0,1)"
                  stroke="rgba(184,166,228,1)"
                  fillOpacity={1}
                  strokeOpacity={1}
                  d="M13.00 23.00 C18.52 23.00 23.00 18.52 23.00 13.00 C23.00 7.48 18.52 3.00 13.00 3.00 C7.48 3.00 3.00 7.48 3.00 13.00 C3.00 18.52 7.48 23.00 13.00 23.00 Z"
                ></Path>
              </Svg>
            </View>
            <View style={styles.oval6Row}>
              <Svg viewBox="-3 -3 32 32" style={styles.oval6}>
                <Path
                  strokeWidth={6}
                  fill="rgba(0,0,0,1)"
                  stroke="rgba(184,166,228,1)"
                  fillOpacity={1}
                  strokeOpacity={1}
                  d="M13.00 23.00 C18.52 23.00 23.00 18.52 23.00 13.00 C23.00 7.48 18.52 3.00 13.00 3.00 C7.48 3.00 3.00 7.48 3.00 13.00 C3.00 18.52 7.48 23.00 13.00 23.00 Z"
                ></Path>
              </Svg>
              <Svg viewBox="-3 -3 32 32" style={styles.oval}>
                <Path
                  strokeWidth={6}
                  fill="rgba(0,0,0,1)"
                  stroke="rgba(184,166,228,1)"
                  fillOpacity={1}
                  strokeOpacity={1}
                  d="M13.00 23.00 C18.52 23.00 23.00 18.52 23.00 13.00 C23.00 7.48 18.52 3.00 13.00 3.00 C7.48 3.00 3.00 7.48 3.00 13.00 C3.00 18.52 7.48 23.00 13.00 23.00 Z"
                ></Path>
              </Svg>
            </View>
          </View>
        </View>
        <View style={styles.followers2}>
          <View style={styles.bg1}>
            <View style={styles.followers4}>
              <View style={styles.groupStack}>
                <View style={styles.group}>
                  <Svg viewBox="0 0 14 14" style={styles.shape2}>
                    <Path
                      strokeWidth={0}
                      fill="rgba(0,0,0,1)"
                      fillOpacity={1}
                      strokeOpacity={1}
                      d="M7.00 14.00 C10.85 14.00 14.00 10.85 14.00 7.00 C14.00 3.15 10.85 0.00 7.00 0.00 C3.15 0.00 0.00 3.15 0.00 7.00 C0.00 10.85 3.15 14.00 7.00 14.00 Z"
                    ></Path>
                  </Svg>
                  <Svg viewBox="0 0 32 12" style={styles.shape1}>
                    <Path
                      strokeWidth={0}
                      fill="rgba(0,0,0,1)"
                      fillOpacity={1}
                      strokeOpacity={1}
                      d="M32.00 12.00 C32.00 3.90 21.40 0.00 16.00 0.00 C10.60 0.00 0.00 3.90 0.00 12.00 Z"
                    ></Path>
                  </Svg>
                </View>
                <View style={styles.bounds}></View>
              </View>
            </View>
            <Text style={styles.style7}>98</Text>
            <View style={styles.bg2}>
              <Text style={styles.followers3}>FOLLOWERS</Text>
            </View>
          </View>
        </View>
        <View style={styles.likes1}>
          <View style={styles.bg3}>
            <View style={styles.likes3}>
              <View style={styles.group1Stack}>
                <View style={styles.group1}>
                  <Svg viewBox="0 0 30 29" style={styles.path}>
                    <Path
                      strokeWidth={0}
                      fill="rgba(0,0,0,1)"
                      fillOpacity={1}
                      strokeOpacity={1}
                      d="M0.00 10.00 L6.00 10.00 L6.00 29.00 L0.00 29.00 Z M30.00 10.00 L27.00 29.00 L10.00 29.00 L10.00 10.00 L18.00 0.00 L23.00 0.00 L21.00 10.00 Z"
                    ></Path>
                  </Svg>
                </View>
                <View style={styles.bounds1}></View>
              </View>
            </View>
            <Text style={styles.style8}>165</Text>
            <View style={styles.bg4}>
              <Text style={styles.likes2}>LIKES</Text>
            </View>
          </View>
        </View>
        <View style={styles.month}>
          <View style={styles.prevRow}>
            <View style={styles.prev}>
              <View style={styles.group3Stack}>
                <View style={styles.group3}>
                  <Svg viewBox="-3 -3 28 28" style={styles.line7}>
                    <Path
                      strokeWidth={6}
                      fill="transparent"
                      stroke="rgba(0,0,0,1)"
                      fillOpacity={1}
                      strokeOpacity={1}
                      d="M3.00 3.00 L19.00 3.00 L19.00 19.00 "
                    ></Path>
                  </Svg>
                </View>
                <View style={styles.bounds3}></View>
              </View>
            </View>
            <Text style={styles.month1}>October</Text>
            <View style={styles.next}>
              <View style={styles.group2Stack}>
                <View style={styles.group2}>
                  <Svg viewBox="-3 -3 28 28" style={styles.line6}>
                    <Path
                      strokeWidth={6}
                      fill="transparent"
                      stroke="rgba(0,0,0,1)"
                      fillOpacity={1}
                      strokeOpacity={1}
                      d="M3.00 3.00 L19.00 3.00 L19.00 19.00 "
                    ></Path>
                  </Svg>
                </View>
                <View style={styles.bounds2}></View>
              </View>
            </View>
          </View>
          <Text style={styles.year}>2015</Text>
        </View>
        <View style={styles.nav}>
          <View style={styles.bg5}>
            <View style={styles.menuRow}>
              <View style={styles.menu}>
                <View style={styles.bounds5}>
                  <View style={styles.group5}>
                    <View style={styles.shape4}></View>
                    <View style={styles.shape3}></View>
                  </View>
                </View>
              </View>
              <Text style={styles.statistics}>Statistics</Text>
              <View style={styles.more}>
                <View style={styles.group4Stack}>
                  <View style={styles.group4}>
                    <Svg viewBox="0 0 10 10" style={styles.oval8}>
                      <Path
                        strokeWidth={0}
                        fill="rgba(255,255,255,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M5.00 10.00 C7.76 10.00 10.00 7.76 10.00 5.00 C10.00 2.24 7.76 0.00 5.00 0.00 C2.24 0.00 0.00 2.24 0.00 5.00 C0.00 7.76 2.24 10.00 5.00 10.00 Z"
                      ></Path>
                    </Svg>
                    <Svg viewBox="0 0 10 10" style={styles.oval7}>
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
    backgroundColor: "rgba(126,239,204,1)"
  },
  shape: {
    height: 890,
    width: 750,
    opacity: 1,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: 444
  },
  grid: {
    position: "absolute",
    top: 437,
    left: 124,
    height: 897,
    width: 502,
    opacity: 1,
    flexDirection: "row"
  },
  line5: {
    height: 901,
    width: 6,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  line4: {
    height: 901,
    width: 6,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginLeft: 94
  },
  line3: {
    height: 901,
    width: 6,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginLeft: 94
  },
  line2: {
    height: 901,
    width: 6,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginLeft: 94
  },
  line1: {
    height: 901,
    width: 6,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginLeft: 94
  },
  line: {
    height: 901,
    width: 6,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginLeft: 94
  },
  line5Row: {
    height: 901,
    flexDirection: "row",
    flex: 1,
    marginRight: -3,
    marginLeft: -1,
    marginTop: -1
  },
  dates: {
    position: "absolute",
    top: 1258,
    left: 50,
    height: 26,
    width: 650,
    opacity: 1,
    flexDirection: "row"
  },
  style6: {
    height: 26,
    width: 50,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(184,166,228,1)",
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
    color: "rgba(184,166,228,1)",
    fontSize: 22,
    fontFamily: "karla-700",
    letterSpacing: 2,
    marginLeft: 50
  },
  style4: {
    height: 26,
    width: 50,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(184,166,228,1)",
    fontSize: 22,
    fontFamily: "karla-700",
    letterSpacing: 2,
    marginLeft: 50
  },
  style3: {
    height: 26,
    width: 50,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(184,166,228,1)",
    fontSize: 22,
    fontFamily: "karla-700",
    letterSpacing: 2,
    marginLeft: 50
  },
  style2: {
    height: 26,
    width: 50,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(184,166,228,1)",
    fontSize: 22,
    fontFamily: "karla-700",
    letterSpacing: 2,
    marginLeft: 50
  },
  style1: {
    height: 26,
    width: 50,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(184,166,228,1)",
    fontSize: 22,
    fontFamily: "karla-700",
    letterSpacing: 2,
    marginLeft: 50
  },
  style: {
    height: 26,
    width: 50,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(184,166,228,1)",
    fontSize: 22,
    fontFamily: "karla-700",
    letterSpacing: 2,
    marginLeft: 50
  },
  style6Row: {
    height: 26,
    flexDirection: "row",
    flex: 1
  },
  followers: {
    position: "absolute",
    top: 777,
    left: 0,
    height: 397,
    width: 687,
    opacity: 1
  },
  followers1: {
    height: 408,
    width: 698,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: -3,
    marginLeft: -3
  },
  likes: {
    position: "absolute",
    top: 826,
    left: 65,
    height: 234,
    width: 620,
    opacity: 1,
    flexDirection: "row"
  },
  oval5: {
    height: 32,
    width: 32,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginLeft: 97,
    marginTop: 47
  },
  oval4: {
    height: 32,
    width: 32,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  oval2: {
    height: 32,
    width: 32,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginLeft: 168,
    marginTop: 10
  },
  oval4Row: {
    top: -3,
    left: 197,
    right: 191,
    height: 42,
    position: "absolute",
    flexDirection: "row"
  },
  oval3: {
    height: 32,
    width: 32,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 18
  },
  oval1: {
    height: 32,
    width: 32,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginLeft: 168
  },
  oval3Row: {
    top: 129,
    left: 297,
    right: 91,
    height: 50,
    position: "absolute",
    flexDirection: "row"
  },
  oval6: {
    height: 32,
    width: 32,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 23
  },
  oval: {
    height: 32,
    width: 32,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginLeft: 568
  },
  oval6Row: {
    top: 188,
    left: -3,
    right: -9,
    height: 55,
    position: "absolute",
    flexDirection: "row"
  },
  oval5Filler: {
    flex: 1
  },
  followers2: {
    position: "absolute",
    top: 344,
    left: 390,
    height: 350,
    width: 310,
    opacity: 1
  },
  bg1: {
    height: 350,
    width: 310,
    backgroundColor: "rgba(255,255,255,1)"
  },
  followers4: {
    height: 50,
    width: 50,
    opacity: 1,
    marginTop: 40,
    marginLeft: 130
  },
  group: {
    position: "absolute",
    top: 10,
    left: 9,
    height: 30,
    width: 32,
    opacity: 1
  },
  shape2: {
    height: 14,
    width: 14,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginLeft: 9
  },
  shape1: {
    height: 12,
    width: 32,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 4
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
  style7: {
    height: 140,
    width: 146,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 120,
    fontFamily: "karla-700",
    letterSpacing: -5,
    marginLeft: 82
  },
  bg2: {
    height: 100,
    width: 310,
    backgroundColor: "rgba(184,166,228,1)",
    marginTop: 20
  },
  followers3: {
    height: 26,
    width: 145,
    opacity: 1,
    backgroundColor: "transparent",
    lineHeight: 26,
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 22,
    fontFamily: "karla-700",
    letterSpacing: 2,
    marginTop: 37,
    marginLeft: 82
  },
  likes1: {
    position: "absolute",
    top: 344,
    left: 50,
    height: 350,
    width: 310,
    opacity: 1
  },
  bg3: {
    height: 350,
    width: 310,
    backgroundColor: "rgba(255,255,255,1)"
  },
  likes3: {
    height: 50,
    width: 50,
    opacity: 1,
    marginTop: 40,
    marginLeft: 130
  },
  group1: {
    position: "absolute",
    top: 11,
    left: 10,
    height: 29,
    width: 30,
    opacity: 1
  },
  path: {
    height: 29,
    width: 30,
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
  style8: {
    height: 140,
    width: 176,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 120,
    fontFamily: "karla-700",
    letterSpacing: -5,
    marginLeft: 66
  },
  bg4: {
    height: 100,
    width: 310,
    backgroundColor: "rgba(126,239,204,1)",
    marginTop: 20
  },
  likes2: {
    height: 26,
    width: 69,
    opacity: 1,
    backgroundColor: "transparent",
    lineHeight: 26,
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 22,
    fontFamily: "karla-700",
    letterSpacing: 2,
    marginTop: 37,
    marginLeft: 120
  },
  month: {
    position: "absolute",
    top: 178,
    left: 50,
    height: 106,
    width: 650,
    opacity: 1
  },
  prev: {
    height: 50,
    width: 50,
    opacity: 1,
    marginTop: 10
  },
  group3: {
    position: "absolute",
    top: 13,
    left: 9,
    height: 24,
    width: 24,
    opacity: 1
  },
  line7: {
    height: 28,
    width: 28,
    backgroundColor: "transparent",
    borderColor: "transparent",
    transform: [
      {
        rotate: "-135.00deg"
      }
    ],
    marginTop: 1,
    marginLeft: 1
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
  month1: {
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 60,
    fontFamily: "karla-700",
    letterSpacing: -2,
    marginLeft: 170
  },
  next: {
    height: 50,
    width: 50,
    opacity: 1,
    marginLeft: 170,
    marginTop: 10
  },
  group2: {
    position: "absolute",
    top: 13,
    left: 9,
    height: 24,
    width: 24,
    opacity: 1
  },
  line6: {
    height: 28,
    width: 28,
    backgroundColor: "transparent",
    borderColor: "transparent",
    transform: [
      {
        rotate: "-315.00deg"
      }
    ],
    marginTop: 1,
    marginLeft: 1
  },
  bounds2: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 50,
    width: 50,
    opacity: 1,
    backgroundColor: "transparent"
  },
  group2Stack: {
    width: 50,
    height: 50
  },
  prevRow: {
    height: 70,
    flexDirection: "row"
  },
  year: {
    opacity: 0.2,
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    fontFamily: "karla-700",
    marginLeft: 292
  },
  nav: {
    position: "absolute",
    top: 0,
    left: 0,
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
  group5: {
    height: 24,
    width: 38,
    opacity: 1,
    marginTop: 13,
    marginLeft: 6
  },
  shape4: {
    height: 6,
    width: 28,
    opacity: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  shape3: {
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
  oval8: {
    height: 10,
    width: 10,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  oval7: {
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

export default Stats1;
