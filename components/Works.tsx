const Work = () => (
  <section className="work" id="work">
    <div className="heading">
      <h2>My latest Projects</h2>
    </div>
    <div className="content">
    <div className="workBx">
        <img
          src="https://getlighthouse.nyc3.cdn.digitaloceanspaces.com/images/welcome/marketing_header_logo.svg"
          alt=""
          className="workBx__header"
          width="100%"
          height="50%"
          style={{ padding: '1em', margin: '4em 0em' }}
        />
        <a href="" className="workBx__title">
          <h2>Get lighthouse</h2>
        </a>
        <p className="workBx__body">
          Worked on design, implementation, and testing of new features, and
          re-writes of old ones in React.And also give a hand with the backend
          made with Ruby, and support to the application built with react native
        </p>
      </div>
      <div className="workBx">
        <img src="/site1.jpg" alt="" className="workBx__header" />
        <a href="https://qa.virtualeventservices.ca/" className="workBx__title">
          <h2> VES Platform</h2>
        </a>
        <p className="workBx__body">
          A platform made to serve webinars , made with laravel, sass , and
          postgresql , i've been part of this project on Kunaisoft, as Frontend
          developer 🧑‍💻
        </p>
      </div>
      <div className="workBx">
        <img src="/site2.jpg" alt="" className="workBx__header" />
        <a href="https://dondemax.com" className="workBx__title">
          <h2>DondeMax</h2>
        </a>
        <p className="workBx__body">
          A website made with the purpose to get orders through the system ,
          manage the materials Existant in the bakery 🥧🥧 , made using in the
          backend , node.js, typescript, and Apollo Graphql , and in the
          frontend Next.js , Apollo CLient , Chakra UI , React Table and Formik
        </p>
      </div>
      <div className="workBx">
        <img
          src="/Fiado_logo.svg"
          alt=""
          className="workBx__header"
          width="100%"
          height="40%"
          style={{ padding: '1em' }}
        />
        <a href="" className="workBx__title">
          <h2>Fiado</h2>
        </a>
        <p className="workBx__body">
          I worked on this project, through Kunaisoft agency, as tech
          lead/frontend developer, developing features, structuring the project
          and mentoring teammates, about react, redux, and Material UI
        </p>
      </div>
    </div>
    {/* <div className="heading">
      <a href="" className="btn">
        View more
      </a>
    </div> */}
  </section>
)

export default Work
