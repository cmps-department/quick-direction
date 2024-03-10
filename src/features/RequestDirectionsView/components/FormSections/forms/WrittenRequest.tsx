import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";

import Textarea from "../../../../../components/Textarea/Textarea";

import { RequestFormState } from "../../../hooks/useForm";

const WrittenRequest: FC = () => {
    const form = useFormContext<RequestFormState>();

    return (
        <Controller
            name={"text"}
            control={form.control}
            render={({ field, fieldState }) => (
                <Textarea
                    value={field.value}
                    onChange={field.onChange}
                    error={fieldState.error && fieldState.error.message}
                    minRows={20}
                    styles={{
                        input: {
                            minHeight: 191,
                        },
                    }}
                    placeholder="Введіть свій запит..."
                />
            )}
        />
    );
};

export default WrittenRequest;
