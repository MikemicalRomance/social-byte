import React, { Component } from "react";
import styled, { css } from "styled-components";

function Walkthrough(props) {
  return (
    <Container>
      <BgStack>
        <Bg>
          <Mask>
            <ImgStack>
              <Img>
                <Overlay1></Overlay1>
              </Img>
              <Overlay></Overlay>
            </ImgStack>
          </Mask>
        </Bg>
        <Skip>Skip</Skip>
        <StartTour>
          <Bg1Stack>
            <Bg1>
              <Mask1></Mask1>
            </Bg1>
            <StartTour1>Start Tour</StartTour1>
            <Go>
              <GroupStack>
                <Group>
                  <svg
                    viewBox="0 0 14 20"
                    style={{
                      height: 20,
                      width: 14,
                      backgroundColor: "transparent",
                      borderColor: "transparent"
                    }}
                  >
                    <path
                      strokeWidth={0}
                      fill="rgba(0,0,0,1)"
                      fillOpacity={1}
                      strokeOpacity={1}
                      d="M0.00 0.00 L14.00 10.00 L0.00 20.00 Z"
                    ></path>
                  </svg>
                </Group>
                <Bounds></Bounds>
              </GroupStack>
            </Go>
          </Bg1Stack>
        </StartTour>
        <Paragraph>See what your friends are up to anywhere you go.</Paragraph>
        <HiTodd>Hi, Todd!</HiTodd>
        <Avatar>
          <Mask2Stack>
            <Mask2>
              <Img1
                src={require("../assets/images/41f198f08d86d8aadaa5f92b6bb88ded45a65fb8.png")}
              ></Img1>
            </Mask2>
            <Img2
              src={require("../assets/images/41f198f08d86d8aadaa5f92b6bb88ded45a65fb8.png")}
            ></Img2>
          </Mask2Stack>
        </Avatar>
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
  background-color: rgba(225,181,162,1);
  flex-direction: column;
  display: flex;
`;

const Img = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 1359px;
  width: 779px;
  opacity: 1;
  background-color: transparent;
  flex-direction: column;
  display: flex;
  background-image: url(${require("../assets/images/7f4982f707f04d4b8c91a9702f9c8dced4b8a95b.png")});
  background-size: cover;
`;

const Overlay1 = styled.div`
  height: 1334px;
  width: 750px;
  transform: rotate(-180.00deg);
  margin-left: 11px;
  background-image: linear-gradient(0deg, rgba(255,189,184,1) 0%, rgba(255,189,184,0) 100%);
`;

const Overlay = styled.div`
  position: absolute;
  top: 1134px;
  left: 11px;
  height: 200px;
  width: 750px;
  background-image: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
`;

const ImgStack = styled.div`
  width: 779px;
  height: 1359px;
  margin-left: -11px;
  position: relative;
`;

const Skip = styled.span`
  font-family: Karla;
  position: absolute;
  top: 1243px;
  left: 347px;
  opacity: 1;
  background-color: transparent;
  text-align: center;
  color: rgba(255,255,255,1);
  font-size: 26px;
  font-weight: 700;
  font-style: normal;
`;

const StartTour = styled.div`
  position: absolute;
  top: 1074px;
  left: 110px;
  height: 120px;
  width: 530px;
  opacity: 1;
  flex-direction: column;
  display: flex;
`;

const Bg1 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 120px;
  width: 530px;
  opacity: 1;
  flex-direction: column;
  display: flex;
`;

const Mask1 = styled.div`
  height: 120px;
  width: 530px;
  opacity: 1;
  overflow: hidden;
  background-color: rgba(255,189,184,1);
`;

const StartTour1 = styled.span`
  font-family: Karla;
  position: absolute;
  top: 43px;
  left: 50px;
  opacity: 1;
  background-color: transparent;
  color: rgba(0,0,0,1);
  font-size: 26px;
  font-weight: 700;
  font-style: normal;
`;

const Go = styled.div`
  position: absolute;
  top: 35px;
  left: 430px;
  height: 50px;
  width: 50px;
  opacity: 1;
  flex-direction: column;
  display: flex;
`;

const Group = styled.div`
  position: absolute;
  top: 15px;
  left: 18px;
  height: 20px;
  width: 14px;
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

const Bg1Stack = styled.div`
  width: 530px;
  height: 120px;
  position: relative;
`;

const Paragraph = styled.span`
  font-family: Karla;
  position: absolute;
  top: 660px;
  left: 125px;
  height: 80px;
  width: 500px;
  opacity: 1;
  background-color: transparent;
  line-height: 40px;
  text-align: center;
  color: rgba(0,0,0,1);
  font-size: 30px;
  font-weight: 400;
  font-style: normal;
`;

const HiTodd = styled.span`
  font-family: Karla;
  position: absolute;
  top: 510px;
  left: 188px;
  opacity: 1;
  background-color: transparent;
  line-height: 90px;
  text-align: center;
  color: rgba(0,0,0,1);
  font-size: 100px;
  font-weight: 700;
  font-style: normal;
  letter-spacing: -4px;
`;

const Avatar = styled.div`
  position: absolute;
  top: 250px;
  left: 275px;
  height: 200px;
  width: 200px;
  opacity: 1;
  flex-direction: column;
  display: flex;
  box-shadow: 0px 40px 50px  1px rgba(0,0,0,0.2) ;
`;

const Mask2 = styled.div`
  position: absolute;
  top: 16px;
  left: 17px;
  height: 200px;
  width: 200px;
  opacity: 1;
  overflow: hidden;
  background-color: rgba(0,0,0,1);
  flex-direction: column;
  display: flex;
`;

const Img1 = styled.img`
  height: 100%;
  width: 266px;
  opacity: 1;
  background-color: transparent;
  margin-top: -16px;
  margin-left: -17px;
  object-fit: cover;
`;

const Img2 = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 253px;
  width: 266px;
  opacity: 1;
  background-color: transparent;
  object-fit: cover;
`;

const Mask2Stack = styled.div`
  width: 266px;
  height: 253px;
  margin-top: -16px;
  margin-left: -17px;
  position: relative;
`;

const BgStack = styled.div`
  width: 750px;
  height: 1334px;
  position: relative;
`;

export default Walkthrough;
