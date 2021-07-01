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
      <div className="container flex flex-vertical">
        <ProjectDescription />
        <ProjectStats/>
        <ProjectAbout/>
      </div>
    </AppProvider>
  );
}

export default App;
