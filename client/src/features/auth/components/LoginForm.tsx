import { useState, type FormEvent } from 'react';
import type { LoginInput } from '../types';
import TextField from './TextField';

type Errors = Partial<Record<keyof LoginInput, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate({ email, password }: LoginInput): Errors {
  const errors: Errors = {};
  if (!EMAIL.test(email)) errors.email = 'Enter a valid email address.';
  if (!password) errors.password = 'Enter your password.';
  return errors;
}

export default function LoginForm() {
  const [values, setValues] = useState<LoginInput>({ email: '', password: '' });
  const [errors, setErrors] = useState<Errors>({});

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next = validate(values);
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    // Server login is not connected yet; hook the auth API in here later.
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <TextField
        label="Email"
        name="email"
        type="email"
        autoComplete="email"
        value={values.email}
        error={errors.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
      />
      <TextField
        label="Password"
        name="password"
        type="password"
        autoComplete="current-password"
        value={values.password}
        error={errors.password}
        onChange={(e) => setValues({ ...values, password: e.target.value })}
      />
      <button
        type="submit"
        className="rounded bg-black px-4 py-3 text-sm font-semibold text-white hover:bg-neutral-800"
      >
        Log in
      </button>
    </form>
  );
}
