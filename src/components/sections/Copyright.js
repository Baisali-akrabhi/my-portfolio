const Copyright = () => {
  return (
    <section className="copyright">
      <img
        alt=""
        className="z-1 hide-mobile"
        src="assets/separator-copyright.png"
      />
      <div>
        <span>© {new Date().getFullYear()} Baisali Pradhan</span>
        <span>
          Designed By{" "}
          <a
            target="_blank"
            href="#"
          >
            Baisali Pradhan
          </a>
        </span>
        <ul>
          <li>
            <a href="https://github.com/Baisali-akrabhi" target='_blank'>
              <i className="fa-brands fa-github" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/Baisali_" target='_blank'>
              <i className="fa-brands fa-twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/just_an_imperfect_girl_/" target={'_blank'}>
              <i className="fa-brands fa-instagram" />
            </a>
          </li>
          <li>
            <a href="https://medium.com/@baisali-pradhan" target={'_blank'}>
              <i className="fa-brands fa-medium" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Copyright;
