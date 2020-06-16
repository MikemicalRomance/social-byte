import React, { Component } from "react";
import styled, { css } from "styled-components";

function Profile(props) {
  return (
    <Container>
      <Bg>
        <Nav>
          <Bg5>
            <MenuRow>
              <Menu>
                <Bounds5>
                  <Group10>
                    <Shape8></Shape8>
                    <Shape7></Shape7>
                  </Group10>
                </Bounds5>
              </Menu>
              <Text>Profile</Text>
              <Settings>
                <Group9Stack>
                  <Group9>
                    <svg
                      viewBox="0 0 40 34"
                      style={{
                        height: 34,
                        width: 40,
                        backgroundColor: "transparent",
                        borderColor: "transparent"
                      }}
                    >
                      <path
                        strokeWidth={0}
                        fill="rgba(255,255,255,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M0.00 17.00 L10.00 0.00 L30.00 0.00 L40.00 17.00 L30.00 34.00 L10.00 34.00 L0.00 17.00 Z M20.00 22.00 C22.76 22.00 25.00 19.76 25.00 17.00 C25.00 14.24 22.76 12.00 20.00 12.00 C17.24 12.00 15.00 14.24 15.00 17.00 C15.00 19.76 17.24 22.00 20.00 22.00 Z"
                      ></path>
                    </svg>
                  </Group9>
                  <Bounds4></Bounds4>
                </Group9Stack>
              </Settings>
            </MenuRow>
          </Bg5>
        </Nav>
        <AvatarStack>
          <Avatar>
            <Mask1Stack>
              <Mask1>
                <Img>
                  <Overlay></Overlay>
                </Img>
              </Mask1>
              <Img1>
                <Overlay1></Overlay1>
              </Img1>
            </Mask1Stack>
          </Avatar>
          <More>
            <Group8Stack>
              <Group8>
                <svg
                  viewBox="0 0 10 10"
                  style={{
                    height: 10,
                    width: 10,
                    backgroundColor: "transparent",
                    borderColor: "transparent"
                  }}
                >
                  <path
                    strokeWidth={0}
                    fill="rgba(255,255,255,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M5.00 10.00 C7.76 10.00 10.00 7.76 10.00 5.00 C10.00 2.24 7.76 0.00 5.00 0.00 C2.24 0.00 0.00 2.24 0.00 5.00 C0.00 7.76 2.24 10.00 5.00 10.00 Z"
                  ></path>
                </svg>
                <svg
                  viewBox="0 0 10 10"
                  style={{
                    height: 10,
                    width: 10,
                    backgroundColor: "transparent",
                    borderColor: "transparent",
                    marginTop: 8
                  }}
                >
                  <path
                    strokeWidth={0}
                    fill="rgba(255,255,255,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M5.00 10.00 C7.76 10.00 10.00 7.76 10.00 5.00 C10.00 2.24 7.76 0.00 5.00 0.00 C2.24 0.00 0.00 2.24 0.00 5.00 C0.00 7.76 2.24 10.00 5.00 10.00 Z"
                  ></path>
                </svg>
              </Group8>
              <Bounds3></Bounds3>
            </Group8Stack>
          </More>
          <Name>Todd Fisher</Name>
          <Place>Los Angeles</Place>
          <Role>Photographer</Role>
        </AvatarStack>
        <Group4>
          <ChatRow>
            <Chat>
              <Group7Stack>
                <Group7>
                  <Shape5></Shape5>
                  <Shape4></Shape4>
                </Group7>
                <Bounds2></Bounds2>
              </Group7Stack>
            </Chat>
            <Video>
              <Bounds1>
                <Group6>
                  <Shape2Stack>
                    <Shape2></Shape2>
                    <svg
                      viewBox="0 0 16 26"
                      style={{
                        position: "absolute",
                        height: 26,
                        width: 16,
                        top: 2,
                        left: 27,
                        backgroundColor: "transparent",
                        borderColor: "transparent"
                      }}
                    >
                      <path
                        strokeWidth={0}
                        fill="rgba(0,0,0,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M0.00 13.00 L16.00 0.00 L16.00 26.00 L0.00 13.00 Z"
                      ></path>
                    </svg>
                  </Shape2Stack>
                </Group6>
              </Bounds1>
            </Video>
            <Stats>
              <Bounds>
                <Group5>
                  <Shape1Row>
                    <Shape1></Shape1>
                    <Shape></Shape>
                  </Shape1Row>
                </Group5>
              </Bounds>
            </Stats>
          </ChatRow>
        </Group4>
        <GroupStack>
          <Group>
            <Group3Row>
              <Group3>
                <Bg3>
                  <Likes>
                    <Style1>765</Style1>
                    <Likes1>LIKES</Likes1>
                  </Likes>
                </Bg3>
              </Group3>
              <Group2Column>
                <Group2>
                  <Bg2>
                    <Following>
                      <Style>1,679</Style>
                      <Following1>FOLLOWING</Following1>
                    </Following>
                  </Bg2>
                </Group2>
                <Group1>
                  <Bg1>
                    <Followers>
                      <K>145k</K>
                      <Followers1>FOLLOWERS</Followers1>
                    </Followers>
                  </Bg1>
                </Group1>
              </Group2Column>
            </Group3Row>
          </Group>
          <GetStartedCopy>
            <Bg4Stack>
              <Bg4>
                <Mask></Mask>
              </Bg4>
              <Following2>Following</Following2>
            </Bg4Stack>
          </GetStartedCopy>
        </GroupStack>
      </Bg>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(255,255,255,1);
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const Bg = styled.div`
  height: 1334px;
  width: 750px;
  background-color: rgba(255,189,184,1);
  flex-direction: column;
  display: flex;
`;

const Nav = styled.div`
  height: 128px;
  width: 750px;
  opacity: 1;
  flex-direction: column;
  display: flex;
`;

const Bg5 = styled.div`
  height: 128px;
  width: 750px;
  background-color: rgba(0,0,0,1);
  flex-direction: row;
  display: flex;
`;

const Menu = styled.div`
  height: 50px;
  width: 50px;
  opacity: 1;
  flex-direction: column;
  display: flex;
`;

const Bounds5 = styled.div`
  height: 50px;
  width: 50px;
  background-color: transparent;
  flex-direction: column;
  display: flex;
`;

const Group10 = styled.div`
  height: 24px;
  width: 38px;
  opacity: 1;
  flex-direction: column;
  display: flex;
  margin-top: 13px;
  margin-left: 6px;
`;

const Shape8 = styled.div`
  height: 6px;
  width: 28px;
  opacity: 1;
  background-color: rgba(255,255,255,1);
`;

const Shape7 = styled.div`
  height: 6px;
  width: 38px;
  opacity: 1;
  background-color: rgba(255,255,255,1);
  margin-top: 12px;
`;

const Text = styled.span`
  font-family: Karla;
  opacity: 1;
  color: rgba(255,255,255,1);
  line-height: 34px;
  text-align: center;
  font-size: 34px;
  font-weight: 400;
  font-style: normal;
  margin-left: 252px;
  margin-top: 6px;
`;

const Settings = styled.div`
  height: 50px;
  width: 50px;
  opacity: 1;
  flex-direction: column;
  display: flex;
  margin-left: 251px;
`;

const Group9 = styled.div`
  position: absolute;
  top: 8px;
  left: 5px;
  height: 34px;
  width: 40px;
  opacity: 1;
  flex-direction: column;
  display: flex;
`;

const Bounds4 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 50px;
  width: 50px;
  opacity: 1;
  background-color: transparent;
`;

const Group9Stack = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
`;

const MenuRow = styled.div`
  height: 50px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 24px;
  margin-left: 24px;
  margin-top: 58px;
`;

const Avatar = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 430px;
  width: 750px;
  opacity: 1;
  flex-direction: column;
  display: flex;
`;

const Mask1 = styled.div`
  position: absolute;
  top: 17px;
  left: 0px;
  height: 430px;
  width: 750px;
  opacity: 1;
  overflow: hidden;
  background-color: rgba(0,0,0,1);
  flex-direction: column;
  display: flex;
`;

const Img = styled.div`
  height: 100%;
  width: 750px;
  opacity: 1;
  background-color: transparent;
  flex-direction: column;
  display: flex;
  margin-top: -17px;
  background-image: url(${require("../assets/images/5cdee231ee2888cef305893bbdc6e3f865b81507.png")});
  background-size: cover;
`;

const Overlay = styled.div`
  height: 300px;
  width: 750px;
  margin-top: 147px;
  background-image: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
`;

const Img1 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 469px;
  width: 750px;
  opacity: 1;
  background-color: transparent;
  flex-direction: column;
  display: flex;
  background-image: url(${require("../assets/images/5cdee231ee2888cef305893bbdc6e3f865b81507.png")});
  background-size: cover;
`;

const Overlay1 = styled.div`
  height: 300px;
  width: 750px;
  margin-top: 147px;
  background-image: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
`;

const Mask1Stack = styled.div`
  width: 750px;
  height: 469px;
  margin-top: -17px;
  position: relative;
`;

const More = styled.div`
  position: absolute;
  top: 268px;
  left: 659px;
  height: 50px;
  width: 50px;
  opacity: 1;
  flex-direction: column;
  display: flex;
`;

const Group8 = styled.div`
  position: absolute;
  top: 11px;
  left: 20px;
  height: 28px;
  width: 10px;
  opacity: 1;
  flex-direction: column;
  display: flex;
`;

const Bounds3 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 50px;
  width: 50px;
  opacity: 1;
  background-color: transparent;
`;

const Group8Stack = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
`;

const Name = styled.span`
  font-family: Karla;
  position: absolute;
  top: 258px;
  left: 60px;
  opacity: 1;
  background-color: transparent;
  line-height: 60px;
  color: rgba(255,255,255,1);
  font-size: 60px;
  font-weight: 700;
  font-style: normal;
  letter-spacing: -2px;
`;

const Place = styled.span`
  font-family: Karla;
  position: absolute;
  top: 348px;
  left: 540px;
  opacity: 1;
  background-color: transparent;
  text-align: right;
  color: rgba(255,255,255,1);
  font-size: 28px;
  font-weight: 400;
  font-style: normal;
`;

const Role = styled.span`
  font-family: Karla;
  position: absolute;
  top: 348px;
  left: 60px;
  opacity: 1;
  background-color: transparent;
  color: rgba(255,255,255,1);
  font-size: 28px;
  font-weight: 400;
  font-style: normal;
`;

const AvatarStack = styled.div`
  width: 750px;
  height: 430px;
  position: relative;
`;

const Group4 = styled.div`
  height: 50px;
  width: 470px;
  opacity: 1;
  flex-direction: row;
  display: flex;
  margin-top: 60px;
  margin-left: 140px;
`;

const Chat = styled.div`
  height: 49px;
  width: 50px;
  opacity: 1;
  flex-direction: column;
  display: flex;
`;

const Group7 = styled.div`
  position: absolute;
  top: 6px;
  left: 6px;
  height: 36px;
  width: 36px;
  opacity: 1;
  flex-direction: column;
  display: flex;
`;

const Shape5 = styled.div`
  height: 26px;
  width: 36px;
  opacity: 1;
  background-color: rgba(0,0,0,1);
`;

const Shape4 = styled.div`
  height: 10px;
  width: 10px;
  transform: rotate(-270.00deg);
  opacity: 1;
  background-color: rgba(0,0,0,1);
`;

const Bounds2 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 49px;
  width: 50px;
  opacity: 1;
  background-color: transparent;
`;

const Group7Stack = styled.div`
  width: 50px;
  height: 49px;
  position: relative;
`;

const Video = styled.div`
  height: 50px;
  width: 50px;
  opacity: 1;
  flex-direction: column;
  display: flex;
  margin-left: 160px;
`;

const Bounds1 = styled.div`
  height: 50px;
  width: 50px;
  background-color: transparent;
  flex-direction: column;
  display: flex;
`;

const Group6 = styled.div`
  height: 30px;
  width: 43px;
  opacity: 1;
  flex-direction: column;
  display: flex;
  margin-top: 10px;
  margin-left: 4px;
`;

const Shape2 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 30px;
  width: 32px;
  opacity: 1;
  background-color: rgba(0,0,0,1);
`;

const Shape2Stack = styled.div`
  width: 43px;
  height: 30px;
  position: relative;
`;

const Stats = styled.div`
  height: 49px;
  width: 50px;
  opacity: 1;
  flex-direction: column;
  display: flex;
  margin-left: 160px;
`;

const Bounds = styled.div`
  height: 49px;
  width: 50px;
  background-color: transparent;
  flex-direction: column;
  display: flex;
`;

const Group5 = styled.div`
  height: 30px;
  width: 30px;
  opacity: 1;
  flex-direction: row;
  display: flex;
  margin-top: 13px;
  margin-left: 10px;
`;

const Shape1 = styled.div`
  height: 30px;
  width: 12px;
  opacity: 1;
  background-color: rgba(0,0,0,1);
`;

const Shape = styled.div`
  height: 21px;
  width: 12px;
  opacity: 1;
  background-color: rgba(0,0,0,1);
  margin-left: 6px;
  margin-top: 9px;
`;

const Shape1Row = styled.div`
  height: 30px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
`;

const ChatRow = styled.div`
  height: 50px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
`;

const Group = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 428px;
  width: 630px;
  opacity: 1;
  flex-direction: column;
  display: flex;
`;

const Group3 = styled.div`
  height: 427px;
  width: 315px;
  opacity: 1;
  flex-direction: column;
  display: flex;
`;

const Bg3 = styled.div`
  height: 427px;
  width: 315px;
  background-color: rgba(255,255,255,1);
  flex-direction: column;
  display: flex;
  box-shadow: 30px 30px 60px  1px rgba(0,0,0,0.1) ;
`;

const Likes = styled.div`
  height: 107px;
  width: 102px;
  opacity: 1;
  flex-direction: column;
  display: flex;
  margin-top: 160px;
  margin-left: 107px;
`;

const Style1 = styled.span`
  font-family: Karla;
  opacity: 1;
  background-color: transparent;
  text-align: center;
  color: rgba(0,0,0,1);
  font-size: 60px;
  font-weight: 700;
  font-style: normal;
`;

const Likes1 = styled.span`
  font-family: Karla;
  opacity: 1;
  background-color: transparent;
  text-align: center;
  color: rgba(182,148,145,1);
  font-size: 20px;
  font-weight: 700;
  font-style: normal;
  letter-spacing: 2px;
  margin-top: 14px;
  margin-left: 19px;
`;

const Group2 = styled.div`
  height: 214px;
  width: 315px;
  opacity: 1;
  flex-direction: column;
  display: flex;
`;

const Bg2 = styled.div`
  height: 214px;
  width: 315px;
  background-color: rgba(255,255,255,1);
  flex-direction: column;
  display: flex;
  box-shadow: 0px 30px 60px  1px rgba(0,0,0,0.1) ;
`;

const Following = styled.div`
  height: 107px;
  width: 140px;
  opacity: 1;
  flex-direction: column;
  display: flex;
  margin-top: 54px;
  margin-left: 88px;
`;

const Style = styled.span`
  font-family: Karla;
  opacity: 1;
  background-color: transparent;
  text-align: center;
  color: rgba(0,0,0,1);
  font-size: 60px;
  font-weight: 700;
  font-style: normal;
`;

const Following1 = styled.span`
  font-family: Karla;
  opacity: 1;
  background-color: transparent;
  text-align: center;
  color: rgba(182,148,145,1);
  font-size: 20px;
  font-weight: 700;
  font-style: normal;
  letter-spacing: 2px;
  margin-top: 14px;
  margin-left: 5px;
`;

const Group1 = styled.div`
  height: 214px;
  width: 315px;
  opacity: 1;
  flex-direction: column;
  display: flex;
`;

const Bg1 = styled.div`
  height: 214px;
  width: 315px;
  background-color: rgba(255,255,255,1);
  flex-direction: column;
  display: flex;
  box-shadow: 0px 30px 60px  1px rgba(0,0,0,0.1) ;
`;

const Followers = styled.div`
  height: 107px;
  width: 136px;
  opacity: 1;
  flex-direction: column;
  display: flex;
  margin-top: 53px;
  margin-left: 90px;
`;

const K = styled.span`
  font-family: Karla;
  opacity: 1;
  background-color: transparent;
  color: rgba(0,0,0,1);
  font-size: 60px;
  font-weight: 700;
  font-style: normal;
`;

const Followers1 = styled.span`
  font-family: Karla;
  opacity: 1;
  background-color: transparent;
  color: rgba(182,148,145,1);
  font-size: 20px;
  font-weight: 700;
  font-style: normal;
  letter-spacing: 2.34667px;
  margin-top: 14px;
`;

const Group2Column = styled.div`
  width: 315px;
  flex-direction: column;
  display: flex;
`;

const Group3Row = styled.div`
  height: 428px;
  flex-direction: row;
  display: flex;
`;

const GetStartedCopy = styled.div`
  position: absolute;
  top: 427px;
  left: 0px;
  height: 120px;
  width: 630px;
  opacity: 1;
  flex-direction: column;
  display: flex;
`;

const Bg4 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 120px;
  width: 630px;
  opacity: 1;
  flex-direction: column;
  display: flex;
`;

const Mask = styled.div`
  height: 120px;
  width: 630px;
  opacity: 1;
  overflow: hidden;
  background-color: rgba(0,0,0,1);
`;

const Following2 = styled.span`
  font-family: Karla;
  position: absolute;
  top: 43px;
  left: 255px;
  opacity: 1;
  background-color: transparent;
  text-align: center;
  color: rgba(255,255,255,1);
  font-size: 26px;
  font-weight: 700;
  font-style: normal;
`;

const Bg4Stack = styled.div`
  width: 630px;
  height: 120px;
  position: relative;
`;

const GroupStack = styled.div`
  width: 630px;
  height: 547px;
  margin-top: 59px;
  margin-left: 60px;
  position: relative;
`;

export default Profile;
