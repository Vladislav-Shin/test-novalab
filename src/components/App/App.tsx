import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SinglePage, MainPage, ErrorPage, ColorsPage, ProfilePage } from "../pages";
import FormPage from "../pages/FormPage";

import "../../global.scss";

const App = (): JSX.Element => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/users" element={<MainPage />} />
          <Route path="/colors" element={< ColorsPage />} />
          <Route path="/users/:id" element={<SinglePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/sign-in" element={<FormPage />} />
          <Route path="/registration" element={<FormPage />} />
        </Routes>
      </div>
    </Router>
  )
};

export default App;
