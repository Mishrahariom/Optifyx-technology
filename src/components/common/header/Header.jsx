import React, { useState } from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);

  const openForm = () => {
    window.open('https://forms.gle/qwEGWnVbuDDWjnMU9', '_blank');
  };

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/courses'>Internship</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/pricing'>All Courses</Link>
            </li>
            <li>
              <Link to='/contact'>Contact us</Link>
            </li>
          </ul>
          <div className='start'>
            <div className='button' style={{ cursor: 'pointer' }} onClick={openForm}>GET INTERNSHIP</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;





// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Head from "./Head";
// import "./header.css";

// const Header = () => {
//   const [click, setClick] = useState(false);

//   const openForm = () => {
//     window.open('https://forms.gle/qwEGWnVbuDDWjnMU9', '_blank');
//   };

//   return (
//     <>
//       <Head />
//       <header>
//         <nav className='flexSB'>
//           <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
//             <li>
//               <Link to='/'>Home</Link>
//             </li>
//             <li>
//               <Link to='/courses'>Internship</Link>
//             </li>
//             <li>
//               <Link to='/about'>About</Link>
//             </li>
//             {/* <li>
//               <Link to='/team'>Team</Link>
//             </li> */}
//             <li>
//               <Link to='/pricing'>All Courses</Link>
//             </li>
//             {/* <li>
//               <Link to='/journal'>Journal</Link>
//             </li> */}
//             <li>
//               <Link to='/contact'>Contact us</Link>
//             </li>
//           </ul>
//           <div className='start'>
//             <div className='button' style={{ cursor: 'pointer' }} onClick={openForm}>GET INTERNSHIP</div>
//           </div>
//           <button className='toggle' onClick={() => setClick(!click)}>
//             {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
//           </button>
//         </nav>
//       </header>
//     </>
//   );
// };

// export default Header;


// import React, { useState } from "react"
// import { Link } from "react-router-dom"
// import Head from "./Head"
// import "./header.css"

// const Header = () => {
//   const [click, setClick] = useState(false)

//   return (
//     <>
//       <Head />
//       <header>
//         <nav className='flexSB'>
//           <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
//             <li>
//               <Link to='/'>Home</Link>
//             </li>
//             <li>
//               <Link to='/courses'>Internship</Link>
//             </li>
//             <li>
//               <Link to='/about'>About</Link>
//             </li>
//             {/* <li>
//               <Link to='/team'>Team</Link>
//             </li> */}
//             <li>
//               <Link to='/pricing'>All Courses</Link>
//             </li>
//             {/* <li>
//               <Link to='/journal'>Journal</Link>
//             </li> */}
//             <li>
//               <Link to='/contact'>Contact us</Link>
//             </li>
//           </ul>
//           <div className='start'>
//             <div className='button'>GET CERTIFICATE</div>
//           </div>
//           <button className='toggle' onClick={() => setClick(!click)}>
//             {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
//           </button>
//         </nav>
//       </header>
//     </>
//   )
// }

// export default Header
