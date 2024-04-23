import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ErrorProps} from '../helper/interfaces';
import {Colors, FONTS, FONT_SIZE} from '../themes/AppTheme';

const ErrorComponent: FC<ErrorProps> = ({callApi, msg}) => {
  return (
    <View style={styles.centerView}>
      <Text style={styles.errorText}>{msg}</Text>
      <TouchableOpacity onPress={callApi}>
        <Text style={{...styles.errorText, color: Colors.mainTheme2}}>
          Try again
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ErrorComponent;

const styles = StyleSheet.create({
  errorText: {
    fontFamily: FONTS.Poppins500,
    color: Colors.mainTheme1,
    fontSize: FONT_SIZE.small_medium,
  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
