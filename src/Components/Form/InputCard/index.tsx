import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

import Theme from '@src/Theme';

interface Props {
  marginBottom?: number;
}

const InputCard = (props: React.PropsWithChildren<Props & ViewProps>) => {
  const { children, marginBottom = 0, style = {}, ...others } = props;
  return (
    <View {...others} style={[{ ...styles.root, marginBottom }, style]}>
      {children}
    </View>
  );
};

export default InputCard;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: 56,
    backgroundColor: Theme.primary.light,
    flexDirection: 'row',
    elevation: 3,
    borderRadius: 5,
  },
});
