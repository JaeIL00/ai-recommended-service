import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { MusicTestPage } from "./pages/MusicTestPage";

function App() {
  return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/music" />
			<Route path="/music/test" element={<MusicTestPage />} />
			<Route path="/music/result" />
			<Route path="/counsel" />
			<Route path="/dream" />
		</Routes>
  );
}

export default App;
