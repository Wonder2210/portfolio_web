const AboutMe = () => (
  <section id="about">
    <div className="heading">
      <h2>About Me</h2>
    </div>
    <div className="content">
      <div className="contentBx w50">
        <h3>i'm a Web developer</h3>
        <p>
          Hi There, My name is Wonderly , but you can tell me just Wonder  i am
          a Web developer with 4 years of experience developing beautiful web experiences,
           i am constantly seeking for more knowledge,
          Programming is not just a job to me. It is my hobby and something I am passionate about
          <br />
          <br />
          Nowadays I mostly work with TypeScript, Next.js and GraphQL.
          I enjoy working full stack but what I am the most interested in is frontend development.
        </p>
      </div>
      <div className="w50">
        <img
          src="/profile.jpeg"
          alt=""
          width="300"
          style={{
            display:"block",
            margin:"0 auto"
          }}
          className="img"
        />
      </div>
    </div>
  </section>
)

export default AboutMe
