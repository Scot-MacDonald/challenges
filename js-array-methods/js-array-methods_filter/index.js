console.clear();

const cards = [
  {
    id: "1",
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next"],
  },
];
///////a
const onlyCardWithIdTwo = cards.filter((card) => {
  return card.id === "2";
});
console.log(onlyCardWithIdTwo);

///////b
const allCardsWith3Tags = cards.filter((card) => {
  return card.tags.length === 3;
});
console.log(allCardsWith3Tags);

///////c
const allCardsThatAreNotBookmarked = cards.filter((card) => {
  return card.isBookmarked !== true;
});
console.log(allCardsThatAreNotBookmarked);

///////d
const allCardsWithTagsHTMLOrJSThatAreBookmarked = cards.filter((card) => {
  return (
    (card.tags.includes("html") && card.isBookmarked) ||
    (card.tags.includes("js") && card.isBookmarked)
  );
});

console.log(allCardsWithTagsHTMLOrJSThatAreBookmarked);

export {
  onlyCardWithIdTwo,
  allCardsWith3Tags,
  allCardsThatAreNotBookmarked,
  allCardsWithTagsHTMLOrJSThatAreBookmarked,
};
