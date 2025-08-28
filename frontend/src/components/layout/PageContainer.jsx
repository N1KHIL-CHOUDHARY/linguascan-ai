import { cn } from '@/lib/utils';

export function PageContainer({ children, className }) {
  return (
    <div className={cn('container mx-auto px-4', className)}>
      {children}
    </div>
  );
}

export default PageContainer;
