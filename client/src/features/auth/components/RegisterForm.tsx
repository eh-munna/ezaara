import { useState, type FormEvent } from 'react';
import type { RegisterInput } from '../types';
import TextField from './TextField';

type Values = RegisterInput & { confirmPassword: string };
type Errors = Partial<Record<keyof Values, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(v: Values): Errors {
  const errors: Errors = {};
  if (!v.name.trim()) errors.name = 'Enter your name.';
  if (!EMAIL.test(v.email)) errors.email = 'Enter a valid email address.';
  if (v.password.length < 8) {
    errors.password = 'Password must be at least 8 characters.';
  }
  if (v.confirmPassword !== v.password) {
    errors.confirmPassword = 'Passwords do not match.';
  }
  return errors;
}

export default function RegisterForm() {
  const [values, setValues] = useState<Values>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<Errors>({});

  const set = (key: keyof Values) => (e: { target: { value: string } }) =>
    setValues({ ...values, [key]: e.target.value });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next = validate(values);
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    // Server registration is not connected yet; hook the auth API in here later.
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <TextField
        label="Name"
        name="name"
        autoComplete="name"
        value={values.name}
        error={errors.name}
        onChange={set('name')}
      />
      <TextField
        label="Email"
        name="email"
        type="email"
        autoComplete="email"
        value={values.email}
        error={errors.email}
        onChange={set('email')}
      />
      <TextField
        label="Password"
        name="password"
        type="password"
        autoComplete="new-password"
        value={values.password}
        error={errors.password}
        onChange={set('password')}
      />
      <TextField
        label="Confirm password"
        name="confirmPassword"
        type="password"
        autoComplete="new-password"
        value={values.confirmPassword}
        error={errors.confirmPassword}
        onChange={set('confirmPassword')}
      />
      <button
        type="submit"
        className="rounded bg-black px-4 py-3 text-sm font-semibold text-white hover:bg-neutral-800"
      >
        Create account
      </button>
    </form>
  );
}
