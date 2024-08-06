import { useState } from "react";

// Hvad er fejlen her og hvordan løses den?
/* fejlen her er at når vi kører updateAge bliver hele user objektet opdateret og fjerner name attributen.  */
/* for at fix det skal man inkludere ...user i set user for at sørge for at det hele følger med */

const UserProfile = () => {
  const [user, setUser] = useState({ name: "John", age: 25 });

  const updateAge = () => {
    setUser({ age: 26 });
  };

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={updateAge}>Update Age</button>
    </div>
  );
};

export default UserProfile;
