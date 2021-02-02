import React, { useMemo, useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import Theme from '@src/Theme';

interface Props {
  image: string;
}

const SuggestionDescriptionCard = (props: Props) => {
  const { image } = props;
  const [loaging, setLoading] = useState(false);
  const img = useMemo(() => `${image}?a=${Math.random()}`, [image]);
  return (
    <TouchableWithoutFeedback
      style={styles.root}
      onPress={() => {
        setLoading(!loaging);
      }}>
      <>
        <View>
          <Image style={styles.image} source={{ uri: img }} />
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.title}>Cobertura X</Text>
          <Text>
            {'Ut fugiat esse eiusmod cupidatat ex cillum eu amet voluptate. Ut fugiat esse eiusmod cupidatat ex cillum eu amet voluptate.'.slice(
              0,
              100,
            )}
          </Text>
        </View>
        <View style={styles.loaderIndicator}>
          {loaging && (
            <ActivityIndicator size="small" color={Theme.primary.dark} />
          )}
        </View>
      </>
    </TouchableWithoutFeedback>
  );
};

export default SuggestionDescriptionCard;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: Theme.primary.light,
    borderRadius: 7,
    elevation: 3,
  },
  descriptionContainer: {
    flex: 1,
    padding: 8,
  },
  title: {
    fontSize: 18,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'stretch',
    flex: 1,
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3,
  },
  loaderIndicator: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
  },
});
