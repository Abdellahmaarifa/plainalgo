import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/Layout/";
import Home from "../pages/Home";
import Error from "../pages/Error";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
