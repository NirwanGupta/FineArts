import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { isAuthenticated } from "../../auth";
import '../../style.css'

const WorkShopTable = () => {

  const [Event, setEvent] = useState([]);
  const [created, setCreated] = useState(false);
  const { token } = isAuthenticated();
  const config = {

    headers: { Authorization: `Bearer ${token}` }
  };

  const DeleteEvent = async (event) => {
    let id = event.target.value;
    //  console.log(event.target.value);
    
    try {
      const res = await axios.delete(`/api/workshop/${id}`, config);
      if (res.data) {
        window.alert("Deleted Successfully");
        
        await setCreated(true);

      }

    }
    catch (error) {
      console.log(error.response.data);
      window.alert("unable to delete");
    }

  }

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const res = await axios.get(`/api/workshop`);

        if (res.data) {
          setEvent(res.data);

        }
      }
      catch (error) {
        console.log(error);
      }
    }
    dataFetch();

  }, []);

  if (created) {
    window.location.reload();
  }

  return (
    <>
      <div className="cont">

        <h1>Workshops</h1>
        <table>
          <thead>
            <tr>

              {/* <th>id</th> */}
              <th>Image</th>
              <th>Title</th>
              <th>Link</th>
              {isAuthenticated() && <th>update</th>}
              {isAuthenticated() && <th>delete</th>}
            </tr>
          </thead>
          <tbody>
            {Event.map((event) => {
              return (<tr>
                {/* <td>{event._id}</td> */}
                <td> <img src={event.imglink} height="30px" width="auto" alt="" /> </td>
                <td>{event.title}  </td>
                <td><a className="btn" href={event.link} role="button">Link</a></td>

                {isAuthenticated() &&
                  <td><Link to={{ pathname: '/workshop/' + event._id }}><button className="btn">update</button></Link></td>}

                { isAuthenticated() && <td><button onClick={DeleteEvent} className="btn" value={event._id}> Delete </button> </td>
                }
              </tr>)

            })

            }
          </tbody>
        </table>

        {isAuthenticated() && <Link to={{ pathname: '/workshop/new' }}>            <button className="btn">add Workshop</button>          </Link>}

      </div>

    </>
  );
}

export default WorkShopTable;
