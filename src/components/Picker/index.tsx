import React, { FC } from "react";
import SmoothPicker from "react-native-smooth-picker";
import styled from "styled-components/native";
import { ifStyle } from "@platformbuilders/helpers";

interface Data {
  label: string;
  value: any;
}

interface Props {
  onChange?(value: any): void;
  selected?: string | number;
  horizontal?: boolean;
  contrast?: boolean;
  data: Data[];
}

const Picker: FC<Props> = ({
  data,
  horizontal = false,
  selected = 1,
  onChange = () => null,
}): JSX.Element => (
  <SmoothPicker
    magnet
    scrollAnimation
    initialScrollToIndex={selected}
    horizontal={horizontal}
    showsHorizontalScrollIndicator={false}
    data={data}
    onSelected={({ item }: any): void => {
      onChange(item.value);
    }}
    keyExtractor={(item: Data): string => item.label}
    renderItem={({ item }: any): JSX.Element => (
      <NumberWrapper isSelected={item.value === selected}>
        <Number accessibilityLabel={`horario ${item.label}`} isSelected={item.value === selected}>{item.label}</Number>
      </NumberWrapper>
    )}
  />
);

const isSelected = ifStyle("isSelected");

interface NumberWrapperProps {
  isSelected: boolean;
  accessibilityLabel: string;
}

export const NumberWrapper = styled.View<NumberWrapperProps>`
  border-radius: 50px;
  margin-vertical: 10px;
  margin-horizontal: 5px;
  width: 55px;
  height: 55px;
  align-items: center;
  justify-content: center;
  background-color: ${isSelected("#5F32F4", "transparent")};
`;

export const Number = styled.Text`
  color: ${isSelected("#ffffff", "#A39FB3")};
  opacity: ${isSelected(1, 0.8)};
  text-align: center;
`;

export default Picker;
