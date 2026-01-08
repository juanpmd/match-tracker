'use client';

import { useRouter } from 'next/navigation';
import { useState, ChangeEvent, FormEvent } from 'react';
// import Link from 'next/link';
// import { authClient } from '@/lib/auth-client';
// import { isValidEmail } from '@/lib/utils';
// import type { Error } from '@/lib/types';
import styles from './signin-form.module.css';

type Data = {
  email: string;
  password: string;
  error: Error | null;
  loading: boolean;
};

// function validate(data: Data) {
//   if (!data.email) return { message: 'Email address is required.' };
//   if (!isValidEmail(data.email)) return { message: 'Enter a valid email address.' };
//   if (!data.password) return { message: 'Password is required.' };

//   return null;
// }

export default function () {
  const router = useRouter();

  const [data, setData] = useState<Data>({
    email: '',
    password: '',
    error: null,
    loading: false,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData({ ...data, error: null, [name]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const error = validate(data);
    if (error) return setData({ ...data, error });

    setData({ ...data, loading: true });

    const result = await authClient.signIn.email({
      email: data.email,
      password: data.password,
    });

    if (result.error) {
      const message = result.error?.message ?? 'Something went wrong';
      return setData({ ...data, error: { message }, loading: false });
    }

    router.push('/dashboard');
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <label className={styles.label}>
        <span>Name</span>

        <input
          className={styles.input}
          disabled={data.loading}
          name="name"
          onChange={handleChange}
          placeholder="John Doe"
          type="name"
          value={data.name}
        />
      </label>

      {data.error && (
        <p>{data.error.message}</p>
      )}

      <button
        className={styles.button}
        disabled={data.loading}
        type="submit"
      >
        {data.loading ? 'Creating...' : 'Create'}
      </button>
    </form>
  );
}
