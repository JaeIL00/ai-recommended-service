import { Route, Routes } from "react-router-dom";
import { KakaoLogin } from "./components/login/KakaoLogin";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";
import { MusicTestPage } from "./pages/MusicTestPage";

function App() {
  return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/login/callback" element={<KakaoLogin />} />
			<Route path="/test" element={<MusicTestPage />} />
			<Route path="/result" />
		</Routes>
  );
}

export default App;
