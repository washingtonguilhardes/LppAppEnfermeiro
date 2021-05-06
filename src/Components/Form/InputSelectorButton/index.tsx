import React, { useCallback, useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableHighlightProps,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Picker } from '@react-native-community/picker';

import Theme from '@src/Theme';

import InputCard from '../InputCard';
import InputLabel from '../InputLabel';

interface OptionType {
  label: string;
  value: string;
}
interface Props {
  label?: string;
  icon?: string | null;
  placeholder?: string;
  marginBottom?: number;
  selectedItem?: OptionType;
  onChange?: (item: OptionType) => void;
  optionsLoader: () => Promise<{
    [key: string]: OptionType;
  }>;
}

const InputSelectorButton = (props: Props) => {
  const {
    label,
    icon = 'caret-down-outline',
    marginBottom = 0,
    placeholder,
    onChange,
    selectedItem,
    optionsLoader,
  } = props;

  const [options, setOptions] = useState<{ [key: string]: OptionType }>({});

  const [selected, setSelected] = useState<OptionType | null>(null);

  const loadOptions = useCallback(async () => {
    const nextOptions = await optionsLoader();
    setOptions(nextOptions);
  }, [optionsLoader]);

  useEffect(() => {
    loadOptions();
  }, [loadOptions]);

  return (
    <InputCard style={styles.inputCard} marginBottom={marginBottom}>
      <InputLabel label={label} />
      <Picker
        selectedValue={selected ? selected.value : 0}
        style={styles.pickerRoot}
        prompt={label}
        onValueChange={(itemValue) => {
          const value = options[itemValue] || null;
          setSelected(value);
          if (onChange) {
            onChange(value);
          }
        }}>
        <Picker.Item color={Theme.primary.main} label={placeholder} value={0} />
        {Object.entries(options).map(([key, item]) => (
          <Picker.Item
            color={Theme.primary.dark}
            label={item.label}
            value={item.value}
            key={key}
          />
        ))}
      </Picker>
    </InputCard>
  );
};

export default InputSelectorButton;

const styles = StyleSheet.create({
  touch: {},
  label: {
    fontSize: 12,
  },
  placeholder: {
    fontSize: 18,
  },
  inputCard: { flexDirection: 'column' },
  pickerRoot: {
    flex: 1,
  },
});
