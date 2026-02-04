import { useState } from 'react'
import Header from './portfoliocomponents/Header';
import SearchBar from './portfoliocomponents/SearchBar';
import ProjectForm from './portfoliocomponents/ProjectForm';
import ProjectList from './portfoliocomponents/ProjectList';

function App() {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm]= useState("");
  const addProject = (project) => {
    setProjects([...projects, project])
  };
const filteredProjects = projects.filter((project) => 
  project.title.toLowerCase().includes(searchTerm.toLowerCase())
);
  return (
    
      <div>
        <Header title="Personal Project Showcase App" />
        <ProjectForm addProject={addProject} />
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
         <ProjectList projects={filteredProjects} />
        </div>
  )
}

export default App;
