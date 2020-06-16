import React, { Component } from "react";
import styled, { css } from "styled-components";

function Login(props) {
  return (
    <Container>
      <BgStack>
        <Bg>
          <Mask>
            <Shape></Shape>
          </Mask>
        </Bg>
        <Group>
          <Bg1>
            <CreateAccountRow>
              <CreateAccount>Create Account</CreateAccount>
              <svg
                viewBox="-1 -1 29 47.3"
                style={{
                  height: 47,
                  width: 29,
                  backgroundColor: "transparent",
                  borderColor: "transparent",
                  marginLeft: 118
                }}
              >
                <path
                  strokeWidth={2}
                  fill="transparent"
                  stroke="rgba(255,255,255,1)"
                  fillOpacity={1}
                  strokeOpacity={1}
                  d="M26.00 1.00 L1.00 44.30 "
                ></path>
              </svg>
              <ForgotPassword>Forgot Password</ForgotPassword>
            </CreateAccountRow>
          </Bg1>
        </Group>
        <Form>
          <UsernameStack>
            <Username>
              <Group3Stack>
                <Group3>
                  <svg
                    viewBox="0 0 14 14"
                    style={{
                      height: 14,
                      width: 14,
                      backgroundColor: "transparent",
                      borderColor: "transparent",
                      marginLeft: 9
                    }}
                  >
                    <path
                      strokeWidth={0}
                      fill="rgba(0,0,0,1)"
                      fillOpacity={1}
                      strokeOpacity={1}
                      d="M7.00 14.00 C10.85 14.00 14.00 10.85 14.00 7.00 C14.00 3.15 10.85 0.00 7.00 0.00 C3.15 0.00 0.00 3.15 0.00 7.00 C0.00 10.85 3.15 14.00 7.00 14.00 Z"
                    ></path>
                  </svg>
                  <svg
                    viewBox="0 0 32 12"
                    style={{
                      height: 12,
                      width: 32,
                      backgroundColor: "transparent",
                      borderColor: "transparent",
                      marginTop: 4
                    }}
                  >
                    <path
                      strokeWidth={0}
                      fill="rgba(0,0,0,1)"
                      fillOpacity={1}
                      strokeOpacity={1}
                      d="M32.00 12.00 C32.00 3.90 21.40 0.00 16.00 0.00 C10.60 0.00 0.00 3.90 0.00 12.00 Z"
                    ></path>
                  </svg>
                </Group3>
                <Bounds1></Bounds1>
              </Group3Stack>
            </Username>
            <Group4>
              <Username1>USERNAME</Username1>
              <IsabelAppCom>isabel@app.com</IsabelAppCom>
              <svg
                viewBox="-1 -1 554 6"
                style={{
                  height: 6,
                  width: 554,
                  backgroundColor: "transparent",
                  borderColor: "transparent",
                  marginTop: 24,
                  marginLeft: -1
                }}
              >
                <path
                  strokeWidth={2}
                  fill="transparent"
                  stroke="rgba(0,0,0,1)"
                  fillOpacity={0.5}
                  strokeOpacity={0.5}
                  d="M1.00 2.00 L551.00 2.00 "
                ></path>
              </svg>
            </Group4>
          </UsernameStack>
          <PasswordStack>
            <Password>
              <Group1Stack>
                <Group1>
                  <PathStack>
                    <svg
                      viewBox="0 0 30 22"
                      style={{
                        position: "absolute",
                        height: 22,
                        width: 30,
                        top: 14,
                        left: 0,
                        backgroundColor: "transparent",
                        borderColor: "transparent"
                      }}
                    >
                      <path
                        strokeWidth={0}
                        fill="rgba(0,0,0,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M0.00 0.00 L30.00 0.00 L30.00 22.00 L0.00 22.00 Z M14.73 14.47 C16.80 14.47 18.47 12.80 18.47 10.73 C18.47 8.67 16.80 7.00 14.73 7.00 C12.67 7.00 11.00 8.67 11.00 10.73 C11.00 12.80 12.67 14.47 14.73 14.47 Z"
                      ></path>
                    </svg>
                    <svg
                      viewBox="-3 -3 36 36"
                      style={{
                        position: "absolute",
                        height: 36,
                        width: 36,
                        top: 0,
                        left: 0,
                        backgroundColor: "transparent",
                        borderColor: "transparent"
                      }}
                    >
                      <path
                        strokeWidth={6}
                        fill="transparent"
                        stroke="rgba(0,0,0,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M3.00 27.00 L3.00 15.00 C3.00 8.21 8.38 3.00 15.00 3.00 C21.62 3.00 27.00 8.21 27.00 15.00 L27.00 27.00 "
                      ></path>
                    </svg>
                  </PathStack>
                </Group1>
                <Bounds></Bounds>
              </Group1Stack>
            </Password>
            <Group2>
              <Password1>PASSWORD</Password1>
              <Style>
                <Style8Row>
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
                      fill="rgba(0,0,0,1)"
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
                      marginLeft: 10
                    }}
                  >
                    <path
                      strokeWidth={0}
                      fill="rgba(0,0,0,1)"
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
                      marginLeft: 10
                    }}
                  >
                    <path
                      strokeWidth={0}
                      fill="rgba(0,0,0,1)"
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
                      marginLeft: 10
                    }}
                  >
                    <path
                      strokeWidth={0}
                      fill="rgba(0,0,0,1)"
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
                      marginLeft: 10
                    }}
                  >
                    <path
                      strokeWidth={0}
                      fill="rgba(0,0,0,1)"
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
                      marginLeft: 10
                    }}
                  >
                    <path
                      strokeWidth={0}
                      fill="rgba(0,0,0,1)"
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
                      marginLeft: 10
                    }}
                  >
                    <path
                      strokeWidth={0}
                      fill="rgba(0,0,0,1)"
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
                      marginLeft: 10
                    }}
                  >
                    <path
                      strokeWidth={0}
                      fill="rgba(0,0,0,1)"
                      fillOpacity={1}
                      strokeOpacity={1}
                      d="M5.00 10.00 C7.76 10.00 10.00 7.76 10.00 5.00 C10.00 2.24 7.76 0.00 5.00 0.00 C2.24 0.00 0.00 2.24 0.00 5.00 C0.00 7.76 2.24 10.00 5.00 10.00 Z"
                    ></path>
                  </svg>
                </Style8Row>
              </Style>
              <svg
                viewBox="-1 -1 554 6"
                style={{
                  height: 6,
                  width: 554,
                  backgroundColor: "transparent",
                  borderColor: "transparent",
                  marginTop: 31,
                  marginLeft: -1
                }}
              >
                <path
                  strokeWidth={2}
                  fill="transparent"
                  stroke="rgba(0,0,0,1)"
                  fillOpacity={0.5}
                  strokeOpacity={0.5}
                  d="M1.00 2.00 L551.00 2.00 "
                ></path>
              </svg>
            </Group2>
          </PasswordStack>
          <GetStarted>
            <Bg2>
              <GetStarted1Row>
                <GetStarted1>Get Started</GetStarted1>
                <Next>
                  <Line1Stack>
                    <svg
                      viewBox="-1 -1 54 6"
                      style={{
                        position: "absolute",
                        height: 6,
                        width: 54,
                        top: 4,
                        left: 0,
                        backgroundColor: "transparent",
                        borderColor: "transparent"
                      }}
                    >
                      <path
                        strokeWidth={2}
                        fill="transparent"
                        stroke="rgba(255,255,255,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M1.00 2.00 L51.00 2.00 "
                      ></path>
                    </svg>
                    <svg
                      viewBox="-1 -1 14 14"
                      style={{
                        position: "absolute",
                        height: 14,
                        width: 14,
                        top: 0,
                        left: 40,
                        backgroundColor: "transparent",
                        borderColor: "transparent",
                        transform: "rotate(undefined)"
                      }}
                    >
                      <path
                        strokeWidth={2}
                        fill="transparent"
                        stroke="rgba(255,255,255,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M1.00 1.00 L11.00 1.00 L11.00 11.00 "
                      ></path>
                    </svg>
                  </Line1Stack>
                </Next>
              </GetStarted1Row>
            </Bg2>
          </GetStarted>
        </Form>
        <Mark>
          <Shape6>
            <Rectangle1></Rectangle1>
            <Rectangle></Rectangle>
          </Shape6>
          <Shape5></Shape5>
          <svg
            viewBox="0 0 200 30"
            style={{
              height: 30,
              width: 200,
              backgroundColor: "transparent",
              borderColor: "transparent",
              marginTop: 11
            }}
          >
            <path
              strokeWidth={0}
              fill="rgba(0,0,0,1)"
              fillOpacity={1}
              strokeOpacity={1}
              d="M100.00 30.00 C155.23 30.00 200.00 23.28 200.00 15.00 C200.00 6.72 155.23 0.00 100.00 0.00 C44.77 0.00 0.00 6.72 0.00 15.00 C0.00 23.28 44.77 30.00 100.00 30.00 Z"
            ></path>
          </svg>
        </Mark>
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
  background-color: rgba(249,235,89,1);
  flex-direction: column;
  display: flex;
`;

const Shape = styled.div`
  height: 1294px;
  width: 1294px;
  opacity: 0.05;
  background-color: rgba(0,0,0,1);
  margin-top: 40px;
`;

const Group = styled.div`
  position: absolute;
  top: 1194px;
  left: 0px;
  height: 140px;
  width: 750px;
  opacity: 1;
  flex-direction: column;
  display: flex;
`;

const Bg1 = styled.div`
  height: 140px;
  width: 750px;
  background-color: rgba(0,0,0,1);
  flex-direction: row;
  display: flex;
`;

const CreateAccount = styled.span`
  font-family: Karla;
  opacity: 1;
  background-color: transparent;
  color: rgba(255,255,255,1);
  font-size: 22px;
  font-weight: 700;
  font-style: italic;
  margin-top: 9px;
`;

const ForgotPassword = styled.span`
  font-family: Karla;
  opacity: 1;
  background-color: transparent;
  text-align: right;
  color: rgba(255,255,255,1);
  font-size: 22px;
  font-weight: 700;
  font-style: italic;
  margin-left: 102px;
  margin-top: 9px;
`;

const CreateAccountRow = styled.div`
  height: 47px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 101px;
  margin-left: 100px;
  margin-top: 47px;
`;

const Form = styled.div`
  position: absolute;
  top: 694px;
  left: 0px;
  height: 500px;
  width: 750px;
  opacity: 1;
  flex-direction: column;
  display: flex;
`;

const Username = styled.div`
  position: absolute;
  top: 0px;
  left: 490px;
  height: 50px;
  width: 50px;
  opacity: 1;
  flex-direction: column;
  display: flex;
`;

const Group3 = styled.div`
  position: absolute;
  top: 10px;
  left: 9px;
  height: 30px;
  width: 32px;
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

const Group3Stack = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
`;

const Group4 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 105px;
  width: 550px;
  opacity: 1;
  flex-direction: column;
  display: flex;
`;

const Username1 = styled.span`
  font-family: Karla;
  opacity: 0.5;
  background-color: transparent;
  color: rgba(0,0,0,1);
  font-size: 20px;
  font-weight: 700;
  font-style: normal;
  letter-spacing: 2px;
`;

const IsabelAppCom = styled.span`
  font-family: Karla;
  opacity: 1;
  background-color: transparent;
  color: rgba(0,0,0,1);
  font-size: 28px;
  font-weight: 400;
  font-style: normal;
  margin-top: 22px;
`;

const UsernameStack = styled.div`
  width: 550px;
  height: 105px;
  margin-left: 100px;
  position: relative;
`;

const Password = styled.div`
  position: absolute;
  top: 0px;
  left: 490px;
  height: 50px;
  width: 50px;
  opacity: 1;
  flex-direction: column;
  display: flex;
`;

const Group1 = styled.div`
  position: absolute;
  top: 11px;
  left: 10px;
  height: 33px;
  width: 30px;
  opacity: 1;
  flex-direction: column;
  display: flex;
`;

const PathStack = styled.div`
  width: 36px;
  height: 36px;
  margin-top: -3px;
  position: relative;
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

const Group1Stack = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
`;

const Group2 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 105px;
  width: 550px;
  opacity: 1;
  flex-direction: column;
  display: flex;
`;

const Password1 = styled.span`
  font-family: Karla;
  opacity: 0.5;
  background-color: transparent;
  color: rgba(0,0,0,1);
  font-size: 20px;
  font-weight: 700;
  font-style: normal;
  letter-spacing: 2px;
`;

const Style = styled.div`
  height: 10px;
  width: 150px;
  opacity: 1;
  flex-direction: row;
  display: flex;
  margin-top: 38px;
`;

const Style8Row = styled.div`
  height: 10px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
`;

const PasswordStack = styled.div`
  width: 550px;
  height: 105px;
  margin-top: 60px;
  margin-left: 100px;
  position: relative;
`;

const GetStarted = styled.div`
  height: 140px;
  width: 750px;
  opacity: 1;
  flex-direction: column;
  display: flex;
  margin-top: 90px;
`;

const Bg2 = styled.div`
  height: 140px;
  width: 750px;
  background-color: rgba(0,160,255,1);
  flex-direction: row;
  display: flex;
`;

const GetStarted1 = styled.span`
  font-family: Karla;
  opacity: 1;
  background-color: transparent;
  color: rgba(255,255,255,1);
  font-size: 26px;
  font-weight: 700;
  font-style: normal;
`;

const Next = styled.div`
  height: 15px;
  width: 53px;
  opacity: 1;
  flex-direction: column;
  display: flex;
  margin-left: 356px;
  margin-top: 9px;
`;

const Line1Stack = styled.div`
  width: 54px;
  height: 14px;
  margin-top: 1px;
  margin-left: -1px;
  position: relative;
`;

const GetStarted1Row = styled.div`
  height: 31px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 100px;
  margin-left: 100px;
  margin-top: 54px;
`;

const Mark = styled.div`
  position: absolute;
  top: 210px;
  left: 275px;
  height: 290px;
  width: 200px;
  opacity: 1;
  flex-direction: column;
  display: flex;
`;

const Shape6 = styled.div`
  height: 199px;
  width: 200px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: rgba(0,0,0,1);
  flex-direction: column;
  display: flex;
`;

const Rectangle1 = styled.div`
  height: 16px;
  width: 120px;
  opacity: 1;
  background-color: rgba(255,255,255,1);
  margin-top: 72px;
  margin-left: 40px;
`;

const Rectangle = styled.div`
  height: 16px;
  width: 60px;
  opacity: 1;
  background-color: rgba(255,255,255,1);
  margin-top: 23px;
  margin-left: 40px;
`;

const Shape5 = styled.div`
  height: 50px;
  width: 50px;
  transform: rotate(-180.00deg);
  opacity: 0.5;
  background-color: rgba(0,0,0,1);
`;

const BgStack = styled.div`
  width: 750px;
  height: 1334px;
  position: relative;
`;

export default Login;
