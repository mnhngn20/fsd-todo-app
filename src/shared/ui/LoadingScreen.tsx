import { Icon } from '@iconify/react';

export function LoadingScreen() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Icon fontSize={20} icon="line-md:loading-twotone-loop" />
    </div>
  );
}
