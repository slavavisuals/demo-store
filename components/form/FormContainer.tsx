'use client';
import { useActionState } from 'react';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { actionFunction } from '@/utils/types';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { Skeleton } from '../ui/skeleton';

const initialState = {
  message: '',
};

function FormContainer({
  action,
  type, // New prop to distinguish between actions
  children,
}: {
  action: actionFunction;
  type: 'create' | 'delete' | 'update' | 'update_image'; // Type prop to specify action type
  children: React.ReactNode;
}) {
  const [state, formAction, isPending] = useActionState(action, initialState);
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    if (state.message) {
      console.log('state message inside useEffect IF clause:', state.message);
      toast({ description: state.message });

      const timer = setTimeout(() => {
        if (type === 'create') {
          // Redirect for creation
          redirect('/admin/products');
        } else if (type === 'delete') {
          // Refresh for deletion
          router.refresh();
        }
      }, 100); // Adjust timing as needed

      return () => clearTimeout(timer);
    }
  }, [state.message, type, router]);

  return (
    <form action={formAction}>
      {isPending && type !== 'delete' ? (
        <Skeleton className='h-48 w-full' />
      ) : (
        // <div className='text-center text-gray-500'>Processing...</div>
        children
      )}
    </form>
  );
}
export default FormContainer;
