function LoginForm() {
  const onLoginSubmit = async (event)=>{
    event.preventDefault();
    let formData = new FormData(event.target);
    let email = formData.get('email');
    let password = formData.get('password');
    let postBody = {
      email:email,
      password:password
    }  

  }
  return (
    <div>
      <div className="row card p-5 mt-5">
        <div className="col-md-5 shadow">
          <h3 className="mt-5">Login Form</h3>
          <form onSubmit={onLoginSubmit}>
            <div className="form-group mt-4">
              <label htmlFor="email">Email</label>
              <input required type="email" name="email" id="email" className="form-control mt-2" placeholder="Email" />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="email">Password</label>
              <input required type="password" name="password" id="password" className="form-control mt-2" placeholder="Password" />
            </div>
            <div className="form-group mt-3">
              <input type="submit" value={'Login'} className="btn btn-success mb-4"/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
