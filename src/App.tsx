import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./main.css";
import AboutUsPage from "./Pages/AboutUsPage";
import HomePage from "./Pages/HomePage";
import YevheniiStory from "./Pages/Stories/YevheniiStory";
import FabianStory from "./Pages/Stories/FabianStory";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/culture" element={<AboutUsPage />} />
          <Route path="/yevhenii" element={<YevheniiStory />} />
          <Route path="/fabian" element={<FabianStory />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
