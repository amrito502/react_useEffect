function Registration() {
  const onRegistrationSubmit = async (event)=>{
    event.preventDefault();
    let formData = new FormData(event.target);
    let name = formData.get('name');
    let email = formData.get('email');
    let address = formData.get('address');
    let password = formData.get('password');
    let postBody = {
      name:name,
      email:email,
      address:address,
      password
    }

    console.log('====================================');
    console.log(postBody);
    console.log('====================================');
  }
  return (
    <div>
    <div className="row card p-5 mt-5">
      <div className="col-md-5 shadow">
        <h3 className="mt-5">Login Form</h3>
        <form onSubmit={onRegistrationSubmit}>
          <div className="form-group mt-4">
            <label htmlFor="name">Name</label>
            <input required type="text" name="name" id="name" className="form-control mt-2" placeholder="Name" />
          </div>
          <div className="form-group mt-4">
            <label htmlFor="email">Email</label>
            <input required type="email" name="email" id="email" className="form-control mt-2" placeholder="Email" />
          </div>
          <div className="form-group mt-4">
            <label htmlFor="address">Address</label>
            <input required type="text" name="address" id="address" className="form-control mt-2" placeholder="Address" />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="password">Password</label>
            <input required type="password" name="password" id="password" className="form-control mt-2" placeholder="Password" />
          </div>
          <div className="form-group mt-3">
            <input type="submit" value={'Registration'} className="btn btn-success mb-4"/>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
}

export default Registration;
