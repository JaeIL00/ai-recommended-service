import { Route, Routes, useNavigate } from "react-router-dom";
import { KakaoSignIn } from "./components/signIn/KakaoSignIn";
import { SignInPage } from "./pages/SignInPage";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
      <Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/signin" element={<SignInPage />} />
				<Route path="/signin/callback" element={<KakaoSignIn />} />
        <Route path="/test" />
        <Route path="/result" />
      </Routes>
  );
}

export default App;
