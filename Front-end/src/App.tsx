import "./App.css";
import RegisterForm from "./RegisterForm";

function App() {

  return (
    <>
      {/* {data.map((professor) => (
        <ProfessorInfo
          key={professor.id}
          name={professor.name}
          email={professor.email}
          id={professor.id}
          username={professor.username}
        />
      ))} */}
      <RegisterForm />
    </>
  );
}

export default App;
