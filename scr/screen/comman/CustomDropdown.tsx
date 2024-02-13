import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {Text} from 'react-native-paper';

const data = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];

export const CustomDropdown = ({
  data1,
  formData: values,
  setFormData: setValues,
  field,
  placeholder,
  disable = false,
  searchable = false,
  onChangeText = () => null,
}: any) => {
  const renderLabel = (item: any, label: string) => {
    if (item) {
      return <Text style={[styles.label]}>{label}</Text>;
    }
    return null;
  };
  return (
    <View style={styles.container}>
      {renderLabel(values[field], placeholder)}
      <Dropdown
        disable={disable}
        search={searchable}
        style={[
          styles.dropdown,
          styles.picker,
          {
            borderColor: disable ? 'gray' : 'inherit',
          },
        ]}
        placeholderStyle={[
          styles.placeholderStyle,
          {color: disable ? '#BFBFBF' : 'inherit'},
        ]}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data1 ?? data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        searchPlaceholder={'Search...'}
        value={values[field]}
        onChange={item => {
          setValues({...values, [field]: item.value});
        }}
        onChangeText={text => onChangeText(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  picker: {
    marginBottom: 20,
    zIndex: 100,
  },
  container: {
    // backgroundColor: 'white',
    padding: 0,
  },
  dropdown: {
    height: 50,
    // borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: 'white',
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 5,
    left: 10,
    top: -8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 12,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
