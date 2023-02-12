import React from 'react'

const About = () => {
  return (
    <>
     <>
  <div className="sliderAx h-auto mt-4">
    <div id="slider-1" className="container mx-auto">
      <div
        className="bg-cover bg-center  h-auto text-white py-24 px-10 object-fill"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1544427920-c49ccfb85579?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1422&q=80)"
        }}
      >
        <div className="md:w-1/2">
          <p className="font-bold text-sm uppercase">Services</p>
          <p className="text-3xl font-bold">Hello world</p>
          <p className="text-2xl mb-10 leading-none">
            Carousel with TailwindCSS and jQuery
          </p>
          <a
            href="#"
            className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800"
          >
            Contact us
          </a>
        </div>
      </div>{" "}
      {/* container */}
      <br />
    </div>
    <div id="slider-2" className="container mx-auto">
      <div
        className="bg-cover bg-top  h-auto text-white py-24 px-10 object-fill"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1544144433-d50aff500b91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)"
        }}
      >
        <p className="font-bold text-sm uppercase">Services</p>
        <p className="text-3xl font-bold">Hello world</p>
        <p className="text-2xl mb-10 leading-none">
          Carousel with TailwindCSS and jQuery
        </p>
        <a
          href="#"
          className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800"
        >
          Contact us
        </a>
      </div>{" "}
      {/* container */}
      <br />
    </div>
  </div>
 
</>


    </>
  )
}

export default About
