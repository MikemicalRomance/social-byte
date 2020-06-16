import React, { Component } from "react";
import styled, { css } from "styled-components";

function Navigate1(props) {
  return (
    <Container>
      <BgStack>
        <Bg>
          <Mask>
            <Shape></Shape>
            <Shape1></Shape1>
          </Mask>
        </Bg>
        <Bg1>
          <LogoutColumnRow>
            <LogoutColumn>
              <Logout>Logout</Logout>
              <AndreaJameson>ANDREA JAMESON</AndreaJameson>
            </LogoutColumn>
            <Avatar>
              <Mask1Stack>
                <Mask1>
                  <Img
                    src={require("../assets/images/8ba146349df415306e8da9d6bea75d48582b2505.png")}
                  ></Img>
                </Mask1>
                <Img1
                  src={require("../assets/images/8ba146349df415306e8da9d6bea75d48582b2505.png")}
                ></Img1>
              </Mask1Stack>
            </Avatar>
          </LogoutColumnRow>
        </Bg1>
        <Stats>Stats</Stats>
        <Capture>Capture</Capture>
        <Gallery>Gallery</Gallery>
        <Compose>Compose</Compose>
        <Profile>Profile</Profile>
        <Home>Home</Home>
        <Nav>
          <CloseRow>
            <Close>
              <GroupStack>
                <Group>
                  <Shape2>
                    <Shape3></Shape3>
                  </Shape2>
                </Group>
                <Bounds></Bounds>
              </GroupStack>
            </Close>
            <SettingsCopy>
              <Group1Stack>
                <Group1>
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
                </Group1>
                <Bounds1></Bounds1>
              </Group1Stack>
            </SettingsCopy>
          </CloseRow>
        </Nav>
      </BgStack>
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
  position: absolute;
  top: 0px;
  left: 0px;
  height: 1334px;
  width: 750px;
  opacity: 1;
  flex-direction: column;
  display: flex;
`;

const Mask = styled.div`
  height: 1334px;
  width: 750px;
  opacity: 1;
  overflow: hidden;
  background-color: rgba(0,160,255,1);
  flex-direction: column;
  display: flex;
`;

const Shape = styled.div`
  height: 750px;
  width: 750px;
  opacity: 0.1;
  background-color: rgba(0,0,0,1);
  margin-top: 43px;
`;

const Shape1 = styled.div`
  height: 540px;
  width: 750px;
  opacity: 0.1;
  background-color: rgba(0,0,0,1);
`;

const Bg1 = styled.div`
  position: absolute;
  top: 1174px;
  left: 0px;
  height: 160px;
  width: 750px;
  background-color: rgba(0,0,0,1);
  flex-direction: column;
  display: flex;
`;

const Logout = styled.span`
  font-family: Karla;
  opacity: 1;
  background-color: transparent;
  color: rgba(255,255,255,1);
  font-size: 50px;
  font-weight: 700;
  font-style: normal;
  letter-spacing: -2px;
`;

const AndreaJameson = styled.span`
  font-family: Karla;
  opacity: 1;
  background-color: transparent;
  text-align: center;
  color: rgba(255,189,184,1);
  font-size: 20px;
  font-weight: 700;
  font-style: normal;
  letter-spacing: 2px;
  margin-top: 11px;
`;

const LogoutColumn = styled.div`
  width: 202px;
  flex-direction: column;
  display: flex;
  margin-top: 29px;
  margin-bottom: 38px;
`;

const Avatar = styled.div`
  height: 160px;
  width: 160px;
  opacity: 1;
  flex-direction: column;
  display: flex;
  margin-left: 318px;
`;

const Mask1 = styled.div`
  position: absolute;
  top: 10px;
  left: 12px;
  height: 160px;
  width: 160px;
  opacity: 1;
  overflow: hidden;
  background-color: rgba(0,0,0,1);
  flex-direction: column;
  display: flex;
`;

const Img = styled.img`
  height: 100%;
  width: 178px;
  opacity: 0.9;
  background-color: transparent;
  margin-top: -10px;
  margin-left: -12px;
  object-fit: cover;
`;

const Img1 = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 180px;
  width: 178px;
  opacity: 0.9;
  background-color: transparent;
  object-fit: cover;
`;

const Mask1Stack = styled.div`
  width: 178px;
  height: 180px;
  margin-top: -10px;
  margin-left: -12px;
  position: relative;
`;

const LogoutColumnRow = styled.div`
  height: 160px;
  flex-direction: row;
  display: flex;
  margin-left: 70px;
`;

const Stats = styled.span`
  font-family: Karla;
  position: absolute;
  top: 910px;
  left: 292px;
  opacity: 1;
  background-color: transparent;
  text-align: center;
  color: rgba(255,255,255,1);
  font-size: 70px;
  font-weight: 700;
  font-style: normal;
  letter-spacing: -2px;
`;

const Capture = styled.span`
  font-family: Karla;
  position: absolute;
  top: 768px;
  left: 248px;
  opacity: 1;
  background-color: transparent;
  text-align: center;
  color: rgba(255,255,255,1);
  font-size: 70px;
  font-weight: 700;
  font-style: normal;
  letter-spacing: -2px;
`;

const Gallery = styled.span`
  font-family: Karla;
  position: absolute;
  top: 626px;
  left: 265px;
  opacity: 1;
  background-color: transparent;
  text-align: center;
  color: rgba(255,255,255,1);
  font-size: 70px;
  font-weight: 700;
  font-style: normal;
  letter-spacing: -2px;
`;

const Compose = styled.span`
  font-family: Karla;
  position: absolute;
  top: 484px;
  left: 227px;
  opacity: 1;
  background-color: transparent;
  color: rgba(255,255,255,1);
  font-size: 70px;
  font-weight: 700;
  font-style: normal;
  letter-spacing: -2px;
`;

const Profile = styled.span`
  font-family: Karla;
  position: absolute;
  top: 342px;
  left: 272px;
  opacity: 1;
  background-color: transparent;
  color: rgba(255,255,255,1);
  font-size: 70px;
  font-weight: 700;
  font-style: normal;
  letter-spacing: -2px;
`;

const Home = styled.span`
  font-family: Karla;
  position: absolute;
  top: 200px;
  left: 281px;
  opacity: 1;
  background-color: transparent;
  text-align: center;
  color: rgba(255,189,184,1);
  font-size: 70px;
  font-weight: 700;
  font-style: normal;
  letter-spacing: -2px;
`;

const Nav = styled.div`
  position: absolute;
  top: 57px;
  left: 24px;
  height: 50px;
  width: 702px;
  opacity: 1;
  flex-direction: row;
  display: flex;
`;

const Close = styled.div`
  height: 50px;
  width: 50px;
  opacity: 1;
  flex-direction: column;
  display: flex;
`;

const Group = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  height: 26px;
  width: 26px;
  opacity: 1;
  flex-direction: column;
  display: flex;
`;

const Shape2 = styled.div`
  height: 6px;
  width: 30px;
  transform: rotate(-225.00deg);
  background-color: rgba(255,255,255,1);
  flex-direction: column;
  display: flex;
  margin-top: 10px;
  margin-left: -2px;
`;

const Shape3 = styled.div`
  height: 6px;
  width: 30px;
  transform: rotate(-315.00deg);
  opacity: 1;
  background-color: rgba(255,255,255,1);
`;

const Bounds = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 50px;
  width: 50px;
  opacity: 1;
  background-color: transparent;
`;

const GroupStack = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
`;

const SettingsCopy = styled.div`
  height: 50px;
  width: 50px;
  opacity: 1;
  flex-direction: column;
  display: flex;
  margin-left: 602px;
`;

const Group1 = styled.div`
  position: absolute;
  top: 8px;
  left: 5px;
  height: 34px;
  width: 40px;
  opacity: 1;
  flex-direction: column;
  display: flex;
`;

const Bounds1 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 50px;
  width: 50px;
  opacity: 1;
  background-color: transparent;
`;

const Group1Stack = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
`;

const CloseRow = styled.div`
  height: 50px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
`;

const BgStack = styled.div`
  width: 750px;
  height: 1334px;
  position: relative;
`;

export default Navigate1;
