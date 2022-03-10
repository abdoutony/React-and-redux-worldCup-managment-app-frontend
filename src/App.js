import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/admin/Index";
import Matches from "./pages/admin/matches";
import Players from "./pages/admin/players";
import Teams from "./pages/admin/teams";
import Steps from "./pages/admin/steps";
import Groups from "./pages/admin/groups";
import Stadiums from "./pages/admin/stadiums";
import AddPlayer from "./pages/admin/players/create";
import EditPlayer from "./pages/admin/players/edit";
import React from "react";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/admin">
            <Route path="" element={<Index />} />
            <Route path="players">
              <Route path="" element={<Players />} />
              <Route path="create" element={<AddPlayer />} />
              <Route path="edit/:id" element={<EditPlayer />} />
            </Route>
            <Route path="teams" element={<Teams />} />
            <Route path="groups" element={<Groups />} />
            <Route path="matches" element={<Matches />} />
            <Route path="stadiums" element={<Stadiums />} />
            <Route path="steps" element={<Steps />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
