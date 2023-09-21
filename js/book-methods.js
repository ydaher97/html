const book1 = { name: "Book1", author: "Author1", year: 2000 };
const book2 = { name: "Book2", author: "Author2", year: 1995 };

const bookUtils = {};

bookUtils.getFirstPublished = function(book1, book2) {
  return book1.year < book2.year ? book1 : book2;
};

bookUtils.setNewEdition = function(book, editionYear) {
  book.latestEdition = editionYear;
};

bookUtils.setLanguage = function(book, language) {
  book.language = language;
};

bookUtils.setTranslation = function(book, language, translator) {
  book.translation = { language, translator };
};

bookUtils.setPublisher = function(book, name, location) {
  book.publisher = { name, location };
};

bookUtils.isSamePublisher = function(book1, book2) {
  if (!book1.publisher || !book2.publisher) {
    return false;
  }

  return (
    book1.publisher.name === book2.publisher.name &&
    book1.publisher.location === book2.publisher.location
  );
};

const firstPublishedBook = bookUtils.getFirstPublished(book1, book2);
console.log("First Published Book:", firstPublishedBook);

bookUtils.setNewEdition(book1, 2010);
console.log("Book1 after setting new edition:", book1);

bookUtils.setLanguage(book2, "Spanish");
console.log("Book2 after setting language:", book2);

bookUtils.setTranslation(book1, "French", "Translator1");
console.log("Book1 after setting translation:", book1);

bookUtils.setPublisher(book2, "PublisherName", "PublisherLocation");
console.log("Book2 setting publisher:", book2);

const samePublisher = bookUtils.isSamePublisher(book1, book2);
console.log("Are the same publisher?", samePublisher);
