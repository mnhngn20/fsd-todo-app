/* eslint-disable @conarti/feature-sliced/public-api */
import { createLazyFileRoute } from '@tanstack/react-router';
import { HomePage } from '@/pages/home';

export const Route = createLazyFileRoute('/')({
  component: HomePage
});
