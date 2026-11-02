import type { ReactNode } from 'react';

type Props = { title: string; subtitle: string; children: ReactNode };

export default function AuthCard({ title, subtitle, children }: Props) {
  return (
    <div className="mx-auto w-full max-w-md py-8">
      <div className="rounded border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
        <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
        <p className="mt-1 text-sm text-neutral-600">{subtitle}</p>
        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
}
