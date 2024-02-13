import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, Modal, Portal, TextInput} from 'react-native-paper';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import {ErrorField} from './comman/ErrorField';
import {CustomDropdown} from './comman/CustomDropdown';

const BmiModal = ({
  setMaintenceCal,
  setMaintenceCalModalVisible,
  maintenceCalModalVisible,
setBmi,
}: any) => {
  const initialValues = {
    height: '',
    weight: '',
    age: '',
    gender: '',
    activity: '',
  };

  const MaintenceCalSchema = Yup.object({
    height: Yup.number()
      .typeError('Plase enter correct height')
      .required('Please Enter height'),
    weight: Yup.number()
      .typeError('Plase enter correct weight')
      .required('Please Enter Weight'),
    age: Yup.number()
      .typeError('Plase enter correct Age')
      .required('Please Enter Age'),
    gender: Yup.string().required('Please select gender'),
    activity: Yup.string().required('Please select Physical activity'),
  });

  const genderList = [
    {
      label: 'Male',
      value: 'Male',
    },
    {
      label: 'Female',
      value: 'Female',
    },
  ];

  const activityList = [
    {
      label: 'No Exercise',
      value: '1.2',
    },
    {
      label: 'Light Exercise 1-2 times/Week',
      value: '1.4',
    },
    {
      label: 'Modrate Exercise 2-3 times/Week',
      value: '1.6',
    },
    {
      label: 'Hard Exercise 3-5 times/Week',
      value: '1.75',
    },
    {
      label: 'Hard Exercise 6-7 times/Week',
      value: '2',
    },
    {
      label: 'Professional Athlete',
      value: '2.4',
    },
  ];

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
    validationSchema: MaintenceCalSchema,
    onSubmit: () => {
      const weightInKg = parseInt(values.weight);
      const heightInCm = parseInt(values.height);
      const ageInYear = parseInt(values.age);
      const activity = parseFloat(values.activity);
      if (values.gender == 'Male') {
        const BMR = 10 * weightInKg + 6.25 * heightInCm - 5 * ageInYear + 5;
        const maintenceCal = (BMR * activity).toFixed(1);
        setMaintenceCal(maintenceCal);
        setBmi('');
      } else {
        const BMR = 10 * weightInKg + 6.25 * heightInCm - 5 * ageInYear - 161;
        const maintenceCal = (BMR * activity).toFixed(1);
        setMaintenceCal(maintenceCal);
        setBmi('');
      }

      setMaintenceCalModalVisible(false);
      setValues({
        weight: '',
        height: '',
        age: '',
        gender: '',
        activity: '',
      });
    },
  });

  return (
    <Portal>
      <Modal
        visible={maintenceCalModalVisible}
        onDismiss={() => setMaintenceCalModalVisible(false)}
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
              Check Your Maintenance Calories
            </Text>
          </View>
          <View style={{width: '100%'}}>
            <CustomDropdown
              {...{
                data1: genderList,
                formData: values,
                setFormData: setValues,
                field: 'gender',
                placeholder: 'Gender',
              }}
            />
          </View>
          <ErrorField errors={errors.gender} touched={touched.gender} />
          <View style={{width: '100%'}}>
            <CustomDropdown
              {...{
                data1: activityList,
                formData: values,
                setFormData: setValues,
                field: 'activity',
                placeholder: 'Physical Activity',
              }}
            />
          </View>
          <ErrorField errors={errors.activity} touched={touched.activity} />

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
          <TextInput
            mode="outlined"
            maxLength={10}
            style={styles.textInput}
            keyboardType="number-pad"
            label="Age"
            value={values.age}
            onBlur={handleBlur('age')}
            onChangeText={handleChange('age')}
          />
          <ErrorField errors={errors.age} touched={touched.age} />

          <View style={{width: '100%'}}>
            <Button
              onPress={handleSubmit}
              textColor={'white'}
              style={styles.button}>
              Calculate Maintenance Calories
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
  dropdown: {
    width: '100%',
  },
});

export default BmiModal;
