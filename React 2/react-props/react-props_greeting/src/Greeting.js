export default function Greeting({ name }) {
  const coaches = ["Klaus", "Jan", "Marcell"];
  return <h1>Hello, {coaches.includes(name) ? name : "Imposter"}</h1>;
}
