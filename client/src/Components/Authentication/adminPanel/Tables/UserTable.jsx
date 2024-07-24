import React, { useEffect, useState } from "react";
import axios from "axios";

import { isAuthenticated } from "../../auth";
import '../../style.css'

const UserTable = () => {

  const [data, setData] = useState([]);
  
  useEffect(() => {
    const { token } = isAuthenticated();
    const config = {

      headers: { Authorization: `Bearer ${token}` }
    };
    const dataFetch = async () => {
      try {
        const res = await axios.get(`/user/all`,config);

        if (res.data) {
          setData(res.data);
          
        }
      }
      catch (error) {
        console.log(error);
      }
    }
    dataFetch();

  }, []);

  return (
    <>
      <div className="cont">

        <h1>Users</h1>
        <table>
          <thead>
            <tr>

              {/* <th>id</th> */}
              <th>Name</th>
              <th>Email</th>
              <th>Active Session</th>
              
            </tr>
          </thead>
          <tbody>
            {
              data?.map((e) => {
              return (<tr>
                {/* <td>{e._id}</td> */}
                
                <td>{e?.firstname}  </td>
                <td>{e?.email}</td>
                <td>{e?.tokens.length}</td>

              </tr>
              
              )

            }
            )

            }
          </tbody>
        </table>

      </div>

    </>
  );
}

export default UserTable;
