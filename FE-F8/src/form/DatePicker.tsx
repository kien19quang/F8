/* eslint-disable @typescript-eslint/member-delimiter-style */
import * as React from 'react';
import { DatePicker } from '@mui/x-date-pickers';
import { Control, Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

interface FormDatePickerProps {
  name: string;
  control: Control<any>;
  defaultValue: any;
  label?: string;
  inputFormat?: string;
}

const FormDatePicker: React.FunctionComponent<FormDatePickerProps> = ({
  name,
  control,
  defaultValue,
  label,
  inputFormat
}) => {
  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      control={control}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <DatePicker
          value={value}
          label={label}
          onChange={onChange}
          inputFormat={inputFormat}
          renderInput={(params) => <TextField {...params} error={!(error == null)} helperText={error?.message} />}
        />
      )}
    />
  );
};

export default FormDatePicker;
