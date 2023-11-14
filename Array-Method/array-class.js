const arr = new Array(15).fill().map((_, index) => {
  const id = index + 1;
  return {
    id,
    name: `book-${id}`,
  };
});
