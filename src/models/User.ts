import {LibraryCatalogue} from "./LibraryCatalogue";

export class User {
    protected name: string;
    protected email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

    public borrowBook(bookTitle: string):void {
        const book = LibraryCatalogue.findBookByTitle(bookTitle);
        if (book) {
            if(book.isAvailable()){
                book.borrowBook();
                console.log(`${this.name} has successfully borrowed the book: "${bookTitle}".`);
            }else{
                console.log(`Sorry, The "${bookTitle}" is not available to borrow.`);
            }
        }else{
            console.log(`The book titled "${bookTitle}" is not available in the catalogue.`);
        }
    }

    public returnBook(bookTitle: string): void {
        const book = LibraryCatalogue.findBookByTitle(bookTitle);
        if (book) {
            book.returnBook();
            console.log(`${this.name} has successfully returned the book: "${bookTitle}".`);
        }else{
            console.log(`The book titled "${bookTitle}" is not available in the catalogue.`);
        }
    }
}