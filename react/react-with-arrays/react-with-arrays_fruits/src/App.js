import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 0, name: "apple", color: "red", harvest: "October" },
    { id: 1, name: "banana", color: "yellow", harvest: "August" },
    { id: 2, name: "orange", color: "orange", harvest: "July" },
    { id: 3, name: "kiwi", color: "green", harvest: "October" },
    { id: 4, name: "raspberry", color: "DarkRed", harvest: "June" },
  ];

  return (
    <div className="app">
      <ul>
        {fruits.map(({ id, name, color, harvest }) => (
          <Card key={id} name={name} color={color} harvest={harvest} />
        ))}
      </ul>
    </div>
  );
}
