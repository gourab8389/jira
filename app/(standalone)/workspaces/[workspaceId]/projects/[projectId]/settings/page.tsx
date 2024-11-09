import { getCurrent } from '@/features/auth/queries';
import { redirect } from 'next/navigation';

const ProjectIdSettingsPage = async () => {
    const user = await getCurrent();

    if (!user) redirect("/sign-in");
        
  return (
    <div className='w-full lg:max-w-xl'>
    </div>
  )
}

export default ProjectIdSettingsPage
