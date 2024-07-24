import React, { useEffect, useState } from "react";
import axios from "axios";

import { isAuthenticated } from "../../auth";
import '../../style.css'

const ContributorTable = () => {

  const [data, setData] = useState([]);

  useEffect(() => {

    const { token } = isAuthenticated();
    const config = {

      headers: { Authorization: `Bearer ${token}` }
    };
    const dataFetch = async () => {
      try {
        const res = await axios.get(`/api/contributor`, config);

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

        <h1>Contributors</h1>
        <table>
          <thead>
            <tr>

              {/* <th>id</th> */}
              <th>Name</th>
              <th>Contributon</th>

            </tr>
          </thead>
          <tbody>
            {
              data?.map((e) => {
                return (<tr>
                 
                  <td>{e?.user?.firstname}  </td>
                  <td>{e.count}</td>

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

export default ContributorTable;
