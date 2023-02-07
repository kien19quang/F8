/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/member-delimiter-style */
import React from 'react';
import { FormControl, InputLabel, Select, FormControlProps, FormHelperText } from '@mui/material';
import { Control, useController } from 'react-hook-form';

export type ReactHookFormSelectProps = FormControlProps & {
  name: string;
  label: string;
  control: Control<any>;
};

const ReactHookFormSelect = ({
  name,
  label,
  control,
  defaultValue,
  children,
  ...props
}: ReactHookFormSelectProps): React.ReactElement => {
  const labelId = `${name}-label`;
  const {
    field: { value, onChange },
    fieldState: { error }
  } = useController({
    name,
    control
  });
  return (
    <FormControl {...props} fullWidth error={!!error}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select value={value} onChange={onChange} defaultValue={defaultValue} labelId={labelId} label={label}>
        {children}
      </Select>
      {error && <FormHelperText>{error?.message}</FormHelperText>}
    </FormControl>
  );
};
export default ReactHookFormSelect;
