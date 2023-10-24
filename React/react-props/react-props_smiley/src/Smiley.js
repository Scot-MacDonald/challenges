export default function Smiley({ isHappy }) {
  return <h1>{isHappy ? <span>Happy😀</span> : <span>Not Happy😞</span>}</h1>;
}
