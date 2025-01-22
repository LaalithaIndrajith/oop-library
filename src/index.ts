import {User} from "./models/User";
import {Book} from "./models/Book";
import {LibraryCatalogue} from "./models/LibraryCatalogue";
import {AudioBook} from "./models/AudioBook";
import {LibraryItemType} from "./enums/LibraryItemType";

console.log('Welcome to Library Catalogue......')

// Create the Singleton instance of the Library Catalogue
const libraryCatalogue:LibraryCatalogue = LibraryCatalogue.getInstance();

// Create User and Library items
const user_001 = new User("John Doe", "johndoe@example.com");
const book_0001 = new Book(1, "Life of Pi", "Yann Martel", "1234567890");
const audBook_0001 = new AudioBook(2, "The Housemaid", "Lauryn Allman", 335);

// Adding and displaying added items to the catalogue
libraryCatalogue.addItem(book_0001);
libraryCatalogue.displayLibraryItems();
libraryCatalogue.addItem(audBook_0001);
libraryCatalogue.displayLibraryItems();

// Borrowing items in the catalogue
user_001.borrowItem('Life of Pi',LibraryItemType.Book);
user_001.borrowItem('The Housemaid',LibraryItemType.Audiobook);
libraryCatalogue.displayLibraryItems();

// Borrowing an unavailable item
user_001.borrowItem('Life of Pi',LibraryItemType.Book);
libraryCatalogue.displayLibraryItems();

// Attempt to borrow an incorrectly specified item
user_001.borrowItem('The Housemaid',LibraryItemType.Book);

// Updating item information
book_0001.updateAuthor('Yann Marcell')

// Returning a borrowed item
user_001.returnItem('Life of Pi',LibraryItemType.Book);
libraryCatalogue.displayLibraryItems();
