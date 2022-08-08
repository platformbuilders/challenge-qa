import { Alert } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { ModalSheet, Picker, Header, ImageWrapper, Modal, WindWrapper } from "../../components";
import { useState } from "react";

const dates = [];

const generateDates = () => {
  const hoursNow = new Date().getHours();
  const diff = 4;
  for (let i = hoursNow - diff; i < hoursNow + diff; i++) {
    dates.push({
      label: `${i}:00`,
      value: `${i}:00`,
    });
  }
};

generateDates();

export default function HomeScene() {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const hoursNow = new Date().getHours();
  return (
    <Wrapper>
      <Header />
      <ImageWrapper />
      <WindWrapper />
      <ModalSheet
        secondaryButtonText={new Date().toLocaleDateString("pt-BR", {
          dateStyle: "long",
        })}
        onSecondaryButtonPress={() => setModalVisible(true)}
      >
        <Picker horizontal data={dates} selected={`${hoursNow}:00`} />
      </ModalSheet>
      <Modal
        isVisible={modalVisible}
        title="Compartilhar a localização"
        subTitle="Blablabla, enquanto usa o app. Lorem ipsum dolor sit amet."
        onNo={() => setModalVisible(false)}
        onYes={() => {
            setModalVisible(false);
            navigation.navigate("HOME");
          }
        }
      />
    </Wrapper>
  );
}

const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: #e8e1f9;
`;
