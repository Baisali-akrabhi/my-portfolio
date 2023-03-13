const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-container flex-column-mobile">
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                " All the support and training , I have got from you has been very helpful in solving different issues I have faced until now. I have enjoyed working under your leadership and learned a lot which will be very much helpful for me in the upcoming projects that I will come to work in future. "
              </span>
              <span className="person">Sahil Biswaprakash Das</span>
              <span className="job">SDE - InfoViz</span>
            </p>
            <img src="assets/testimonials/sahil.png" alt="" />
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                <ul>
                  <li>
                    Ability to collaborate within and across teams.
                  </li>
                  <li>
                    Ability to mentor and teach other developers.
                  </li>
                  <li>
                    I have got the technical skills and knowledge needed to solve the technical & logical issue in software
                  </li>
                </ul>
                
              </span>
              <span className="person">Subhrajit Pattnayak</span>
              <span className="job">SDE - InfoViz</span>
            </p>
            <img src="assets/testimonials/subhrajit.png" alt="" />
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
      </div>
      <img
        alt=""
        className="z-1 hide-mobile opposite-separator"
        src="assets/separator-opposite.png"
      />
    </section>
  );
};
export default Testimonials;
