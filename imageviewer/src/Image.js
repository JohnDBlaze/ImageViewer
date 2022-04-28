import React from 'react';
import { useState,useEffect } from "react";
import axios from 'axios';

  

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
    <ul class="cards">{
        cancellation.map((val) => {
          return (
          <li class="cards_item">
            <div >
                      <div class="card_image">
                          <img src='http:/ekycdev.acumengroup.in/touch//uploads//test/Screenshot%20(248).png'/>
                      
                      </div>
            </div>
          </li>
             )
            })
        }
      
        </ul>
)
    }
export default Image