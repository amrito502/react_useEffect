import { Link } from "react-router-dom";

function AppNav() {
  return (
    <nav class="navbar navbar-expand-lg bg-success navbar-dark">
  <div class="container">
    <Link class="navbar-brand" to="/">E-commerce</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="/products">Products</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="/cart">Cart-Lists</Link>
        </li>
      </ul>
      <span class="d-flex" role="search">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active active" aria-current="page" to="/login">Login</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Registration</a>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="/verify">Verify User</Link>
        </li>
      </ul>
      </span>
    </div>
  </div>
</nav>
  );
}

export default AppNav;
