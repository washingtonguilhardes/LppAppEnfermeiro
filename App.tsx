import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Filter, { FILTER_PAGE_INDEX, FILTER_PAGE_NAME } from '@src/Pages/Filter';
import TreatmentSuggestion, {
  TREATMENT_SUGGESTION_PAGE_INDEX,
  TREATMENT_SUGGESTION_PAGE_NAME,
} from '@src/Pages/TreatmentSuggestion';

import Shared from '@src/Store/Shared';

import { getNavigatorTheme } from '@src/Theme';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Shared>
      <NavigationContainer theme={getNavigatorTheme()}>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
            },
          }}
          mode="card">
          <Stack.Screen
            name={FILTER_PAGE_INDEX}
            options={{ title: FILTER_PAGE_NAME }}
            component={Filter}
          />
          <Stack.Screen
            name={TREATMENT_SUGGESTION_PAGE_INDEX}
            options={{ title: TREATMENT_SUGGESTION_PAGE_NAME }}
            component={TreatmentSuggestion}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Shared>
  );
};

export default App;
