import { FC } from 'react';
import { Textarea as MantineTextarea, TextareaProps } from '@mantine/core';
import classes from './textarea.module.scss';

interface IReg {
  req?: any;
}

const Textarea: FC<IReg & TextareaProps> = ({ req, ...props }) => {
  return <MantineTextarea {...req} radius="xl" classNames={classes} {...props} />;
};

export default Textarea;
