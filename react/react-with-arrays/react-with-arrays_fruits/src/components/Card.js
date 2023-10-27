import "./Card.css";

export default function Card({ name, color, harvest }) {
  return (
    <p className="card" style={{ backgroundColor: color }}>
      <li>Name: {name}</li>
      <li>Color: {color}</li>
      <li>When to Harvest: {harvest}</li>
    </p>
  );
}
