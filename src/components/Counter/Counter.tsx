import React from "react";
import styled from "styled-components/native";
import { TextInput, TextInputProps } from "react-native";

export default function Counter() {
  return (
    <Wrapper>
      <ColoredDot />
      <Dot />
      <Dot />
      <Dot />
    </Wrapper>
  );
}

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-bottom: 5px;
`;

const Dot = styled.View`
  width: 15px;
  height: 7px;
  border-radius: 10px;
  background-color: #eceaf0;
  margin-right: 4px;
`;

const ColoredDot = styled(Dot)`
  width: 30px;
  background-color: #662ffe;
`;
