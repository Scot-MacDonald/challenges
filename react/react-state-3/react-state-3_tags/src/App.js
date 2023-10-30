import { useState } from "react";
import "./styles.css";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

  const handleAddTag = (tag) => {
    // console.log(tag);
    const newArray = [...tags, tag];
    setTags(newArray);
  };

  const handleDeleteTag = (clickedTag) => {
    setTags(tags.filter((tag) => tag !== clickedTag));
  };

  return (
    <main className="app">
      <Form onAddTag={handleAddTag} />
      <List tags={tags} onDeleteTag={handleDeleteTag} />
    </main>
  );
}
