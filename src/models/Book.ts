import {LibraryItem} from "./LibraryItem";
import {LibraryItemType} from "../enums/LibraryItemType";

export class Book extends LibraryItem {
    protected author: string;
    protected isbn: string;

    constructor(id: number,title: string,author: string,isbn: string, ) {
        super(id,title,LibraryItemType.Book);
        this.author = author;
        this.isbn = isbn;
    }

    public displayInfo(): void {
        console.log(`
        Book - ID: ${this.id}
        Title: ${this.title}
        Author: ${this.author}
        ISBN: ${this.isbn}
        Is Available: ${!this.isBorrowed}`);
    }

    public borrow(): void {
        super.borrow();
        console.log(`The Book titled ${this.title} by ${this.author} was successfully borrowed..`);
    }
}