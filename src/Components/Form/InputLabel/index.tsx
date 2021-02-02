import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = { label?: string };

const InputLabel = (props: Props) => {
  const { label } = props;
  return (
    <View style={styles.labelContainer}>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default InputLabel;

const styles = StyleSheet.create({
  labelContainer: {
    paddingHorizontal: 4,
  },
  label: {
    fontSize: 12,
  },
});
