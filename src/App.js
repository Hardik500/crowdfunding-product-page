import './App.scss';

import AppProvider from './components/Context';

import Navbar from './components/Navbar';
import ProjectDescription from './components/ProjectDescription';
import ProjectStats from './components/ProjectStats';
import ProjectAbout from './components/ProjectAbout';

function App() {
  return (
    <AppProvider>
      <div className="navbar-container">
        <Navbar />
      </div>
      <ProjectDescription />
      <ProjectStats/>
      <ProjectAbout/>
    </AppProvider>
  );
}

export default App;
