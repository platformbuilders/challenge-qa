import styled from "styled-components/native";

export default function App() {
  return (
    <Wrapper>
      <Title>Sowe</Title>
      <LocationWrapper>
        <Text>Bairro do Clima Bom</Text>
        <BoldText>Sorocaba, SP</BoldText>
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
