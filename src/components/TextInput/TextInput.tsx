import React from "react";
import styled from "styled-components/native";
import { TextInput, TextInputProps } from "react-native";

type Props = {
  onConfirm: () => void;
  isValid?: boolean;
} & TextInputProps;

export default function CustomTextInput({
  onConfirm,
  isValid = true,
  ...rest
}: Props) {
  return (
    <Wrapper>
      <StyledTextInput {...rest} />
      <ConfirmButton onPress={onConfirm} disabled={!isValid}>
        <ConfirmButtonText> {">"} </ConfirmButtonText>
      </ConfirmButton>
    </Wrapper>
  );
}

const Wrapper = styled.View`
  border-radius: 50px;
  width: 100%;
  background-color: #ebe8f1;
  padding-vertical: 8px;
  padding-horizontal: 15px;
  flex-direction: row;
  flex: 1;
  min-height: 50px;
`;

const ConfirmButtonText = styled.Text`
  color: white;
  font-size: 20px;
  text-align: center;
  font-weight: 600;
  top: -2px;
  left: -2px;
`;

const StyledTextInput = styled(TextInput)`
  flex: 1;
`;

const ConfirmButton = styled.TouchableOpacity`
  background-color: #662ffe;
  border-radius: 50px;
  width: 35px;
  height: 35px;
  justify-content: center;
`;
