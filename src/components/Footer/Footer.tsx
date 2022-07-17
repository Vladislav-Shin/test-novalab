import './footers.scss'

const Footer = (): JSX.Element => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__inner">
          <h4 className="footer__title">
            Footer
          </h4>
          <a href="https://reqres.in/">API</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;