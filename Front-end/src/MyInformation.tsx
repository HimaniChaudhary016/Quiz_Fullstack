import ProfessorInfo from "./ProfessorInfo";

function MyInformation() {
  return (
    <div>
      <h1>My Information</h1>
      <ProfessorInfo
        id={2}
        name="Himani"
        email="himani@example.com"
        username="himani123"
      />
    </div>
  );
}
export default MyInformation;
