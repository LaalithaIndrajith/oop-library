import {LibraryItem} from "./LibraryItem";
import {LibraryItemType} from "../enums/LibraryItemType";

export class LibraryCatalogue {
    private static libraryCatalogueInstance: LibraryCatalogue;
    public libraryItems: LibraryItem[] = [];

    private constructor() {
    }

    public static getInstance(): LibraryCatalogue {
        if(!this.libraryCatalogueInstance) {
            return this.libraryCatalogueInstance = new LibraryCatalogue();
        }
        return this.libraryCatalogueInstance;
    }

    public addItem(item: LibraryItem) {
        this.libraryItems.push(item);
    }

    public displayLibraryItems() {
        console.log(`============== Catalogue ==============`)
        this.libraryItems.map((libraryItem, index) => {
            libraryItem.displayInfo();
            (index !== this.libraryItems.length - 1) ? console.log(`-----------------------------------`) : null;
        })
        console.log(`=======================================`)
    }

    public findItemByTitle(title: string, type: LibraryItemType): LibraryItem | null {
        return this.libraryItems.find((libraryItem) => libraryItem.getTitle() === title && libraryItem.getType() === type) || null;
    }
}