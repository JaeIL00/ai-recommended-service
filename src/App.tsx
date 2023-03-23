import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="/myinfo" />
        <Route path="/myrecord" />
        <Route path="/test" />
        <Route path="/result" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
