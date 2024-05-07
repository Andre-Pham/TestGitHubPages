
import './App.css'
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Hello World</h1>
      <div className="card">
        <button onClick={() => {
          navigate("/education", { replace: true })
        }}>
          Navigate!
        </button>
      </div>
    </div>
  )
}

export default App
