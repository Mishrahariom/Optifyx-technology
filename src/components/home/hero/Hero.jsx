import React from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO OPTIFYX' title='Best Online Education Expertise' />
            <p>Empowering your success with premier IT training and innovative tech solutions.</p>
            <div className='button'>
              <a href='https://forms.gle/qwEGWnVbuDDWjnMU9' target='_blank' rel='noopener noreferrer'>
                <button className='primary-btn'>
                  GET INTERNSHIP <i className='fa fa-long-arrow-alt-right'></i>
                </button>
              </a>
              <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  );
};

export default Hero;





// import React from "react";
// import Heading from "../../common/heading/Heading";
// import "./Hero.css";

// const Hero = () => {
//   const openForm = () => {
//     window.open('https://forms.gle/qwEGWnVbuDDWjnMU9', '_blank', 'noopener,noreferrer');
//   };

//   return (
//     <>
//       <section className='hero'>
//         <div className='container'>
//           <div className='row'>
//             <Heading subtitle='WELCOME TO OPTIFYX' title='Best Online Education Expertise' />
//             <p>Empowering your success with premier IT training and innovative tech solutions.</p>
//             <div className='button'>
//               <button className='primary-btn' onClick={openForm}>
//                 GET INTERNSHIP <i className='fa fa-long-arrow-alt-right'></i>
//               </button>
//               <button>
//                 VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//       <div className='margin'></div>
//     </>
//   );
// };

// export default Hero;