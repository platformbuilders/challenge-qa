import React from "react";
import styled from "styled-components/native";
import SButton from "../Button/Button";

type Props = {
  title: string;
  paragraph: string;
};

export default function ModalSheet({ title, paragraph }: Props) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Paragraph>{paragraph}</Paragraph>
      <ButtonRows>
        <Button onPress={() => null}>Cadastrar</Button>
        <AlternativeButton onPress={() => null}>Entrar</AlternativeButton>
      </ButtonRows>
    </Wrapper>
  );
}

const Wrapper = styled.View`
  background-color: #ffffff;
  position: absolute;
  bottom: 0;
  align-self: flex-end;
  border-radius: 10px;
  width: 100%;
  padding-vertical: 16px;
  padding-horizontal: 22px;
`;

const Title = styled.Text`
  color: #44346f;
  font-weight: 600;
  font-size: 20px;
`;

const Paragraph = styled.Text`
  font-weight: 300;
  margin-top: 20px;
`;

const Button = styled(SButton)``;

const ButtonRows = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

const AlternativeButton = styled(SButton).attrs({
  textStyle: {
    color: "#6238CF",
  },
})`
  background-color: #efe9fe;
`;
