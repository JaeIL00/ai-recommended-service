import { Route, Routes, useNavigate } from "react-router-dom";
import { KakaoLogin } from "./components/home/KakaoLogin";
import { HomePage } from "./pages/HomePage";
import { RecommendPage } from "./pages/RecommendPage";

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
				<Route path="/login" element={<KakaoLogin />} />
        <Route path="/recommend" element={<RecommendPage />} />
        <Route path="/test" />
        <Route path="/result" />
      </Routes>
  );
}

export default App;
