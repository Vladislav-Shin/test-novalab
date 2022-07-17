import AppHeader from "../../appHeader/AppHeader";
import Footer from "../../footer/Footer";
import Unknowns from "../../colors/Colors";

const ColorsPage:React.FC = () => {
  return (
    <>
      <AppHeader />
      <main className="main">
        <div className="container">
          <Unknowns/>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ColorsPage;
