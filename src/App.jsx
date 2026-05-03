import { useState } from "react";
import "./App.css";

import Quotes from "./components/Quotes";
import Gifs from "./components/Gifs";
import Lyrics from "./components/Lyrics";
import Sakura from "./components/Sakura";

function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [activeTab, setActiveTab] = useState("quotes");

  if (!isUnlocked) {
    return (
      <>
        <Sakura />
        <div className="app-container locked-screen">
          <button className="unlock-btn" onClick={() => setIsUnlocked(true)}>
            [ // : f e r m a t a]
          </button>
        </div>

        <footer className="app-footer">
          <p>
            a prolongation at the discretion
            <br />
            of the performer of a musical note, chord,
            <br />
            or rest beyond its given time value
          </p>
          <p>&lt; merriam-webster &gt;</p>
        </footer>
      </>
    );
  }

  return (
    <>
      <Sakura />
      <div
        className="app-container main-screen switch-animation"
        key={activeTab}
      >
        <nav className="menu">
          <button
            className={activeTab === "quotes" ? "active" : ""}
            onClick={() => setActiveTab("quotes")}
          >
            Quotes
          </button>
          <button
            className={activeTab === "gifs" ? "active" : ""}
            onClick={() => setActiveTab("gifs")}
          >
            GIFs
          </button>
          <button
            className={activeTab === "lyrics" ? "active" : ""}
            onClick={() => setActiveTab("lyrics")}
          >
            Lyrics
          </button>
        </nav>
        <div className="main-area">
          {activeTab === "quotes" && <Quotes />}
          {activeTab === "gifs" && <Gifs />}
          {activeTab === "lyrics" && <Lyrics />}
        </div>
        <footer className="app-footer">
          <p>made by a real human</p>
          <p>with 🩷 by Souhail</p>
          <p>[ // : f e r m a t a ] - Eien Star</p>
        </footer>
      </div>
    </>
  );
}

export default App;
