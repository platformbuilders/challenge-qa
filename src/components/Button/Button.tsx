import React from "react";
import styled from "styled-components/native";

type Props = {
  children: React.ReactNode;
  onPress: () => void;
  textStyle?: object;
};

export default function Button({
  children,
  onPress,
  textStyle,
  ...rest
}: Props) {
  return (
    <Wrapper onPress={onPress} {...rest}>
      <Text style={textStyle}>{children}</Text>
    </Wrapper>
  );
}

const Wrapper = styled.TouchableOpacity`
  border-radius: 50px;
  background-color: #662ffe;
  width: 140px;
  padding-vertical: 15px;
  align-items: center;
`;

const Text = styled.Text`
  color: white;
`;
