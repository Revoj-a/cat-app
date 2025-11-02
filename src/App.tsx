import ListGroup from "./components/ListGroup";

function App() {
  const items = [
    "New York",
    "Philippines",
    "South Korea",
    "Japan",
    "Singapore",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
