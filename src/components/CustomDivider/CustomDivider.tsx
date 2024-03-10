import { Divider, DividerProps } from '@mantine/core';
import { FC } from 'react';

interface ICustomDividerProps extends DividerProps {
  className?: string;
}

const CustomDivider: FC<ICustomDividerProps> = ({ className, ...props }) => {
  return (
    <Divider
      style={{ borderTop: '4px solid #02808F', marginBlock: '24px' }}
      maw={608}
      w="100%"
      className={className}
      {...props}
    />
  );
};

export default CustomDivider;
