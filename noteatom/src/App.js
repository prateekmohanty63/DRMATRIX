import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";

import NotesListPage from "./pages/NotesListPage";

import NotePage from "./pages/NotePage";

function App() {
  return (
    <div className="App">
      My Project
      <Header />
      <NotesListPage />
    </div>
  );
}

export default App;
