import React from 'react';
import { useState,useEffect } from "react";
import axios from 'axios';
import './image.css';

  

function Image() {
    const [cancellation, setcancellation] = useState([]);
//   const token = localStorage.getItem("token");
  const getCancelMatch = async () => {
    let url = `http://ekycdev.acumengroup.in/touch/upload`;
    const token = "";
    const options = {
      method: "GET",
      url: url.config.url,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    try {
      const response = await axios(options);
      console.log(response);
      setcancellation(response.data)
    } catch (error) {
      alert(error.response.data.error);
    }
  };
  useEffect(() => {
    getCancelMatch();
  }, []);


  return(
    <div class="uk-grid"> 
        {/* {
        cancellation.map((val) => {
          return ( */}
  <img src='http://ekycdev.acumengroup.in//touch//uploads//test//Screenshot%20(248).png' width={200} height={200}/>
  <img src='http://ekycdev.acumengroup.in//touch//uploads//test//Screenshot%20(250).png' width={200} height={200}/>
  <img src='http://ekycdev.acumengroup.in//touch//uploads//test//Screenshot%20(244).png' width={200} height={200}/><br/>
  <img src='http://ekycdev.acumengroup.in//touch//uploads//test//Screenshot%20(249).png' width={200} height={200}/>
  <img src='http://ekycdev.acumengroup.in//touch//uploads//test//screen2.png' width={200} height={200}/>
  <img src='http://ekycdev.acumengroup.in//touch//uploads//test//1024px-React_Native_Logo.png' width={200} height={200}/><br/>
  <img src='http://ekycdev.acumengroup.in//touch//uploads//test//Acumen_logo.png' width={200} height={200}/>
  <img src='http://ekycdev.acumengroup.in//touch//uploads//test//rn_image_picker_lib_temp_d946852f-5595-41da-880f-96943dca3428.jpg' width={200} height={200}/>
  <img src='http://ekycdev.acumengroup.in//touch//uploads//test//Like-Button-PNG.png' width={200} height={200}/><br/>
  <img src='http://ekycdev.acumengroup.in//touch//uploads//test//IMG_20211028_122309.jpg' width={200} height={200}/>
                    
        {/* //       )
        //     })
        //  }  */}
        </div>

)
    }
export default Image