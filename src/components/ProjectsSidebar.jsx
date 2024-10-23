import NewProject from "./NewProject";
import Button from "./Button";
export default function ProjectsSidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="bg-stone-900 text-stone-50 w-1/3 px-8 py-16 md:w-72 rounded-s-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
            let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"
            if(project.id === selectedProjectId){
                cssClasses += "text-stone-200 bg-stone-800"
            }else{
                cssClasses += 'text-stone-400'
            }
          return (
            <li key={project.id} className="mb-8">
              <button
                onClick={()=> onSelectProject(project.id)}
                className={cssClasses}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
