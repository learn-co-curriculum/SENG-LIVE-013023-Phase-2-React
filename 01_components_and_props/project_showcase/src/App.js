import Header from "./components/Header";
import ProjectList from "./components/ProjectList";
import ProjectNewForm from "./components/ProjectNewForm";

function App() {
  return (
    <div className="App">
      <Header />
      <ProjectNewForm />
      <ProjectList />
    </div>
  );
}

export default App;
