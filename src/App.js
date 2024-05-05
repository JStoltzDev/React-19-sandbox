import { useState } from "react"
//Components
import UseTransition from "./components/UseTransition"
import UseOptimistic from "./components/UseOptimistic"
import UseActionState from "./components/UseActionState"
import Use from "./components/Use"
import Ref from "./components/Ref"
//Style
import './App.css';

const documentation = {
  "UseTransition": "https://react.dev/blog/2024/04/25/react-19#actions",
  "UseOptimistic": "https://react.dev/blog/2024/04/25/react-19#new-hook-optimistic-updates",
  "UseActionState (and useFormStatus)": "https://react.dev/blog/2024/04/25/react-19#new-hook-useactionstate",
  "Use": "https://react.dev/blog/2024/04/25/react-19#new-feature-use",
  "Ref": "https://react.dev/blog/2024/04/25/react-19#ref-as-a-prop",
}

function App() {
  const [selectedComponent, setSelectedComponent] = useState("")

  return (
    <div className="App">
      <header className="App-header">
        React 19 Sandbox {selectedComponent && `- ${selectedComponent}`}
        <br />
        <div className="component-selector" onChange={(val) => setSelectedComponent(val.target.defaultValue)}>
          <label><input type="radio" name="component" value="UseTransition" /> useTransition </label>
          <label><input type="radio" name="component" value="UseOptimistic" /> UseOptimistic </label>
          <label><input type="radio" name="component" value="UseActionState (and useFormStatus)" /> UseActionState </label>
          <label><input type="radio" name="component" value="Use" /> Use </label>
          <label><input type="radio" name="component" value="Ref" /> Ref </label>
        </div>
      </header>
      <main>
        <div className="sandbox-area-container">
          <div className="sandbox-area">
            {documentation[selectedComponent] && <div><a href={documentation[selectedComponent]} target="_blank" rel="noreferrer">Documentation</a>
              <br />
              <br />
            </div>
            }
            {selectedComponent === "UseTransition" && <UseTransition />}
            {selectedComponent === "UseOptimistic" && <UseOptimistic />}
            {selectedComponent === "UseActionState (and useFormStatus)" && <UseActionState />}
            {selectedComponent === "Use" && <Use />}
            {selectedComponent === "Ref" && <Ref />}

          </div>
        </div>

      </main>
    </div>
  );
}

export default App;
