import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";

export default function Header() {
  const navigation = useNavigation();

  const onPress = () => navigation.navigate("STACK_PUBLIC");

  return (
    <Wrapper>
      <Title accessibilityLabel="Sowe">Sowe</Title>
      <LocationWrapper>
        <Text accessibilityLabel="Bairro do Clima Bom">Bairro do Clima Bom</Text>
        <BoldText accessibilityLabel="Sorocaba, SP">Sorocaba, SP</BoldText>
        <Link onPress={onPress}>
          <LinkText accessibilityLabel="Botão Sair">Sair</LinkText>
        </Link>
      </LocationWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 20px;
`;

const LocationWrapper = styled.View`
  align-items: flex-end;
`;

const Title = styled.Text`
  padding-horizontal: 25px;
  color: #453773;
  font-size: 42px;
  font-weight: 800;
`;

const Text = styled.Text`
  color: #453773;
`;

const BoldText = styled(Text)`
  font-weight: bold;
`;

const Link = styled.TouchableOpacity``;

const LinkText = styled(Text)`
  padding-top: 10px;
  font-size: 12px;
`;