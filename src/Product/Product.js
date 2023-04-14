import '../Product/Product.css';
import { apiClient } from '../Api/ApiClient';

import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';


export function Product() {

  const navigate = useNavigate();
  const var1 = localStorage.getItem("loginuser");
  console.log(var1);
  const var2 = JSON.parse(var1);

  const [product, setProduct] = useState([]);
  useEffect(() => {
    const getProducts = async (event) => {
      // event.preventDefault();
      const res = await apiClient.get('/displayproduct');
      console.log(res.data);
      setProduct(res.data);
    };

    getProducts();
  }, []);
    
   
  function handlerDelete(Id) {
    console.log(Id);
    // alert(Id);
    let promise1 = apiClient.delete(`/deleteproduct/${Id}`);
    promise1.then((response) => {
      console.log(Id);
      const result = response.data;
      alert("product deleted susccesfully");
      navigate("/product");
      console.log(result);
    });
  }




  function handler2(e){
		// const { name, value } = e.target
	
    navigate('/updateproduct', { state: e });
        // setCart(e)
	}
  function handler3(e){
		// const { name, value } = e.target
	
    navigate('/addproduct');
        // setCart(e)
	}

  return (
    <>

       <ink href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script> 



      <html lang="en">
        <head>

          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <title>eCommerce Product Detail</title>
          <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet" />

        </head>

        <body>
        <div class="preview-pic tab-content">
                            <div class="tab-pane active" id="pic-1">
                        <h2> 
                        {var2==null?"": var2.role==="admin" ||  var2.role==="manager" ? <a  id="adminurl" href="addproduct" class="link-secondary">Add_Product</a>:""}                      
                            </h2> 
                          </div>
                          </div>
       
          {product.map(p => {
            return (
              <>
                <div class="container1">
                  <div class="card">
                    <div class="container-fliud">
                      <div class="wrapper row">
                        <div class="preview col-md-6">

                          <div class="preview-pic tab-content">
                            <div class="tab-pane active" id="pic-1">
                              <img src={"data:" + p.image.type + ";charset=utf-8;base64," + p.image.imageData} alt="Description of the image" />
                            </div>
                          </div>
                        </div>
                        <div class="details col-md-6">
                          <h3 class="product-title">{p.productId + "." + p.productName}</h3>

                          <p class="product-description">{p.productDescription}</p>
                          <h4 class="price">current price: <span>{p.productPrice}</span></h4>
                          <h4 class="sizes">Product-Quantity:
                            <span class="size" data-toggle="tooltip" title="small">{p.productUnit}</span>
                          </h4>
                          {var2==null?"": var2.role==="admin" ||  var2.role==="manager" ? <button class="add-to-cart btn btn-default"
									             	onClick={() => handler2(p)}
									            >update_Product</button>:""} 
                          
                           {/* <button class="add-to-cart btn btn-default"
									             	onClick={() => handler3(p)}
									            >Add_Product</button> */}
                     {var2==null?"": var2.role==="admin" ||  var2.role==="manager" ? 
                      <button class="add-to-cart btn btn-default"
                      onClick={() =>handlerDelete(p.productId)}
                   >Delete_Product</button>:""} 
                          
                          {/* <Link to='updateproduct' params={{myObj: p}}> Click </Link> */}
                           {/* <a  id="adminurl" href="updateproduct" class="link-secondary">update_Product</a><br /> */}
                         
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )

          })
          
          }


        </body>
      </html>


    </>
  )
}