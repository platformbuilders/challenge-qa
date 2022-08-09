import React from "react";
import styled from "styled-components/native";
import SButton from "../Button";

type Props = {
  title?: string;
  paragraph?: string;
  mainButtonText?: string;
  secondaryButtonText?: string;
  onMainButtonPress?: () => void;
  onSecondaryButtonPress?: () => void;
  children?: React.ReactNode;
  header?: React.ReactNode;
};

export default function ModalSheet({
  title,
  paragraph,
  mainButtonText,
  secondaryButtonText,
  onMainButtonPress,
  onSecondaryButtonPress,
  header,
  children,
}: Props) {
  return (
    <Wrapper behavior="padding">
      {header}
      {title && <Title accessibilityLabel = {title}>{title}</Title>}
      {paragraph && <Paragraph accessibilityLabel = {paragraph}>{paragraph}</Paragraph>}
      {children && <ChildrenWrapper>{children}</ChildrenWrapper>}
      {(mainButtonText || secondaryButtonText) && (
        <ButtonRows>
          {mainButtonText && (
            <Button onPress={onMainButtonPress}>{mainButtonText}</Button>
          )}
          {secondaryButtonText && (
            <SecondaryButton onPress={onSecondaryButtonPress}>
              {secondaryButtonText}
            </SecondaryButton>
          )}
        </ButtonRows>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.KeyboardAvoidingView`
  background-color: #ffffff;
  position: absolute;
  bottom: 0;
  align-self: flex-end;
  border-radius: 15px;
  width: 100%;
  padding-vertical: 26px;
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
  line-height: 22px;
`;

const Button = styled(SButton)`
  flex: 1;
`;

const ButtonRows = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

const ChildrenWrapper = styled.View`
  margin-vertical: 20px;
`;

const SecondaryButton = styled(Button).attrs({
  textStyle: {
    color: "#6238CF",
  },
})`
  background-color: #efe9fe;
`;
