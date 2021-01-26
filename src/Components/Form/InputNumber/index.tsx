import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';

import Theme from '@src/Theme';

import InputCard from '../InputCard';
import InputLabel from '../InputLabel';

interface Props {
  label: string;
}

const InputNumber = (props: Props) => {
  const { label } = props;
  return (
    <TouchableHighlight>
      <InputCard marginBottom={16} style={styles.inputCard}>
        <InputLabel label={label} />
        <TextInput
          keyboardType="number-pad"
          underlineColorAndroid={Theme.primary.main}
          style={styles.textInput}
        />
      </InputCard>
    </TouchableHighlight>
  );
};

export default InputNumber;

const styles = StyleSheet.create({
  inputCard: { flexDirection: 'column' },
  labelContainer: {
    paddingHorizontal: 4,
  },
  label: {
    fontSize: 12,
  },
  textInput: {
    flex: 1,
    height: 48,
    fontSize: 14,
  },
});
