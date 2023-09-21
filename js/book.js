const book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    publishingYear: 1960,
    pages: 336
  };
  
  function getBookDescription(book) {
    const { title, author, publishingYear } = book;
    return `The book ${title} was written by ${author} in the year ${publishingYear}.`;
  }
  
  const bookDescription = getBookDescription(book);
  console.log(bookDescription);
  