function ProfessorInfo({
  id,
  name,
  email,
  username,
}: {
  id: number;
  name: string;
  email: string;
  username?: string;
}) {
  return (
    <div>
      <h1>Professor Information</h1>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      {username ? <p>Username: {username}</p> : null}
    </div>
  );
}

export default ProfessorInfo;
