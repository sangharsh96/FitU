import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

export const ErrorField = ({errors: error, touched: touch}: any) => {
  return (
    <View>
      {error && touch ? (
        <Text
          style={{
            fontSize: 12,
            marginTop: -17,
            paddingBottom: 5,
            color: 'red',
          }}>
          {error}
        </Text>
      ) : null}
    </View>
  );
};
