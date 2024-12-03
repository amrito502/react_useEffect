function VerifyLoginForm() {
  return (
    <div className="container mt-5">
      <div className="row">
      <div className="col-5">
        <h1 className="mb-3">Verification Form</h1>
        <div className="card shadow-sm border-1 p-5">
          <h4>Enter Verification Code</h4>
          <form>
            <input required type="text" name="verify" id="verify" className="form-control mt-2" placeholder="Enter 6 Digit Verification Code" />
            <input type="submit" className="mt-3 btn btn-dark w-100" value={'Next'} />
          </form>
        </div>
      </div>
      </div>
    </div>
  );
}

export default VerifyLoginForm;
