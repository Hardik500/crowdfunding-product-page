import './App.scss';
import Navbar from './components/Navbar';
import ProjectDescription from './components/ProjectDescription';
import ProjectStats from './components/ProjectStats';
import ProjectAbout from './components/ProjectAbout';

function App() {
  return (
    <>
      <div className="navbar-container">
        <Navbar />
      </div>
      <ProjectDescription />
      <ProjectStats/>
      <ProjectAbout/>
    </>
  );
}

export default App;
