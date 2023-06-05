import { useState, useContext } from "react";
import AuthContext from "./AuthContext";
import { Link } from "react-router-dom";
function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { registerUser } = useContext(AuthContext);

  const handleSubmit = async e => {
    e.preventDefault();
  if (password === password2) {
    registerUser(username, password, password2, first_name, last_name, email);
    console.log("User registered!")
  } else {
    setErrorMessage("Passwords do not match!");
  };
  }
  const handlePasswordChange = e => {
    setPassword(e.target.value);
    setErrorMessage("");
  };

  const handlePassword2Change = e => {
    setPassword2(e.target.value);
    if (password !== e.target.value) {
      setErrorMessage("Passwords do not match!");
    } else {
      setErrorMessage("");
    }
  };    

  return (
    <section className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
      <div className="Auth-form-content">
        <h1 className="Auth-form-title">Register</h1>
        <div className="form-group mt-3">
          <label htmlFor="username" style={{padding:'10px'}}>Username</label>
          <input
            style={{borderRadius:'10px', padding:'10px', float:'right'}}
            type="text"
            id="username"
            className="form-control mt-1"
            onChange={e => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
        </div>
        <br />
        <div className="form-group mt-3">
          <label htmlFor="first-name" style={{padding:'10px'}}>First Name</label>
            <input
              style={{borderRadius:'10px', padding:'10px', float:'right'}}
              type="text"
              id="first-name"
              className="form-control mt-1"
              onChange={e => setFirstName(e.target.value)}
              placeholder="First Name"
              required
            />
        </div>
        <br />
        <div className="form-group mt-3">
          <label htmlFor="last-name" style={{padding:'10px'}}>Last Name</label>
          <input
            style={{borderRadius:'10px', padding:'10px', float:'right'}}
            type="text"
            id="last-name"
            className="form-control mt-1"
            onChange={e => setLastName(e.target.value)}
            placeholder="Last Name"
            required
          />
        </div>
        <br />
        <div className="form-group mt-3">
          <label htmlFor="email" style={{ padding: "10px" }}>
          Email
          </label>
          <input
            style={{
              borderRadius: "10px",
              padding: "10px",
              float: "right",
            }}
            type="email"
            id="email"
            className="form-control mt-1"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />          
        </div>
        <br />
        <div className="form-group mt-3">
          <label htmlFor="password" style={{padding:'10px'}}>Password</label>
          <input
            style={{borderRadius:'10px', padding:'10px', float:'right'}}
            type="password"
            className="form-control mt-1"
            id="password"
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="confirm-password" style={{padding:'10px'}}>Confirm Password</label>
          <input
            style={{borderRadius:'10px', padding:'10px', float:'right'}}
            type="password"
            id="confirm-password"
            className="form-control mt-1"
            onChange={e => setPassword2(e.target.value)}
            placeholder="Confirm Password"
            required
          />

          <div style={{color:'red', fontSize:'15px'}}>
            <br />
            {errorMessage}
          </div>
        </div>
        
        <div className="d-grid gap-2 mt-3">
        <button style={{cursor:'pointer', background: 'black', borderRadius:'7px', fontSize:'15px', padding:'7px', borderColor:'white', color:'white'}} type="submit" className="btn btn-primary">Register</button>
        <br />
        <Link to='/' style={{color:'lightblue',fontSize:'15px', textDecoration:'underline'}}>
            Have An Account?
        </Link>
        </div>
        </div>
      </form>
    </section>
    
  );
}

export default Register;