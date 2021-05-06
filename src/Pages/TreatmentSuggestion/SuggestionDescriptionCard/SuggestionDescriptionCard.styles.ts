import { StyleSheet } from 'react-native';

import Theme from '@src/Theme';

export default StyleSheet.create({
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
