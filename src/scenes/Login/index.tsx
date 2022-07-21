import { ModalSheet } from "../../components";
import styled from "styled-components/native";
import { NightThunderstorm } from "../../assets";

export default function App() {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image source={NightThunderstorm} />
      </ImageWrapper>
      <ModalSheet
        title={`Explore climas locais socialmente, com o Sowe`}
        paragraph={`Saiba quantas pessoas próximas a você reportaram chuva e receba um aviso antes de sair de casa.`}
      />
    </Wrapper>
  );
}

const Wrapper = styled.View`
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

const Paragraph = styled.Text`
  color: white;
`;
