import React, { useRef, useEffect } from 'react';

import { useField } from '@unform/core';

import { TextInput, TextInputProps } from 'react-native';

import styles from './styles'

interface InputProps extends TextInputProps {
  name: string;
}

interface InputValueReference {
  value: string;
}

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
  const inputElementRef = useRef<any>(null);
  const { defaultValue = '', fieldName, registerField } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue })

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(ref: any, value) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <TextInput
      ref={inputElementRef}
      style={styles.input}
      defaultValue={defaultValue}
      onChangeText={text => {
        inputValueRef.current.value = text;
      }}
      {...rest}
    />
  );
}

export default Input;
