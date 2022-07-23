import { Alert } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { ModalSheet, Picker } from "../../components";

const dates = [
  {
    label: "14:00",
    value: "14:00",
  },
  {
    label: "14:30",
    value: "14:30",
  },
];

export default function HomeScene() {
  const navigation = useNavigation();
  const onConfirmLocation = () => {
    Alert.alert(
      "Compartilhar a localização",
      "Blablabla, enquanto usa o app. Lorem ipsum dolor sit amet.",
      [
        { text: "Não", style: "cancel" },
        { text: "Sim", onPress: () => navigation.navigate("HOME") },
      ]
    );
  };
  return (
    <Wrapper>
      <Title>Sowe</Title>
      <ModalSheet
        secondaryButtonText={new Date().toLocaleString()}
        onSecondaryButtonPress={onConfirmLocation}
      >
        <Picker horizontal data={dates} selected={"14:30"} />
      </ModalSheet>
    </Wrapper>
  );
}

const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: #e8e1f9;
`;

const HeaderWrapper = styled.View``;

const Title = styled.Text`
  padding-horizontal: 25px;
  padding-top: 25px;
  color: #453773;
  font-size: 42px;
  font-weight: 800;
  z-index: 10;
`;
