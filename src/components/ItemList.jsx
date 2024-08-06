// Hvad er fejlen her og hvordan løses den?
/* fejlen her er at der ikke bliver brugt "key" til arrayet som map har brug for. */
/* man kan løse det ved at tilføje et id til hver genstand i arrayet og derefter bruge id som prop i key */


const ItemList = () => {
  const items = ["Apple", "Banana", "Cherry"];

  return (
    <ul>
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
};

export default ItemList;
