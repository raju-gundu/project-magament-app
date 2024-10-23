import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import ProjectsSidebar from "./components/ProjectsSidebar";
import { useState } from "react";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState,setProjectState]=useState({
    selectedProjectId : undefined,
    projects : []
  });

  function handleDelete(){
    setProjectState( prevState => {

      return {
        ...prevState,
        selectedProjectId : undefined,
        projects: prevState.projects.filter((project)=> project.id!==prevState.selectedProjectId),
      }
    }
      
    )
  }

  function handleAddNewProject(){
    setProjectState( prevState => {
      return {
        ...prevState,
        selectedProjectId : null,
      }
    }
      
    )
  }
  function handleCancelAddProject(){
    setProjectState( prevState => {
      return {
        ...prevState,
        selectedProjectId : undefined,
      }
    }
      
    )
  }
  function handleAddProject(projectData){
    setProjectState( prevState => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      }
      return {
        ...prevState,
        selectedProjectId : undefined,
        projects: [...prevState.projects,newProject],
      }
    })
  }

  function handleSelectProject(projectId){
    setProjectState( prevState => {
      return {
        ...prevState,
        selectedProjectId : projectId,
      }
    })
  }

  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId);
  let content = <SelectedProject project={selectedProject} onDelete={handleDelete}/> ;
  if(projectState.selectedProjectId === null){
    content=<NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
  } else if(projectState.selectedProjectId === undefined){
    content=<NoProject onStartAddProject={handleAddNewProject}/>
  } 
  
  return (
    <>
      <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleAddNewProject} projects={projectState.projects} onSelectProject={handleSelectProject} selectedProjectId={projectState.selectedProjectId}/>    
      {content}
      </main>
      
    </>
  );
}

export default App;
