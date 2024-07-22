import { string } from 'yup';
import { useState } from 'react';

import { FormControl } from '@@/form-components/FormControl';
import { Input } from '@@/form-components/Input';

export function NameField({
  value,
  error,
  placeholder,
  onChange,
}: {
  value?: string;
  error?: string;
  placeholder?: string;
  onChange: (value: string) => void;
}) {
  const [nameValue, setNameValue] = useState('');
  return (
    <FormControl
      label="Name"
      loadingText={value}
      inputId="name-input"
      errors={error}
    >
      <Input
        placeholder={placeholder}
        id="name-input"
        value={nameValue}
        onChange={(e) => {
          onChange(e.target.value);
          setNameValue(e.target.value);
        }}
        data-cy="container-name-input"
      />
    </FormControl>
  );
}

export function nameValidation() {
  return string().default('');
}
