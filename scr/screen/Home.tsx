import React, {useEffect, useState} from 'react';
import {Alert, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Portal} from 'react-native-paper';
import BmiModal from './BmiModal';
import MaintanceCalModal from './MaintanceCalModal';
import ProteinFoodModal from './ProteinFoodModal';
import ProteinFoodListModal from './ProteinFoodModal';

function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const [bmi, setBmi] = useState('');
  const [bmiTextColor, setBmiTextColor] = useState('');
  const [bmiStatus, setBmiStatus] = useState('');
  const [maintenceCalModalVisible, setMaintenceCalModalVisible]= useState(false);
  const [maintenceCal,setMaintenceCal] =useState('');
  const [proteinFoodModalVisible, setProteinFoodModalVisible]=useState(false);

  useEffect(() => {
    if (bmi) {
      const bmiInNumber = parseFloat(bmi);
      if (bmiInNumber < 18.5) {
        setBmiTextColor('#0072A0');
        setBmiStatus('Underweight');
      } else if (bmiInNumber >= 18.5 && bmiInNumber <= 24.9) {
        setBmiTextColor('#00E400');
        setBmiStatus('Normal Weight');
      } else if (bmiInNumber >= 25 && bmiInNumber <= 29.9) {
        setBmiTextColor('#FFE800');
        setBmiStatus('Pre Obesity');
      } else if (bmiInNumber >= 30 && bmiInNumber <= 34.9) {
        setBmiTextColor('#FF6700');
        setBmiStatus('Over Weight');
      } else if (bmiInNumber >= 35 && bmiInNumber <= 39.9) {
        setBmiTextColor('#FF6700');
        setBmiStatus('Obese');
      } else if (bmiInNumber >= 40) {
        setBmiTextColor('#FF0000');
        setBmiStatus('Serverly Obese');
      }
    }
  }, [bmi]);

  return (
    // <View><Text>In Home</Text></View>
    <ScrollView>
      <View style={styles.label}>
        <Text style={styles.labelText}>Fit - U </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={{
              width: '100%',
              height: 320,
              margin: 20,
              borderRadius: 10,
            }}
            source={require('./assets/meter.jpg')}
          />
        </View>
        <View>
          {bmi && bmiTextColor && (
            <>
              <View style={styles.bmiContainer}>
                <Text style={styles.labelTextPreBmi}>Your BMI</Text>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 40,
                    color: bmiTextColor,
                    marginTop: 15,
                  }}>
                  {bmi}
                </Text>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 20,
                    color: bmiTextColor,
                    marginTop: 15,
                  }}>
                  {bmiStatus}
                </Text>
              </View>
            </>
          )}
          {maintenceCal && (
            <>
              <View style={styles.bmiContainer}>
                <Text style={styles.labelTextPreBmi}>
                  Your Maintence Calories
                </Text>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 40,
                    color: bmiTextColor,
                    marginTop: 15,
                  }}>
                  {maintenceCal}
                </Text>
                {/* <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 20,
                    color: bmiTextColor,
                    marginTop: 15,
                  }}>
                  {bmiStatus}
                </Text> */}
              </View>
            </>
          )}
          <Button
            onPress={() => {
              setModalVisible(true);
            }}
            textColor={'white'}
            style={{backgroundColor: '#035C92', marginTop: 20}}>
            Calculate BMI
          </Button>
          <Button
            onPress={() => {
              setMaintenceCalModalVisible(true);
            }}
            textColor={'white'}
            style={{backgroundColor: '#035C92', marginTop: 20}}>
            Calculate Maintenance Calories
          </Button>
          <Button
            onPress={() => {
              setProteinFoodModalVisible(true);
            }}
            textColor={'white'}
            style={{backgroundColor: '#035C92', marginTop: 20}}>
            Protein Food List
          </Button>
          <View style={{height: 20}}></View>
        </View>
       <View style={{height:200}}></View>

        <Portal>
          <BmiModal
            {...{setBmi, setModalVisible, modalVisible, setMaintenceCal}}
          />
        </Portal>
        <Portal>
          <ProteinFoodListModal
            visible={proteinFoodModalVisible}
            onClose={() => setProteinFoodModalVisible(false)}
          />
        </Portal>
        <Portal>
          <MaintanceCalModal
            {...{
              setMaintenceCal,
              setMaintenceCalModalVisible,
              maintenceCalModalVisible,
              setBmi,
            }}
          />
        </Portal>
      </View>
    </ScrollView>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
  picker: {
    marginBottom: 20,
    zIndex: 100,
  },
  textInput: {
    height: 40,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  label: {
    backgroundColor: '#035C92',
    height: 90,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  labelText: {
    textAlign: 'center',
    fontSize: 40,
    color: 'white',
    marginTop: 15,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bmiContainer: {
    backgroundColor: '#035C92',
    height: 170,
    borderRadius: 10,
  },
  //   labelTextBmi: {
  //     textAlign: 'center',
  //     fontSize: 40,
  //     color: bmiTextColor,
  //     marginTop: 15,
  //   },
  labelTextPreBmi: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    marginTop: 15,
  },
});
