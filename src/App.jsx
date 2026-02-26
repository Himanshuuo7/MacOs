import { useState } from "react";
import "./app.scss"
import Dock from "./components/Dock";
import Nav from "./components/Nav";
import Cli from "./components/windows/Cli";
import Github from "./components/windows/Github";
import Note from "./components/windows/Note";
import Resume from "./components/windows/Resume";
import Spotify from "./components/windows/Spotify";


const App = () => {

  const [windowState, setWindowState] = useState({
    github:false,
    note: false,
    spotify:false,
    resume :false,
    cli:false
  })


  return (
    <main>
      <Nav/>
      <Dock windowState={windowState} setwindowState={setWindowState}/>
      {windowState.github && <Github windowName ="github" windowState={windowState} setwindowState={setWindowState}/>}
      {windowState.note && <Note windowName="note" windowState={windowState} setwindowState={setWindowState}/>}
      {windowState.resume && <Resume windowName="resume" windowState={windowState} setwindowState={setWindowState}/>}
      {windowState.spotify && <Spotify windowName="spotify" windowState={windowState} setwindowState={setWindowState}/>}
      {windowState.cli && <Cli windowName="cli" windowState={windowState} setwindowState={setWindowState}/>}
    </main>
  );
}

export default App;
