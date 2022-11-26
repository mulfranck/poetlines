import { useState } from "react";
import { supabase } from "../supabaseClient";

const Auth = () => {
  // const [ loading, setLoading ] = useState(true);
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('********');
  const [ loading, setLoading ] = useState(false);
  const [ registered, setRegistered ] = useState(false);

  const handleSignUp = async e => {
    e.preventDefault();

    try {
      setLoading(true);
      const { error } = await supabase.auth.signUp(
        {email, password}
      ); // try creating an account with this credentials

      // console.log(data); // lets see what is returned as data

      if ( error ) throw error; // if the service returns an error throw it

    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  }

  const handleLogIn = async e => {
    e.preventDefault();

    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signInWithPassword({email, password});

      if (error) throw error; 
      if (data) {
        supabase.auth.getSession().then(data => {
        console.log(data)
        console.log("trying to login")
        })
      }

    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  }

  const registerOrLogin = (handlerFunction) => {
    return (
      <form onSubmit={e => handlerFunction(e)} className="shadow-sm w-75 p-3 m-auto d-flex flex-column">
            <div className="">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="username@email.com" onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className="">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" name="password" placeholder={password} id="password" onChange={e => setPassword(e.target.value)}/>
            </div>
            {
              !registered &&
              <div className="">
                <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" name="cpassword" placeholder={password} id=""/>
              </div>
            }

            <div className="mt-2 align-self-end">
              <button type="submit" className={ !loading ? "btn btn-primary" : "btn btn-primary opacity-75 disabled"} >{ 
              !loading ?
                registered ? "Log in" :  "Create Account" :
                 "Please wait..." 
              }</button>
            </div>
          </form>
    )
  }

  return (
    <div className="container-fluid" id="Authentication">
      <div className="fix-login-size shadow-sm m-4 w-50 mx-auto">
        <div className="text-center">
          <p>{email}</p>
          <p>{password}</p>
        </div>

        <div className="d-flex" onClick={() => setRegistered(!registered)}>
          <button className={`btn flex-grow-1 ${!registered? "btn-primary" : "btn-outline-primary"}`}>Register</button>
          <button className={`btn flex-grow-1 ${!registered? "btn-outline-primary" : "btn-primary" }`}>Log In</button>

        </div>
        <div className="bg-primary bg-opacity-25 pt-3 mx-0 rounded-bottom">
          { registered ? registerOrLogin(handleSignUp) : registerOrLogin(handleLogIn) }
        </div>
      </div>
    </div>
  )
}


export default Auth;