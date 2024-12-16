/* eslint-disable react/no-unescaped-entities */
import { Link } from '@tanstack/react-router';

export function SignUpSentence() {
  return (
    <p className="text-sm text-gray-600">
      Don't have an account?{' '}
      <Link href="/sign-up" className="text-blue-600 hover:underline">
        Sign up
      </Link>
    </p>
  );
}
