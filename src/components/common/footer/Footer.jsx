import React from "react"
import { blog } from "../../../dummydata"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Get inspired by our success stories and case studies</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>OPTIFYX</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
            <p>dedicated to empowering education and transforming lives through innovative e-learning solutions. Connect with us to explore a world of knowledge and opportunity.</p>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>Internship</li>
              <li>About us </li>
              <li>Con. on Linkedin</li>
              <li>All Course</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>FAQ's</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          <div className='box'>
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items flexSB'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                  Main Branch - Delhi India And Other Branches in Bangalore, Mumbai, Chennai, Pune.
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +91 92361 83650
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                help.optifyxtechno@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright © 2024 OPTIFYX TECHNOLOGY. All rights reserved. This platform is created with dedication and passion <i className='fa fa-heart'></i> by Founder ...
        </p>
      </div>
    </>
  )
}

export default Footer
