import { useNavigate } from "react-router-dom"

function Education() {
    const navigate = useNavigate();
    return (
      <div>
        <h1>Education</h1>
        <div className="card">
          <button onClick={() => {
            navigate("/", { replace: true })
          }}>
            Go Back!
          </button>
        </div>
      </div>
    )
  }
  
  export default Education
  