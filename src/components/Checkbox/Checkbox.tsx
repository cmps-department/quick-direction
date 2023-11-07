import { CheckboxProps, Checkbox as CheckboxC } from '@mantine/core';
import React, { FC, useState } from 'react';


const Checkbox: FC<CheckboxProps> = ({ label }) => {

  const [checked, setChecked] = useState(false);
  const accentColor = checked ? 'var(--accent-color)' : '#000';

  return <CheckboxC styles={{
    body: {
      alignItems: 'center',
    },
    label: {
      fontSize: '18px',
      fontWeight: 600,
      color: accentColor
    },
    inner: {
      width: '36px',
      height: '36px'
    },
    input: {
      backgroundImage: `url(${checked ? '/images/CheckedCheckbox.png' : '/images/UncheckedCheckbox.png'})`,
      backgroundPosition: 'center',
      backgroundSize: '100%',
      border: 'none',
      height: '100%',
      width: '100%',
      backgroundColor: 'transparent'
    },
    icon: {
      display: 'none'
    }

  }}
    onChange={(event) => setChecked(event.currentTarget.checked)}
    label={label} />
}

export default Checkbox
