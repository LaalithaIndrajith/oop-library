import {User} from "./models/User";
import {Book} from "./models/Book";
import {LibraryCatalogue} from "./models/LibraryCatalogue";

console.log('Working......')

const user_001 = new User("John Doe", "johndoe@example.com");

const book_0001 = new Book(1, "Life of Pi", "Yann Martel", "1234567890");
const book_0002 = new Book(2, "Five Point Someone", "Chetan Bhagat", "0987654321");

LibraryCatalogue.addItem(book_0001);
LibraryCatalogue.displayLibraryItems();
LibraryCatalogue.addItem(book_0002);
LibraryCatalogue.displayLibraryItems();

user_001.borrowBook("Life of Pi")
console.log('after the borrowing.....')
LibraryCatalogue.displayLibraryItems();
user_001.borrowBook("Life of Pi")