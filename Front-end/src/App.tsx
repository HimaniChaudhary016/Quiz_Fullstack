import "./App.css";
import ProfessorInfo from "./ProfessorInfo";

function App() {
  const data = [
    { name: "Himani", email: "himani@example.com", id: 1, username: "himani123" },
    {
      name: "Dr. Garcia",
      email: "garcia@university.edu",
      id: 2,
      username: "drgarcia",
    },
    {
      name: "Prof. Chen",
      email: "chen@university.edu",
      id: 3,
      username: "profchen",
    }
  ];

  return (
    <>
      {data.map((professor) => (
        <ProfessorInfo
          key={professor.id}
          name={professor.name}
          email={professor.email}
          id={professor.id}
          username={professor.username}
        />
      ))}
    </>
  );
}

export default App;
