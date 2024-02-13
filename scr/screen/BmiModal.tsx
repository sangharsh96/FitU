import React, { useEffect } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, Modal, Portal, TextInput} from 'react-native-paper';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import {ErrorField} from './comman/ErrorField';

const BmiModal = ({setBmi, setModalVisible, modalVisible,setMaintenceCal}: any) => {
  const initialValues = {
    height: '',
    weight: '',
  };

  const BmiSchema = Yup.object({
    height: Yup.number()
      .typeError('Plase enter correct height')
      .required('Please Enter height'),
    weight: Yup.number()
      .typeError('Plase enter correct weight')
      .required('Please Enter Weight'),
  });


  const {
    values,
    errors,
    touched,
    handleSubmit,
    setValues,
    handleBlur,
    handleChange,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: BmiSchema,
    onSubmit: () => {
      const weightInKg = parseFloat(values.weight);
      const heightInMeter = parseFloat(values.height) / 100;
      const bmi = (weightInKg / (heightInMeter * heightInMeter)).toFixed(2);
      setBmi(bmi);
      setMaintenceCal('');


      setModalVisible(false);
      setValues({
        weight:'',
        height:'',
      })
    },
  });

  

  return (
    <Portal>
      <Modal
        visible={modalVisible}
        onDismiss={() => setModalVisible(false)}
        contentContainerStyle={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View
            style={{
              backgroundColor: '#7D7F8B',
              width: '100%',
              marginBottom: 10,
              borderRadius: 5,
            }}>
            <Text
              style={{
                marginBottom: 10,
                textAlign: 'center',
                paddingTop: 10,
                color: 'white',
              }}>
              Check Your BMI
            </Text>
          </View>
          <TextInput
            mode="outlined"
            maxLength={10}
            style={styles.textInput}
            keyboardType="number-pad"
            label="Height in cm"
            value={values.height}
            onBlur={handleBlur('height')}
            onChangeText={handleChange('height')}
          />
          <ErrorField errors={errors.height} touched={touched.height} />
          <TextInput
            mode="outlined"
            maxLength={10}
            style={styles.textInput}
            keyboardType="number-pad"
            label="Weight in kg"
            value={values.weight}
            onBlur={handleBlur('weight')}
            onChangeText={handleChange('weight')}
          />
          <ErrorField errors={errors.weight} touched={touched.weight} />
          <View style={{width: '100%'}}>
            <Button
              onPress={handleSubmit}
              textColor={'white'}
              style={styles.button}>
              Calculate BMI
            </Button>
          </View>
        </View>
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 8,
  },
  modalContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    marginBottom: 20,
    backgroundColor: 'white',
    width: '100%',
  },
  button: {
    backgroundColor: '#035C92',
    width: '100%',
  },
});

export default BmiModal;
