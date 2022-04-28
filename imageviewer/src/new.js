import React from 'react';
import { useState,useEffect } from "react";
import axios from 'axios';

  

function Image() {
    const [users, setUsers] = useState([]);
    const url = "https://jsonplaceholder.typicode.com/photos";
   useEffect(() => {
     axios.get(url).then((response) => {
        setUsers(response.data)
     }).catch((err) => {
        console.log(err)
     })
     }, [users])


return(
    <ul class="cards">{
        users && users.map((user) => {
          return (
          <li class="cards_item">
            <div >
                      <div class="card_image ims"><img src={user.url}/></div>
            </div>
          </li>
             )
            })
        }
      
        </ul>
)
    }
export default Image