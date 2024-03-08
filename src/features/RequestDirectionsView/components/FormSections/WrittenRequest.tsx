import { FC } from 'react';

import { Text } from '@mantine/core';
import Textarea from '../../../../components/Textarea/Textarea';

import { RequestFormState } from '../../hooks/useForm';
import { Control, Controller } from 'react-hook-form';

interface WrittenRequestProps {
  control: Control<RequestFormState, any>;
}

const WrittenRequest: FC<WrittenRequestProps> = ({ control }) => {
  return (
    <>
      <Text fz={20} fw={700}>
        Напишіть звернення{' '}
        <Text fz={20} fw={700} span c="red">
          *
        </Text>
      </Text>
      <Controller
        name={'text'}
        control={control}
        render={({ field, fieldState }) => (
          <Textarea
            value={field.value}
            onChange={field.onChange}
            error={fieldState.error && fieldState.error.message}
            styles={{
              input: {
                minHeight: '476px',
              },
            }}
            placeholder="Введіть свій запит..."
          />
        )}
      />
    </>
  );
};

export default WrittenRequest;
