import { useEffect } from "react";
import { useState } from "react";

function CallApi() {
  let [data, setData] = useState(null);

  useEffect(() => {
    callApi();
  }, []);

  const callApi = async () => {
    let response = await fetch(
      "https://ecommerce-api.codesilicon.com/api/ListProductByCategory/1"
    );
    let responseData = await response.json();
    setData(responseData["data"]);
  };

  if (data === null) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="container">
          <div className="row">
            {data.map((item, index) => {
              return (
                <div key={index} className="col-md-3">
                  <div className="card">
                    <img className="card-img-top" src={item.image} alt="" />
                    <div className="card-body">
                      <h5 className="card-title">TK {item.price}</h5>
                      <p className="card-text">{item.brand.brandName}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default CallApi;
