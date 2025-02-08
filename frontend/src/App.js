import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardCreation from "./CardCreation";  // The main page for creating the card
import ValentinesCard from "./ValentinesCard"; // The interactive Valentine’s card
import FlowersPage from "./FlowersPage"; // The final flowers animation page

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route should go to CardCreation */}
        <Route path="/" element={<CardCreation />} />
        <Route path="/card" element={<ValentinesCard />} />
        <Route path="/flowers" element={<FlowersPage />} />
      </Routes>
    </Router>
  );
}

export default App;

