import Link from "next/link";
const Blog = () => {
  return (
    <section className="blog main-section flex-column-mobile" id="blog">
      {/* TITLE STARTS */}
      <div className="custom-title">
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              Latest Posts
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      {/* LATEST POSTS STARTS */}
      <div className="latestposts flex-column-mobile">
        {/* POST ITEM STARTS */}
        <div className="animated-layer fade-in-right-animation fadeInUp wow">
          <Link href="https://medium.com/@baisali-pradhan/monolithic-or-microservices-which-is-better-a913ffb503ee" target={'_blank'} legacyBehavior>
            <a>
              <span className="img-holder">
                <img src="assets/blog/mono.webp" alt="" />
              </span>
              <div className="content">
                <span className="category">Web Development</span>
                <span className="title">
                Monolithic or Microservices Which Is Better?
                </span>
                <p>
                Before an organization delivers a product, the engineering team needs to decide on the most suitable application architecture. In most…
                </p>
                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-calendar" />
                    <span>Jan 8, 2022</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-comments" />
                    <span>14 Likes</span>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
        {/* POST ITEM ENDS */}
        {/* POST ITEM STARTS */}
        <div className="animated-layer fade-in-right-animation fadeInUp wow">
          <Link href="https://medium.com/@baisali-pradhan/frontend-system-design-63e9ea60fab7" target={'_blank'} legacyBehavior>
            <a>
              <span className="img-holder">
                <img src="assets/blog/frontend.webp" alt="" />
              </span>
              <div className="content">
                <span className="category">Design Patterns</span>
                <span className="title">
                Frontend System Design
                </span>
                <p>
                Before we open VS Code and start typing code for a UI, we should first design a system....
                </p>
                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-calendar" />
                    <span>15 Feb 2023</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-comments" />
                    <span>1 Likes</span>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
        {/* POST ITEM ENDS */}
        {/* POST ITEM STARTS */}
        <div className="animated-layer fade-in-right-animation fadeInUp wow">
          <Link href="https://medium.com/@baisali-pradhan/s-o-l-i-d-principles-e216523bd24e" target={'_blank'} legacyBehavior>
            <a>
              <span className="img-holder">
                <img src="assets/blog/solid.webp" alt="" />
              </span>
              <div className="content">
                <span className="category">Design Patterns</span>
                <span className="title">
                S.O.L.I.D Principles
                </span>
                <p>
                The main aim of this article is to remind me about the SOLID Principle. I wrote articles on medium only to store all my knowledge about…
                </p>
                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-calendar" />
                    <span>11 July 2021</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-comments" />
                    <span>4 Likes</span>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
        {/* POST ITEM ENDS */}
      </div>
      {/* LATEST POSTS ENDS */}
    </section>
  );
};
export default Blog;
