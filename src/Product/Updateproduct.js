import { useState, useEffect } from "react";
import axios from "axios";
import {useLocation } from "react-router-dom";
import { apiClient } from "../Api/ApiClient";

export function Updateproduct() {
  const var1 = localStorage.getItem("rolecheck");
  const var2 = JSON.parse(var1);
  // console.log("for role", var2.role);
  const [category, setCategory] = useState([]);

 
  const {state} = useLocation();
const s = state;
// const [p1, setPro] = useState({});
//  setPro(s);
//  console.log(s);





  useEffect(() => {
    const getCategory = async () => {
      const res = await apiClient("/getcategories");
      console.log(res.data);
      setCategory(res.data);
    };

    getCategory();
  }, []);

  const [addproduct, setAddproduct] = useState(s
//     {
//     productName: "",
//     productDescription: "",
//     productPrice: "",  
//     productUnit: "",
//     // productCategory: "",
//     categoryId: "",
//   }
  );
 
    
  function handler(e) {
    const { name, value } = e.target;
    setAddproduct({
      ...addproduct,
      [name]: value,
    });
    console.log("addproduct", addproduct);
  }

  let imageData;
   
  // function handler(e) {
  //   const { name, value } = e.target;
  //   setAddproduct({
  //     ...addproduct,
  //     [name]: value,
  //   });  
  // } 

  const handleUploadClick = (event) => {
    const file = event.target.files[0];
    imageData = new FormData();
    
    imageData.append("image", file);
    // imageData.append('product',JSON.stringify(addproduct));
    console.log(addproduct.productId)
    // imageData.append("productId", addproduct.productId);
    // imageData.append("productName", addproduct.productName);
    // imageData.append("productDescription", addproduct.productDescription);
    // imageData.append("productPrice", addproduct.productPrice);
    // imageData.append("productUnit", addproduct.productUnit);
    // imageData.append("categoryId", addproduct.categoryId);
    console.log("addproduct", addproduct);

    console.log(file);
    console.log(imageData);
  };

  const uploadImageWithAdditionalData = (e) => {
    e.preventDefault();
    
    imageData.append("productId", addproduct.productId);
    imageData.append("productName", addproduct.productName);
    imageData.append("productDescription", addproduct.productDescription);
    imageData.append("productPrice", addproduct.productPrice);
    imageData.append("productUnit", addproduct.productUnit);
    console.log("sss")
    console.log("addproduct", addproduct);
    let promise1 = apiClient.post("/updateproduct", imageData, {
      headers: {
        "Content-Type": `multipart/form-data`,
      },
    });

    promise1.then((response) => {
      alert("Product Added Succefully!!!!!");
      window.location.reload(false);
      console.log(response.data);
    });
    // dispatch(uploadImage(imageData));  addproduct
  };

  return (
    <>
      <center className="addproduct">
        <form class="form-horizontal">
          <fieldset>
            <legend>Update-PRODUCT</legend>
            
            <div class="form-group">
              <label class="" for="product_name">
                PRODUCT Image
              </label>
              <div class="col-md-4">
              <img src={"data:" + s.image.type + ";charset=utf-8;base64," + s.image.imageData} alt="Description of the image" />
              </div>
            </div>

            <div class="form-group">
              <label class="" for="product_name">
                PRODUCT NAME
              </label>
              <div class="col-md-4">
                <input
                  type="text"
                  id="productName"
                  name="productName"
                  placeholder={s.productName}
                  autoFocus="on"
                  value={addproduct.productName}
                  onChange={handler}
                />
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-4 control-label" for="product_name_fr">
                PRODUCT DESCRIPTION
              </label>
              <div class="col-md-4">
                <input
                  type="text"
                  id="productDescription"
                  name="productDescription"
                  placeholder={s.productDescription}
                  value={addproduct.productDescription}
                  onChange={handler}
                />
              </div>
            </div>

            {/* <!-- Select Basic --> */}
            <div class="form-group">
              <label class="col-md-4 control-label" for="product_categorie">
                PRODUCT PRICE
              </label>
              <div class="col-md-4">
                <input
                  type="text"
                  id="productPrice"
                  name="productPrice"
                  placeholder={s.productPrice}
                  value={addproduct.productPrice}
                  onChange={handler}
                />
              </div>
            </div>
            {/* <!-- Text input--> */}
            <div class="form-group">
              <label class="col-md-4 control-label" for="available_quantity">
                PRODUCT QUANTITY
              </label>
              <div class="col-md-4">
                <input
                  type="text"
                  id="productUnit"
                  name="productUnit"
                  placeholder={s.productUnit}
                  value={addproduct.productUnit}
                  onChange={handler}
                />
              </div>
            </div>

            {/* <div class="form-group">
                            <label class="col-md-4 control-label" for="available_quantity">PRODUCT category</label>
                            <div class="col-md-4">
                                <input type="text" id="productCategory" name="productCategory"
                                    value={addproduct.productCategory}
                                    onChange={handler}
                                />

                            </div>
                        </div> */}

            {/* <!-- Textarea --> */}

            <div class="form-group">
              <label class="col-md-4 control-label" for="categoryName">
                PRODUCT QUANTITY
              </label>
              <div class="col-md-4">
                <input
                  type="text"
                  id="categoryName"
                  name="categoryName"
                  value={s.category.categoryName}
                />
              </div>
            </div>


            {/* <div class="form-group">
              <label class="col-md-4 control-label" for="product_description">
                PRODUCT CATEGORY
              </label>
              <div class="col-md-4">
                <select
                  id="categoryId"
                  name="categoryId"
                  value={addproduct.categoryId}
                  onChange={handler}
                >
                    <option  value={null}>Select category</option>
                  {category.map((cat) => {
                    return (
                      <option value={cat.categoryId}>{cat.categoryName}</option>
                    );
                  })}
                </select>
              </div>
            </div> */}
            <h3> to change image</h3>
            <input
              accept="image/*"
              id="upload-profile-image"
              type="file"
              onChange={handleUploadClick}
            />
            <div class="form-group">
              <label class="col-md-4 control-label" for="singlebutton"></label>
              <div class="col-md-4">
                <button
                  id="addproductbtn"
                  onClick={uploadImageWithAdditionalData}
                >
                  Upadate
                </button>
              </div>
            </div>
            <div id="backToAdmin124">
              <button>
                {var2.role === "admin" ? (
                  <a href="/admin">Back-To-Admin-Portal</a>
                ) : (
                  <a href="/manager">Back-To-Manager-Portal</a>
                )}
              </button>
            </div>
          </fieldset>
        </form>
      </center>
    </>
  );
}
