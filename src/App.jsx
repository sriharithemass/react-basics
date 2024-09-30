import { useState } from "react";
import "./App.css";
import Header from "./assets/Header/Header";
import ConceptCard from "./assets/ConceptCard/ConceptCard";
import MenuButton from "./assets/MenuButton/MenuButton";
import { concepts } from "./data";
import { menuContent } from "./data";


function App() {
  const [topic, setTopic] = useState("components");

  function selectTopic(selectedTopic) {
    setTopic(selectedTopic);
  }

  return (
    <>
      <Header />
      <div className="concept-box">
        <h1>Basic Concepts</h1>
        <div className="card-box">
          {concepts.map((concept) => (
            <ConceptCard key={concept.name} {...concept} />
          ))}
        </div>
      </div>

      <div className="menu">
        <MenuButton
          isSelected={topic === "components"}
          onSelect={() => selectTopic("components")}
        >
          Components
        </MenuButton>
        <MenuButton
          isSelected={topic === "props"}
          onSelect={() => selectTopic("props")}
        >
          Props
        </MenuButton>
        <MenuButton
          isSelected={topic === "state"}
          onSelect={() => selectTopic("state")}
        >
          State
        </MenuButton>
      </div>

      <div
        className={
          topic === "components" ? "menu-content comp" : "menu-content"
        }
      >
        <p>{menuContent[topic]}</p>
      </div>
    </>
  );
}

export default App;
