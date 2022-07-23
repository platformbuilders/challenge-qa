import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ModalSheet } from "../../components";
import { NightThunderstorm } from "../../assets";

export default function LoginScene() {
  const navigation = useNavigation();

  const onCadastrar = () => {
    navigation.navigate("PHONE");
  };

  const onEntrar = async () => {
    await AsyncStorage.setItem("token", "123");
    navigation.navigate("STACK_PRIVATE");
  };

  return (
    <Wrapper>
      <ImageWrapper>
        <Image source={NightThunderstorm} />
      </ImageWrapper>
      <ModalSheet
        title={`Explore climas locais socialmente, com o Sowe`}
        paragraph={`Saiba quantas pessoas próximas a você reportaram chuva e receba um aviso antes de sair de casa.`}
        mainButtonText={`Cadastrar`}
        onMainButtonPress={onCadastrar}
        onSecondaryButtonPress={onEntrar}
        secondaryButtonText={`Entrar`}
      />
    </Wrapper>
  );
}

const Wrapper = styled.SafeAreaView`
  align-items: center;
  flex: 1;
  background-color: #af7dab;
`;

const ImageWrapper = styled.View`
  flex: 0.7;
  justify-content: center;
`;

const Image = styled.Image`
  width: 200px;
  height: 200px;
`;
