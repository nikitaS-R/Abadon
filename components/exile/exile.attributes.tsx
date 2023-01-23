import { View, Text, Image, StyleSheet } from "react-native";
import { useCallback, useState } from "react";
import { ExileAttributeType, ExileDemonType } from "./exile.types";
import { initialAttributes, initialDemons } from "./exile.demons";
import DropDownPicker from "react-native-dropdown-picker";

const ExileAtributes = () => {
  const [demons, setDemons] = useState<ExileDemonType[]>(initialDemons);
  const [attributes, setAttributes] =
    useState<ExileAttributeType[]>(initialAttributes);
  const [openDemon, setOpenDemon] = useState<boolean>(false);
  const [openAtr, setOpenAtr] = useState<boolean>(false);
  const [selectedDemon, setSelectedDemon] = useState(null);
  const [selectedAttribute, setSelectedAttribute] = useState(null);

  const onDemonOpen = useCallback(() => {
    setOpenAtr(false);
  }, []);

  const onAttributeOpen = useCallback(() => {
    setOpenDemon(false);
  }, []);

  const UpArrowDropDownIcon = () => {
    return (
      <Image
        style={{ width: 30, height: 30 }}
        source={require("../../assets/images/upArrow.png")}
      />
    );
  };
  const CloseArrowDropDownIcon = () => {
    return (
      <Image
        style={{ width: 30, height: 30 }}
        source={require("../../assets/images/downArrow.png")}
      />
    );
  };

  const TickArrowDropDownIcon = () => {
    return (
      <Image
        style={{ width: 25, height: 25 }}
        source={require("../../assets/images/check.png")}
      />
    );
  };

  return (
    <View style={styled.exileAtributesMain}>
      <View style={styled.exileAtributesContainer}>
        <DropDownPicker
          open={openDemon}
          value={selectedDemon}
          items={demons}
          setOpen={setOpenDemon}
          setValue={setSelectedDemon}
          setItems={setDemons}
          placeholder={"Select the demon"}
          onOpen={onDemonOpen}
          zIndex={3000}
          zIndexInverse={1000}
          style={styled.exileDropDown}
          dropDownContainerStyle={styled.exileDropDownContainer}
          textStyle={styled.exileDropDownText}
          ArrowUpIconComponent={CloseArrowDropDownIcon}
          ArrowDownIconComponent={UpArrowDropDownIcon}
          TickIconComponent={TickArrowDropDownIcon}
        />
      </View>
      <View style={styled.exileAtributesContainer}>
        <DropDownPicker
          multiple={true}
          open={openAtr}
          value={selectedAttribute}
          items={attributes}
          setOpen={setOpenAtr}
          setValue={setSelectedAttribute}
          setItems={setAttributes}
          placeholder={"Select the attribute"}
          onOpen={onAttributeOpen}
          zIndex={2000}
          zIndexInverse={2000}
          style={styled.exileDropDown}
          dropDownContainerStyle={styled.exileDropDownContainer}
          textStyle={styled.exileDropDownText}
          ArrowUpIconComponent={CloseArrowDropDownIcon}
          ArrowDownIconComponent={UpArrowDropDownIcon}
          TickIconComponent={TickArrowDropDownIcon}
        />
      </View>
    </View>
  );
};

const styled = StyleSheet.create({
  exileAtributesMain: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  exileAtributesContainer: {
    margin: 10,
  },
  exileDropDown: {
    height: 70,
    backgroundColor: "#501E23",
  },
  exileDropDownContainer: {
    backgroundColor: "#6d292f",
  },
  exileDropDownText: {
    color: "#f0c4a8",
    fontFamily: "RalewayText",
    fontSize: 18,
    textAlign: "center",
  },
  exileDropDownArrow: {
    width: 30,
    height: 30,
  },
});

export default ExileAtributes;
