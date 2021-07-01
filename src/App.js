import './App.scss';
import Navbar from './components/Navbar';
import ProjectDescription from './components/ProjectDescription';
import ProjectStats from './components/ProjectStats';

function App() {
  return (
    <>
      <div className="navbar-container">
        <Navbar />
      </div>
      <ProjectDescription />
      <ProjectStats/>
    </>
  );
}

export default App;
