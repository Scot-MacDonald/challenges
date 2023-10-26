import Form from "./Form";
import Card from "./Card";
import Counters from "./Counters";
export default function MainSection() {
  return (
    <section className="section">
      <Form />
      <Counters />
      <Card
        date="FEB 27, 2028"
        motto="'That's life in the city'"
        notes={
          <p>
            Experience is not what happens to you; its what you do with what
            happens to you.
          </p>
        }
      />
      <Card
        date="FEB 28, 2028"
        motto="'That's life in the town'"
        notes={
          <p>
            Technological progress has merely provided us with more efficient
            means for going backwards.
          </p>
        }
      />
      <Card
        date="FEB 29, 2028"
        motto="'That's life at spiced'"
        notes={
          <p>
            After silence, that which comes nearest to expressing the
            inexpressible is music.
          </p>
        }
      />
    </section>
  );
}
