import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, ScrollView, Modal } from 'react-native';
import { Button, Portal } from 'react-native-paper';

const ProteinFoodListModal = ({visible, onClose}:any) => {
  // Define your list of protein foods here
  const proteinFoods = [
    {
      id: 1,
      name: 'Chicken Breast',
      proteinPer100g: '31g',
      image:
        'https://www.savorynothings.com/wp-content/uploads/2022/01/grilled-chicken-breast-recipe-image-7.jpg',
    },
    {
      id: 2,
      name: 'Salmon',
      proteinPer100g: '25g',
      image:
        'https://www.savorynothings.com/wp-content/uploads/2022/06/salmon-marinade-recipe-image-7.jpg',
    },
    {
      id: 3,
      name: 'Panner',
      proteinPer100g: '18.3g',
      image: 'https://bhadradairy.co.in/wp-content/uploads/2023/01/panner.jpg',
    },
    {
      id: 4,
      name: 'Soyabean',
      proteinPer100g: '36g',
      image:
        'https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTttpMixFZnsf7ljtqvgMybYu28PgQ-4fb_bfRfrHra-JwR9VX4Da0x_AeeRD8sXQby',
    },
    {
      id: 5,
      name: 'Lentils',
      proteinPer100g: '9g',
      image:
        'https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTwa0DjpldT5TyPhAczcwDOaUwFL7-sdk_oo5LCHTyC_2oUt7qY_Q_9i1mG6F722423',
    },
    // Add more protein foods as needed
  ];

  return (
    <Portal>
      <Modal
        visible={visible}
        animationType="slide"
        transparent={false}
       onRequestClose={onClose}
       contentContainerStyle={styles.modalContainer}
      >
        <View style={styles.container}>
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
              Top 10 Protein List
            </Text>
          </View>
          <FlatList
            data={proteinFoods}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <View style={styles.foodItem}>
                <Image source={{uri: item.image}} style={styles.foodImage} />
                <Text style={styles.foodName}>{item.name}</Text>
                <Text
                  style={
                    styles.foodProtein
                  }>{`Protein: ${item.proteinPer100g}`}</Text>
              </View>
            )}
          />
          {/* <View style={{width: '100%', backgroundColor: '#7D7F8B'}}>
            <Text style={styles.closeButton} onPress={onClose}>
              Close
            </Text>
          </View> */}
          <View style={{width: '100%'}}>
            <Button
              onPress={onClose}
              textColor={'white'}
              style={styles.button}>
              Close
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
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  foodItem: {
    marginBottom: 20,
    alignItems: 'center',
    // width:'100%'
  },
  foodImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  foodName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  foodProtein: {
    fontSize: 16,
    marginTop: 5,
  },
  closeButton: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
    marginTop: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#035C92',
    width: '100%',
  },
});

export default ProteinFoodListModal;