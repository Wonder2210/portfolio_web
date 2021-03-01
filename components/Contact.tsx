const Contact = () => (
  <section className="contact" id="contact">
    <div className="heading white">
      <h2>Contact Us</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div className="content">
      <div className="contactInfo">
        <h3>Contact Info</h3>
        <div className="contactInfoBx">
          <div className="box">
            <div className="icon">
              <i className="fa fa-map-marker"></i>
            </div>
            <div className="text">
              <h3>Address</h3>
              <p>45689533 en venezuela</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <i className="fa fa-phone"></i>
            </div>
            <div className="text">
              <h3>Phone</h3>
              <p>04147331076</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <i className="fa fa-envelope-o"></i>
            </div>
            <div className="text">
              <h3>Email</h3>
              <p>04147331076</p>
            </div>
          </div>
        </div>
      </div>
      <div className="formBx">
        <form action="/">
          <h3>Message Me</h3>
          <input type="text" name="" id="" placeholder="full name" />
          <input type="email" name="" id="" placeholder="email" />
          <textarea placeholder="Your message"></textarea>
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  </section>
)

export default Contact
