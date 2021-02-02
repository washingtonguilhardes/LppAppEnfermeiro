import React from 'react';
import { View, Text } from 'react-native';

import { AppShell } from '@src/Components/AppShell';

const TreatmentSuggestionDetails = () => {
  return (
    <AppShell>
      <View>
        <Text>Cobertura</Text>
      </View>
    </AppShell>
  );
};

export default TreatmentSuggestionDetails;
export const TS_DESCRIPTION_PAGE_INDEX = 'treatment-suggestion-details';
export const TS_DESCRIPTION_PAGE_NAME = 'Sugestão de Tratamento';
