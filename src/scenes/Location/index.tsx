import { Alert } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ModalSheet, Counter, Modal } from "../../components";
import { useState } from "react";

export default function LocationScene() {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const onLogin = async () => {
    await AsyncStorage.setItem("token", "123");
    navigation.navigate("STACK_PRIVATE");
  }

  return (
    <Wrapper>
      <Title>Cadastro</Title>
      <ModalSheet
        header={<Counter />}
        title={`Localização`}
        paragraph={`Para entregarmos informações mais precisas sobre o seu micro-clima, precisamos utilizar a sua localização automática.`}
        mainButtonText={`LOCALIZAÇÃO AUTOMÁTICA`}
        onMainButtonPress={() => setModalVisible(true)}
      />
      <Modal
        isVisible={modalVisible}
        title="Compartilhar a localização"
        subTitle="Blablabla, enquanto usa o app. Lorem ipsum dolor sit amet."
        onNo={() => setModalVisible(false)}
        onYes={() => {
            setModalVisible(false);
            onLogin();
          }
        }
      />
    </Wrapper>
  );
}

const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: #ded3ef;
`;

const Title = styled.Text`
  padding-horizontal: 5px;
  color: #453773;
  font-size: 30px;
  font-weight: 600;
  z-index: 10;
`;
