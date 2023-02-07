import { TextField, TextFieldProps } from '@mui/material';
import * as React from 'react';
import { Control, useController } from 'react-hook-form';

export type InputFieldProps = TextFieldProps & {
  name: string;
  control: Control<any>;
};

const InputField: React.FunctionComponent<InputFieldProps> = ({
  name,
  label,
  control,
  onChange: externalOnChange,
  onBlur: externalOnBlur,
  ref: externalRef,
  value: externalValue,
  ...props
}) => {
  const {
    field: { onChange, onBlur, ref, value },
    fieldState: { error }
  } = useController({ name, control });

  return (
    <TextField
      fullWidth
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      inputRef={ref}
      error={!!error}
      helperText={error?.message}
      {...props}
    />
  );
};

export default InputField;
