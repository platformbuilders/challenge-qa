import styled from "styled-components/native";
import { NightThunderstorm } from "../../assets";

export default function App() {
  return (
    <Wrapper>
      <Text>Bairro do Clima Bom</Text>
      <BoldText>Sorocaba, SP</BoldText>
    </Wrapper>
  );
}

const Wrapper = styled.View`
  align-items: center;
  justify-content: space-between;
  width: 80%;
`;

const Text = styled.Text`
  justify-content: right;
`;

const BoldText = styled(Text)`
  color: #
`;

const Image = styled.Image`
  width: 200px;
  height: 200px;
`;
