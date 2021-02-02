import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { AppShell } from '@src/Components/AppShell';

import SuggestionDescriptionCard from './SuggestionDescriptionCard';

const TreatmentSuggestion = () => {
  const [suggestion] = useState({
    title: 'Tratamento X',
    steps: [
      { key: 'img-1', image: 'https://picsum.photos/100/100' },
      { key: 'img-2', image: 'https://picsum.photos/100/100' },
      { key: 'img-3', image: 'https://picsum.photos/100/100' },
      { key: 'img-4', image: 'https://picsum.photos/100/100' },
      { key: 'img-5', image: 'https://picsum.photos/100/100' },
      { key: 'img-6', image: 'https://picsum.photos/100/100' },
      { key: 'img-7', image: 'https://picsum.photos/100/100' },
      { key: 'img-8', image: 'https://picsum.photos/100/100' },
    ],
  });

  return (
    <AppShell>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{suggestion.title}</Text>
      </View>
      <View>
        {suggestion.steps.map(({ image, key }) => (
          <SuggestionDescriptionCard image={image} key={key} />
        ))}
      </View>
    </AppShell>
  );
};

export default TreatmentSuggestion;

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    height: 300,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color: 'rgba(255,255,255,.9)',
    fontWeight: 'bold',
  },
});

export const TREATMENT_SUGGESTION_PAGE_INDEX = 'treatment-suggestion';
export const TREATMENT_SUGGESTION_PAGE_NAME = 'Sugestão de Tratamento';
