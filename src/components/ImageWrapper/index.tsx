import styled from "styled-components/native";
import { NightThunderstorm } from "../../assets";

export default function ImageComponent() {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image source={NightThunderstorm} />
      </ImageWrapper>
      <TextWrapper>
        <BigText accessibilityLabel="Temperatura atual 28˚">28˚</BigText>
        <SmallTextWrapper accessibilityLabel="Baixa 18˚">
          <MediumText>18˚</MediumText>
          <SmallText>BAIXA</SmallText>
        </SmallTextWrapper>
        <SmallTextWrapper accessibilityLabel="Alta 31˚">
          <MediumText>31˚</MediumText>
          <SmallText>ALTA</SmallText>
        </SmallTextWrapper>
      </TextWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.View`
  align-items: center;
  background-color: #FFFFFF75;
  margin: 5%;
  border-radius: 20px;
`;

const ImageWrapper = styled.View`
  justify-content: center;
`;

const Image = styled.Image`
  width: 200px;
  height: 200px;
`;

const TextWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 25px;
`;

const SmallTextWrapper = styled.View``;

const BigText = styled.Text`
  color: #453773;
  font-size: 42px;
  font-weight: bold;
`;

const MediumText = styled(BigText)`
  font-size: 24px;
`;

const SmallText = styled(BigText)`
  font-size: 12px;
  font-weight: normal;
`;