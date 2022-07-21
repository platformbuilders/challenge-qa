import styled from "styled-components/native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ModalSheet, TextInput } from "../../components";

export default function PhoneScene() {
  const navigation = useNavigation();
  const [phone, setPhone] = useState("");
  const onConfirmPhone = () => {
    navigation.navigate("HOME");
  };
  return (
    <Wrapper>
      <Title>Cadastro</Title>
      <ModalSheet
        title={`Celular`}
        paragraph={`Você receberá um código de confirmação no número de telefone celular informado.`}
      >
        <TextInput
          maxLength={11}
          isValid={phone.length === 11}
          onChangeText={setPhone}
          onConfirm={phone.length === 11 && onConfirmPhone}
          autoFocus
        />
      </ModalSheet>
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
