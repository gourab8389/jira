import { getCurrent } from '@/features/auth/queries';
import { redirect } from 'next/navigation';
import React from 'react'


interface ProjectIdSettingsPageProps {
    params: {
        projectId: string;
    }
}

const ProjectIdSettingsPage = async ({
    params,
}: ProjectIdSettingsPageProps) => {
    const user = await getCurrent();

    if (!user) redirect("/sign-in");

    const initialValues = {
        projectId: params.projectId,
    }
        
  return (
    <div className='w-full lg:max-w-xl'>
      Settings page id: {initialValues.projectId}
    </div>
  )
}

export default ProjectIdSettingsPage
