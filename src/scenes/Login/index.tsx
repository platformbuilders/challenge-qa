import styled from "styled-components/native";
import { NightThunderstorm } from "../../assets";

export default function App() {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image source={NightThunderstorm} />
      </ImageWrapper>
      <Paragraph>Open up App.tsx to start working on your app!</Paragraph>
    </Wrapper>
  );
}

const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: #af7dab;
`;

const ImageWrapper = styled.View``;

const Image = styled.Image`
  width: 200px;
  height: 200px;
`;

const Paragraph = styled.Text`
  color: white;
`;
