// react
import * as React from 'react';

// third party
import { Dropdown, Icon } from 'semantic-ui-react';

// styles
import './SelectBox.scss';

// components
import { SelectBoxProps } from 'components/SelectBox/interfaces';
import { getSelectBoxOptions } from 'utils/helpers';

export const SelectBox = (props: SelectBoxProps) => {
  const { onReset, onsSelectionChange, name, value, className, disabled, onSearchChange } = props;
  let { options } = props;
  const classes = className && className.length > 0 ? `${className}` : 'field';
  const showResetIcon = onReset !== undefined;

  options = getSelectBoxOptions(options);
  return(
    <div className="canvas">
      <Dropdown
        disabled={disabled}
        className={classes}
        placeholder="Select..."
        selection
        search
        name={name}
        onChange={onsSelectionChange}
        onSearchChange={onSearchChange}
        options={options}
        value={value}
        autoFocus
      />
      {
        showResetIcon && <Icon
          onClick={onReset}
          className="canvas__reset-button"><i className="delete icon grey" /></Icon>
      }
    </div>
  );
};
