import React, { useMemo, useState } from 'react';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

import { TS_DESCRIPTION_PAGE_INDEX } from '@src/Pages/TreatmentSuggestionDetails';

import Theme from '@src/Theme';

import styles from './SuggestionDescriptionCard.styles';

interface Props {
  image: string;
}

const SuggestionDescriptionCard = (props: Props) => {
  const { image } = props;
  const [loaging, setLoading] = useState(false);
  const img = useMemo(() => `${image}?a=${Math.random()}`, [image]);
  const { navigate } = useNavigation();

  return (
    <TouchableWithoutFeedback
      style={styles.root}
      onPress={() => {
        setLoading(true);
        setTimeout(() => setLoading(false), 3000);
        setTimeout(() => navigate(TS_DESCRIPTION_PAGE_INDEX), 3200);
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
