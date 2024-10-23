import noProjectImg from '../assets/no-projects.png';
import Button from './Button';
export default function NoProject({onStartAddProject}) {
    return (
        <div className="mt-24 text-center w-2/3">
            <img src={noProjectImg} alt="no project is selected" className='w-6 h-6 object-contain mx-auto' />
            <h2 className='text-xl font-bold text-stone-500 my-4'>No project selected</h2>
            <p className='text-stone-500 mb-4'>Select a project</p>
            <p className='mt-8'>
            <Button onClick={onStartAddProject}>Create new project</Button>
            </p>
        </div>
    );
}