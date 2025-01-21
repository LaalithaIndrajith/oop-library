import {Book} from "./Book";

export class LibraryCatalogue {
    static libraryItems: Book[] = [];

    public static addItem(item: Book) {
        this.libraryItems.push(item);
    }

    public static displayLibraryItems() {
        this.libraryItems.map((libraryItem) => {
            libraryItem.displayBookInfo();
        })
    }

    public static findBookByTitle(title: string): Book | null {
        return this.libraryItems.find((book) => book.getTitle() === title) || null;
    }
}