import React from 'react';
import Modal from "react-native-modal";
import styled from "styled-components/native";
import Button from '../Button';

type Props = {
  onYes(): void;
  onNo(): void;
  isVisible: boolean;
  title: string;
  subTitle: string;
  yesText?: string;
  noText?: string;
}

const ModalContent = styled.View`
  flex: 0.35;
  padding: 20px;
  justify-content: center;
  background-color: #fff;
  border-radius: 10px;
`;

const ModalTitle = styled.Text`
  color: #44346f;
  font-weight: 600;
  font-size: 20px;
`;

const ModalSubtitle = styled.Text`
  font-weight: 300;
  margin-top: 20px;
  line-height: 22px;
  padding: 20px;
`;

const Divider = styled.View`
  height: 20px;
`;

const ModalComponent: React.FC<Props> = ({
    onYes,
    onNo,
    isVisible,
    title,
    subTitle,
    yesText = 'Sim',
    noText = 'Não',
  }) => (
    <Modal isVisible={isVisible}>
      <ModalContent>
        <ModalTitle accessibilityLabel={title}>{title}</ModalTitle>
        <ModalSubtitle accessibilityLabel={subTitle}>{subTitle}</ModalSubtitle>
        <Button onPress={onYes}>{yesText}</Button>
        <Divider />
        <Button onPress={onNo}>{noText}</Button>
      </ModalContent>
    </Modal>
  );

export default ModalComponent;