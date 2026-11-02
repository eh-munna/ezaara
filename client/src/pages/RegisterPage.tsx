import { Link } from 'react-router';
import AuthCard from '../features/auth/components/AuthCard';
import RegisterForm from '../features/auth/components/RegisterForm';

export default function RegisterPage() {
  return (
    <AuthCard title="Create account" subtitle="Join ezaara in a minute.">
      <RegisterForm />
      <p className="mt-6 text-center text-sm text-neutral-600">
        Already have an account?{' '}
        <Link to="/login" className="font-medium text-black underline">
          Log in
        </Link>
      </p>
    </AuthCard>
  );
}
