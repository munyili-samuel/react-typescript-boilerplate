// react
import * as React from 'react';

// styles
import './DatePicker.scss';

// third party
import Picker from 'react-datepicker';

// interfaces
import { DatePickerProps } from 'components/DatePicker/interfaces';

// helpers

export const DatePicker = (props: DatePickerProps) => {
  const { defaultDate, onDateChange, name } = props;
  return(
    <Picker
      selected={defaultDate}
      onChange={onDateChange}
      name={name}
      shouldCloseOnSelect={true}
      dateFormat={'MMM dd, yyyy'}
      className="picker"
    />
  );
};

export default DatePicker;
