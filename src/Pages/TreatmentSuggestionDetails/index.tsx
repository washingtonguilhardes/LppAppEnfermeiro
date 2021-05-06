import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { AppShell } from '@src/Components/AppShell';

const windowHeight = Dimensions.get('screen').height;

const TreatmentSuggestionDetails = () => {
  const imageCardModal = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(imageCardModal, {
      toValue: 0,
      duration: 5000,
      useNativeDriver: true,
    }).start(() => console.log('start'));
    setTimeout(() => {
      Animated.timing(imageCardModal, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true,
      }).start(() => console.log('DONE'));
    }, 2000);
  }, [imageCardModal]);

  console.log([windowHeight, windowHeight - 100]);

  return (
    <>
      <AppShell>
        <View>
          <ScrollView horizontal>
            <View style={styles.imageCard} />
            <View style={styles.imageCard} />
            <View style={styles.imageCard} />
            <View style={styles.imageCard} />
          </ScrollView>
          <Text>Cobertura</Text>
        </View>
      </AppShell>
      <Animated.View
        style={[
          styles.imageModal,
          {
            transform: [
              { translateY: (windowHeight - 200) * -1 },
              // {
              //   translateY: imageCardModal.interpolate({
              //     inputRange: [0, 1],
              //     outputRange: [windowHeight, windowHeight + 1000],
              //   }),
              // },
            ],
          },
        ]}>
        <View style={[styles.imageCard, { width: '100%' }]} />
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  imageCard: {
    width: 200,
    height: 200,
    backgroundColor: 'rgba(255,255,255, .6)',
  },
  imageModal: {
    zIndex: 1,
  },
});

export default TreatmentSuggestionDetails;
export const TS_DESCRIPTION_PAGE_INDEX = 'treatment-suggestion-details';
export const TS_DESCRIPTION_PAGE_NAME = 'Sugestão de Tratamento';
