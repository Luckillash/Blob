import { Canvas } from "@react-three/fiber"
import Blob from "./blob/Blob"
import "./App.css"

function App() {

  return (
    
    <div className="container">

      <Canvas camera={{position: [0.0, 0.0, 8.0]}}>

        <Blob />

      </Canvas>

    </div>

  )

}

export default App
