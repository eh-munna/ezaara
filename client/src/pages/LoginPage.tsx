import { Link } from 'react-router';
import AuthCard from '../features/auth/components/AuthCard';
import LoginForm from '../features/auth/components/LoginForm';

export default function LoginPage() {
  return (
    <AuthCard title="Log in" subtitle="Welcome back to ezaara.">
      <LoginForm />
      <p className="mt-6 text-center text-sm text-neutral-600">
        Don&apos;t have an account?{' '}
        <Link to="/register" className="font-medium text-black underline">
          Register
        </Link>
      </p>
    </AuthCard>
  );
}
