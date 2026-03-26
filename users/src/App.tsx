import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UserList from "./pages/UserList";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/user/:id" element={<UserProfile />} />
    </Routes>
  );
}

export default App;
