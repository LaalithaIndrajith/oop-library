import {LibraryItem} from "./LibraryItem";
import {LibraryItemType} from "../enums/LibraryItemType";

export class LibraryCatalogue {
    static libraryItems: LibraryItem[] = [];

    public static addItem(item: LibraryItem) {
        this.libraryItems.push(item);
    }

    public static displayLibraryItems() {
        console.log(`============== Catalogue ==============`)
        this.libraryItems.map((libraryItem, index) => {
            libraryItem.displayInfo();
            (index !== this.libraryItems.length - 1) ? console.log(`-----------------------------------`) : null;
        })
        console.log(`=======================================`)
    }

    public static findItemByTitle(title: string, type: LibraryItemType): LibraryItem | null {
        return this.libraryItems.find((libraryItem) => libraryItem.getTitle() === title && libraryItem.getType() === type) || null;
    }
}