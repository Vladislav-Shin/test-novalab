import AppHeader from "../../AppHeader/AppHeader";
import Footer from "../../Footer/Footer";
import Unknowns from "../../Unknowns/Unknowns";

const UnknownPage = () => {
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

export default UnknownPage;
