import product1img from "../assets/product.jpg";
function CartList() {
  let data = [
    {
      title: "MacBook Air M1 8/256GB",
      short_des: "MacBook Air M1 8/256GB 13-inch Space Gray",
      price: "94000",
      image: product1img,
    },
    {
      title: "MacBook Air M1 8/256GB",
      short_des: "MacBook Air M1 8/256GB 13-inch Space Gray",
      price: "94000",
      image: product1img,
    },
    {
      title: "MacBook Air M1 8/256GB",
      short_des: "MacBook Air M1 8/256GB 13-inch Space Gray",
      price: "94000",
      image: product1img,
    },
    {
      title: "MacBook Air M1 8/256GB",
      short_des: "MacBook Air M1 8/256GB 13-inch Space Gray",
      price: "94000",
      image: product1img,
    },
    {
      title: "MacBook Air M1 8/256GB",
      short_des: "MacBook Air M1 8/256GB 13-inch Space Gray",
      price: "94000",
      image: product1img,
    },
    {
      title: "MacBook Air M1 8/256GB",
      short_des: "MacBook Air M1 8/256GB 13-inch Space Gray",
      price: "94000",
      image: product1img,
    },
    {
      title: "MacBook Air M1 8/256GB",
      short_des: "MacBook Air M1 8/256GB 13-inch Space Gray",
      price: "94000",
      image: product1img,
    },
    {
      title: "MacBook Air M1 8/256GB",
      short_des: "MacBook Air M1 8/256GB 13-inch Space Gray",
      price: "94000",
      image: product1img,
    },
    {
      title: "MacBook Air M1 8/256GB",
      short_des: "MacBook Air M1 8/256GB 13-inch Space Gray",
      price: "94000",
      image: product1img,
    },
    {
      title: "MacBook Air M1 8/256GB",
      short_des: "MacBook Air M1 8/256GB 13-inch Space Gray",
      price: "94000",
      image: product1img,
    },
    {
      title: "MacBook Air M1 8/256GB",
      short_des: "MacBook Air M1 8/256GB 13-inch Space Gray",
      price: "94000",
      image: product1img,
    },
    {
      title: "MacBook Air M1 8/256GB",
      short_des: "MacBook Air M1 8/256GB 13-inch Space Gray",
      price: "94000",
      image: product1img,
    },
  ];
  return (
    <div className="container">
      <div className="row mt-5">
        <h1 className="mb-4">Cart Product Lists : </h1>
        {data.map((item, index) => {
          return (
            <div className="col-md-3">
              <div className="card mb-3 p-2">
                <img className="card-img-top" src={item.image} alt="img" />
                <div className="card-body">
                  <h6>{item.title}</h6>
                  <strong>BDT : {item.price}</strong>
                  <p>{item.short_des}</p>
                    <a href="#" className="btn btn-sm btn-danger w-100">
                      Remove Cart
                    </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CartList;
