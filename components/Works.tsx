const Work = () => (
  <section className="work" id="work">
    <div className="heading">
      <h2>My latest Projects</h2>
    </div>
    <div className="content">
      <div className="workBx">
      <img
          src="/site1.jpg"
          alt=""
          className="workBx__header"
        />
        <a href="https://qa.virtualeventservices.ca/" className="workBx__title">
        <h2 > VES Platform</h2>
        </a>
        <p className="workBx__body">
          A platform made to serve webinars , made with laravel, sass , and postgresql , i've been part of this project on Kunaisoft, as Frontend developer 
          🧑‍💻
        </p>
      </div>
      <div className="workBx">
      <img
          src="/site2.jpg"
          alt=""
          className="workBx__header"
        />
        <a href="https://dondemax.com" className="workBx__title">
        <h2 >DondeMax</h2>
        </a>
        <p className="workBx__body">
          A website made with the purpose to get orders through the system , manage the materials Existant in the bakery 🥧🥧 , made using in the backend , node.js,
           typescript, and Apollo Graphql , and in the frontend Next.js , Apollo CLient , Chakra UI , React Table and Formik
       </p>
      </div>
      <div className="workBx">
      <img
          src="/25516.jpg"
          alt=""
          className="workBx__header"
        />
        <a href="" className="workBx__title">
        <h2 >Notesive</h2>
        </a>
        <p className="workBx__body">
          A PWA made to take notes, using Rich text , with offline capabilities , and Multi device synchronization
          , built using React , Redux , RxDb(PouchDB), Tailwind CSS , Python , Flask and GraphQL 
          <br />
          ✌first release on 06/2021 Stay Tune 👐!! 
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
