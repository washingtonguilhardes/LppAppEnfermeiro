import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native';

import Theme from '@src/Theme';

export function AppShell(props: React.PropsWithChildren<{}>) {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Theme.primary.main}
      />
      <ScrollView
        style={styles.scrollView}
        contentInsetAdjustmentBehavior="automatic">
        {props.children}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: { margin: 8, marginTop: 0 },
});
