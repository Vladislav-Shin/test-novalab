import { Link } from "react-router-dom";
import AppHeader from "../AppHeader/AppHeader";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Footer from './../Footer/Footer';

const ErrorPage: React.FC = () => {
  return (
    <>
      <AppHeader />
      <main className="main">
        <div className="container">
          <ErrorMessage />
          <p style={{ "textAlign": "center", "fontWeight": "bold", "fontSize": "24px" }}>Page doesn't exist</p>
          <Link style={{ "display": "block", "textAlign": "center", "fontWeight": "bold", "fontSize": "24px", "marginTop": "30px", "color": "#000" }} to="/">Back to main page</Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ErrorPage;