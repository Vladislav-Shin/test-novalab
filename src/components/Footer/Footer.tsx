import github from '../../resources/img/github.png';

import './footer.scss'

const Footer = (): JSX.Element => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__inner">
          <a className="footer__github" href="https://github.com/Vladislav-Shin">
            <img src={github} alt="github" />
            Vladislav Shin
          </a>
          <a href="https://reqres.in/">API</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;