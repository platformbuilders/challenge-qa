import styled from "styled-components/native";

export default function WindComponent() {
  return (
    <Wrapper>
      <TextWrapper>
        <SmallTextWrapper>
          <MediumText>0%</MediumText>
          <SmallText>CHANCE CH.</SmallText>
        </SmallTextWrapper>
        <SmallTextWrapper>
          <MediumText>0mm</MediumText>
          <SmallText>CHUVA</SmallText>
        </SmallTextWrapper>
        <SmallTextWrapper>
          <MediumText>36km/h</MediumText>
          <SmallText>VENTO</SmallText>
        </SmallTextWrapper>
      </TextWrapper>
      <TextWrapper>
        <SmallTextWrapper>
          <MediumText>5</MediumText>
          <SmallText>RAIOS UV</SmallText>
        </SmallTextWrapper>
        <SmallTextWrapper>
          <MediumText>46%</MediumText>
          <SmallText>HUMIDADE</SmallText>
        </SmallTextWrapper>
        <SmallTextWrapper>
          <MediumText>32˚C</MediumText>
          <SmallText>JÁ É SENSASSÃO</SmallText>
        </SmallTextWrapper>
      </TextWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.View`
  align-items: center;
  background-color: #ffffff75;
  margin: 5%;
  border-radius: 20px;
`;

const TextWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-horizontal: 25px;
  padding-vertical: 10px;
`;

const SmallTextWrapper = styled.View``;

const MediumText = styled.Text`
  text-align: right;
  color: #453773;
  font-size: 18px;
  font-weight: bold;
`;

const SmallText = styled(MediumText)`
  font-size: 14px;
  font-weight: normal;
`;
