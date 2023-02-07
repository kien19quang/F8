/* eslint-disable @typescript-eslint/member-delimiter-style */
import * as React from 'react';
import { CheckboxProps, Checkbox } from '@mui/material';
import { Control, useController } from 'react-hook-form';

type FormCheckBoxProps = CheckboxProps & {
  name: string;
  control: Control<any>;
};

const FormCheckBox: React.FunctionComponent<FormCheckBoxProps> = ({ name, control, ...props }) => {
  const {
    field: { value, onChange, ref }
  } = useController({
    name,
    control
  });

  return <Checkbox name={name} value={value} onChange={onChange} inputRef={ref} {...props} />;
};

export default FormCheckBox;
