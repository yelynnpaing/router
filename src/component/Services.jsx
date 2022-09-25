// import React from 'react';
// import {useLocation, useNavigate} from "react-router-dom";
//
// const Services = () => {
//   const location = useLocation ();
//   console.log(location.state?.text)
//   const nav = useNavigate();
//   const handleClick = () => {
//     nav (-1)
//   }
//   return (
//     <div className='container'>Services and text is : {location.state?.text}
//       <button onClick={handleClick}>Back</button>
//     </div>
//   )
// }
//
// export default Services

import React from 'react';
import {Outlet , Link} from "react-router-dom";

function Services(props) {
  return (
      <div>
          <div className="nav">
              <Link to = "/services">One</Link>
              <Link to = "/services/two">Two</Link>
              <Link to = "/services/three">Three</Link>
          </div>
        <p>Services : </p>
        <Outlet />
      </div>
  );
}

export default Services;