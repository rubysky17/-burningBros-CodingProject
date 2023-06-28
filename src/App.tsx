import { LazyLoad } from "helpers/LazyLoad";
import { Route, Routes } from "react-router-dom";

// Pages
const Home = LazyLoad({ cb: () => import("pages/home") });

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
    </Routes>
  );
}

export default App;
