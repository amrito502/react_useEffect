function LoginForm() {
  return (
    <div className="container mt-5">
      <div className="row">
      <div className="col-5">
        <h1 className="mb-3">Login Form</h1>
        <div className="card shadow-sm border-1 p-5">
          <h4>Enter Your Email</h4>
          <form>
            <input type="email" name="email" id="email" className="form-control mt-2" placeholder="Enter Your Email" />
            <input type="submit" className="mt-3 btn btn-dark w-100" value={'Next'} />
          </form>
        </div>
      </div>
      </div>
    </div>
  );
}

export default LoginForm;
