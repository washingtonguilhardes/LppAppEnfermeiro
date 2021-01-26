import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, StyleSheet, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Theme from '@src/Theme';

import { AppShell } from '@src/Components/AppShell';
import InputNumber from '@src/Components/Form/InputNumber';
import InputSelectorButton from '@src/Components/Form/InputSelectorButton';

import { TREATMENT_SUGGESTION_PAGE_INDEX } from '../TreatmentSuggestion';

function optionLoaderCreator(baseTitle: string) {
  return async () => {
    return Object.fromEntries(
      new Array(20).fill(baseTitle).map((item, index) => {
        const key = `${item}-${index}`.split(/[ ]/gi).join('-');
        return [key, { label: `${item} ${index + 1}`, value: key }];
      }),
    );
  };
}

export const Filter = () => {
  const navigator = useNavigation();

  const { register, setValue, handleSubmit } = useForm();

  useEffect(() => {
    register('localizacao');
    register('estagio');
    register('nivel-exsudato');
  }, [register]);

  const setFilterValue = (field: any) => (value: any) => {
    setValue(field, value);
  };

  const onSubmit = (data: any) => {
    console.log(data);
    navigator.navigate(TREATMENT_SUGGESTION_PAGE_INDEX);
  };

  return (
    <AppShell>
      <View style={styles.root}>
        <View style={styles.form}>
          <InputSelectorButton
            label="Localização"
            placeholder="Ex: Occiptal"
            marginBottom={16}
            optionsLoader={optionLoaderCreator('Localizacao')}
            onChange={setFilterValue('localizacao')}
          />
          <InputSelectorButton
            label="Estágio"
            placeholder="Ex: Extágio 1"
            marginBottom={16}
            optionsLoader={optionLoaderCreator('Estagio')}
            onChange={setFilterValue('estagio')}
          />
          <InputSelectorButton
            label="Nível de exsudato"
            placeholder="Ex: Baixo"
            marginBottom={16}
            optionsLoader={optionLoaderCreator('Nível de exsudato')}
            onChange={setFilterValue('nivel-exsudato')}
          />
          <InputNumber label="Largura (cm)" />
          <InputNumber label="Largura (cm)" />
          <InputNumber label="Largura (cm)" />
        </View>
        <View>
          <Button
            title="Procurar"
            color={Theme.accent.main}
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </View>
    </AppShell>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    // backgroundColor: 'red',
  },
  form: {
    flex: 1,
  },
});

export default Filter;
export const FILTER_PAGE_INDEX = 'filter';
export const FILTER_PAGE_NAME = 'Filtro';
