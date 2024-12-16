import { Icon } from '@iconify/react/dist/iconify.js';

export function LoadingScreen() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Icon icon="line-md:loading-twotone-loop" />
    </div>
  );
}
