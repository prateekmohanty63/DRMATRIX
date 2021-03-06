import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";

import NotesListPage from "./pages/NotesListPage";

import NotePage from "./pages/NotePage";

function App() {
  return (
    // wrapping the router inside router tag for routing
    // <Router>
    //   <div className="App">
    //     My Project
    //     <Header />
    //     <Route path="/" exact component={NotesListPage} />
    //   </div>
    // </Router>

    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<NotesListPage></NotesListPage>} />
            <Route path="/note/:id" element={<NotePage></NotePage>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
