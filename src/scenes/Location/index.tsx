import { Alert } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ModalSheet, Counter } from "../../components";

export default function LocationScene() {
  const navigation = useNavigation();

  const onLogin = async () => {
    await AsyncStorage.setItem("token", "123");
    navigation.navigate("STACK_PRIVATE");
  }

  const onConfirmLocation = () => {
    Alert.alert(
      "Compartilhar a localização",
      "Blablabla, enquanto usa o app. Lorem ipsum dolor sit amet.",
      [
        { text: "Não", style: "cancel" },
        { text: "Sim", onPress: onLogin },
      ]
    );
  };
  return (
    <Wrapper>
      <Title>Cadastro</Title>
      <ModalSheet
        header={<Counter />}
        title={`Localização`}
        paragraph={`Para entregarmos informações mais precisas sobre o seu micro-clima, precisamos utilizar a sua localização automática.`}
        mainButtonText={`LOCALIZAÇÃO AUTOMÁTICA`}
        onMainButtonPress={onConfirmLocation}
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
