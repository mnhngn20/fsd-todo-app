/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { SignInResponse } from '@/entities/authentication';
import {
  Input,
  Button,
  Card,
  CardContent,
  CardFooter,
  Label,
  CardHeader
} from '@/shared/ui';
import { useSignIn } from '../hooks/useSignIn';
import { Header } from './Header';
import { SignUpSentence } from './SignUpSentence';

interface SignInFormProps {
  onSignInSuccess?: (resp: SignInResponse) => void;
  onSignInError?: (error: Error) => void;
}

export function SignInForm({
  onSignInSuccess,
  onSignInError
}: SignInFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [signIn, { loading }] = useSignIn();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const resp = await signIn({ email, password });

      if (resp?.success) {
        onSignInSuccess?.(resp);
      }
    } catch (error) {
      onSignInError?.(error as Error);
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <Header />
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <Button loading={loading} type="submit" className="w-full mt-6">
            Sign In
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <SignUpSentence />
      </CardFooter>
    </Card>
  );
}
