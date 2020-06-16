import React, { Component } from "react";
import styled, { css } from "styled-components";

function Navigate(props) {
  return (
    <Container>
      <BgStack>
        <Bg>
          <Mask>
            <Img>
              <Overlay></Overlay>
            </Img>
          </Mask>
        </Bg>
        <Logout>
          <Bg1>
            <Logout1>Logout</Logout1>
          </Bg1>
        </Logout>
        <Stats>Stats</Stats>
        <Capture>Capture</Capture>
        <Gallery>Gallery</Gallery>
        <Compose>Compose</Compose>
        <Profile>Profile</Profile>
        <Home>Home</Home>
        <Mark>
          <Shape1>
            <Rectangle1></Rectangle1>
            <Rectangle></Rectangle>
          </Shape1>
          <Shape></Shape>
          <svg
            viewBox="0 0 100 15.05"
            style={{
              height: 15,
              width: 100,
              backgroundColor: "transparent",
              borderColor: "transparent"
            }}
          >
            <path
              strokeWidth={0}
              fill="rgba(0,0,0,1)"
              fillOpacity={1}
              strokeOpacity={1}
              d="M50.00 15.05 C77.61 15.05 100.00 11.68 100.00 7.53 C100.00 3.37 77.61 0.00 50.00 0.00 C22.39 0.00 0.00 3.37 0.00 7.53 C0.00 11.68 22.39 15.05 50.00 15.05 Z"
            ></path>
          </svg>
        </Mark>
        <Settings>
          <GroupStack>
            <Group>
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
                  fill="rgba(0,0,0,1)"
                  fillOpacity={1}
                  strokeOpacity={1}
                  d="M0.00 17.00 L10.00 0.00 L30.00 0.00 L40.00 17.00 L30.00 34.00 L10.00 34.00 L0.00 17.00 Z M20.00 22.00 C22.76 22.00 25.00 19.76 25.00 17.00 C25.00 14.24 22.76 12.00 20.00 12.00 C17.24 12.00 15.00 14.24 15.00 17.00 C15.00 19.76 17.24 22.00 20.00 22.00 Z"
                ></path>
              </svg>
            </Group>
            <Bounds></Bounds>
          </GroupStack>
        </Settings>
        <Close>
          <Group1Stack>
            <Group1>
              <Shape3>
                <Shape4></Shape4>
              </Shape3>
            </Group1>
            <Bounds1></Bounds1>
          </Group1Stack>
        </Close>
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
  background-color: rgba(242,198,178,1);
  flex-direction: column;
  display: flex;
`;

const Img = styled.div`
  height: 100%;
  width: 784px;
  opacity: 1;
  background-color: transparent;
  flex-direction: column;
  display: flex;
  margin-top: -8px;
  margin-left: -14px;
  background-image: url(${require("../assets/images/240dd6342b8092eab9b55bda41b91e87034795af.png")});
  background-size: cover;
`;

const Overlay = styled.div`
  height: 1334px;
  width: 750px;
  transform: rotate(-180.00deg);
  margin-top: 8px;
  margin-left: 14px;
  background-image: linear-gradient(0deg, rgba(255,189,184,1) 0%, rgba(255,189,184,0) 100%);
`;

const Logout = styled.div`
  position: absolute;
  top: 1134px;
  left: 110px;
  height: 120px;
  width: 530px;
  opacity: 1;
  flex-direction: column;
  display: flex;
`;

const Bg1 = styled.div`
  height: 120px;
  width: 530px;
  background-color: rgba(255,189,184,1);
  flex-direction: column;
  display: flex;
`;

const Logout1 = styled.span`
  font-family: Karla;
  opacity: 1;
  background-color: transparent;
  color: rgba(0,0,0,1);
  font-size: 26px;
  font-weight: 700;
  font-style: normal;
  margin-top: 44px;
  margin-left: 223px;
`;

const Stats = styled.span`
  font-family: Karla;
  position: absolute;
  top: 905px;
  left: 316px;
  opacity: 1;
  background-color: transparent;
  text-align: center;
  color: rgba(0,0,0,1);
  font-size: 50px;
  font-weight: 700;
  font-style: normal;
  letter-spacing: -2px;
  box-shadow: 0px 40px 40px  1px rgba(0,0,0,0.2) ;
`;

const Capture = styled.span`
  font-family: Karla;
  position: absolute;
  top: 796px;
  left: 287px;
  opacity: 1;
  background-color: transparent;
  text-align: center;
  color: rgba(0,0,0,1);
  font-size: 50px;
  font-weight: 700;
  font-style: normal;
  letter-spacing: -2px;
  box-shadow: 0px 40px 40px  1px rgba(0,0,0,0.2) ;
`;

const Gallery = styled.span`
  font-family: Karla;
  position: absolute;
  top: 687px;
  left: 299px;
  opacity: 1;
  background-color: transparent;
  text-align: center;
  color: rgba(0,0,0,1);
  font-size: 50px;
  font-weight: 700;
  font-style: normal;
  letter-spacing: -2px;
  box-shadow: 0px 40px 40px  1px rgba(0,0,0,0.2) ;
`;

const Compose = styled.span`
  font-family: Karla;
  position: absolute;
  top: 578px;
  left: 272px;
  opacity: 1;
  background-color: transparent;
  text-align: center;
  color: rgba(0,0,0,1);
  font-size: 50px;
  font-weight: 700;
  font-style: normal;
  letter-spacing: -2px;
  box-shadow: 0px 40px 40px  1px rgba(0,0,0,0.2) ;
`;

const Profile = styled.span`
  font-family: Karla;
  position: absolute;
  top: 469px;
  left: 304px;
  opacity: 1;
  background-color: transparent;
  text-align: center;
  color: rgba(0,0,0,1);
  font-size: 50px;
  font-weight: 700;
  font-style: normal;
  letter-spacing: -2px;
  box-shadow: 0px 40px 40px  1px rgba(0,0,0,0.2) ;
`;

const Home = styled.span`
  font-family: Karla;
  position: absolute;
  top: 360px;
  left: 311px;
  opacity: 1;
  background-color: transparent;
  text-align: center;
  color: rgba(0,0,0,1);
  font-size: 50px;
  font-weight: 700;
  font-style: normal;
  letter-spacing: -2px;
  box-shadow: 0px 40px 40px  1px rgba(0,0,0,0.2) ;
`;

const Mark = styled.div`
  position: absolute;
  top: 120px;
  left: 325px;
  height: 140px;
  width: 100px;
  opacity: 1;
  flex-direction: column;
  display: flex;
`;

const Shape1 = styled.div`
  height: 100px;
  width: 100px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: rgba(255,255,255,1);
  flex-direction: column;
  display: flex;
`;

const Rectangle1 = styled.div`
  height: 8px;
  width: 60px;
  opacity: 1;
  background-color: rgba(0,0,0,1);
  margin-top: 36px;
  margin-left: 20px;
`;

const Rectangle = styled.div`
  height: 8px;
  width: 30px;
  opacity: 1;
  background-color: rgba(0,0,0,1);
  margin-top: 12px;
  margin-left: 20px;
`;

const Shape = styled.div`
  height: 25px;
  width: 25px;
  transform: rotate(-180.00deg);
  opacity: 0.2;
  background-color: rgba(0,0,0,1);
`;

const Settings = styled.div`
  position: absolute;
  top: 58px;
  left: 676px;
  height: 50px;
  width: 50px;
  opacity: 1;
  flex-direction: column;
  display: flex;
`;

const Group = styled.div`
  position: absolute;
  top: 8px;
  left: 5px;
  height: 34px;
  width: 40px;
  opacity: 1;
  flex-direction: column;
  display: flex;
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

const Close = styled.div`
  position: absolute;
  top: 58px;
  left: 24px;
  height: 50px;
  width: 50px;
  opacity: 1;
  flex-direction: column;
  display: flex;
`;

const Group1 = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  height: 26px;
  width: 26px;
  opacity: 1;
  flex-direction: column;
  display: flex;
`;

const Shape3 = styled.div`
  height: 6px;
  width: 30px;
  transform: rotate(-225.00deg);
  background-color: rgba(0,0,0,1);
  flex-direction: column;
  display: flex;
  margin-top: 10px;
  margin-left: -2px;
`;

const Shape4 = styled.div`
  height: 6px;
  width: 30px;
  transform: rotate(-315.00deg);
  opacity: 1;
  background-color: rgba(0,0,0,1);
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

const BgStack = styled.div`
  width: 750px;
  height: 1334px;
  position: relative;
`;

export default Navigate;
