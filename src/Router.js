import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        {/* path로 가면 element에 있는 컴포넌트를 보여줘 */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
