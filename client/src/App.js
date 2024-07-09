import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserChoose from "./Pages/UserChoose";
import "./global.css";

function App() {
  return (
    <div className="background">
      <Router>
        {/* here for the header if we create one later on  */}
        <Routes>
          <Route path="/" element={<UserChoose />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
