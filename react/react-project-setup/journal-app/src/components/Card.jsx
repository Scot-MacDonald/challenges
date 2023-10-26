import Button from "./Button";
export default function card({ date, motto, notes, like }) {
  return (
    <>
      <h2>
        {date}
        {motto}
      </h2>
      {notes}
      <Button>
        Adopt <strong>{like}</strong>
      </Button>
    </>
  );
}
