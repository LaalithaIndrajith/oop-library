import {LibraryItem} from "./LibraryItem";
import {LibraryItemType} from "../enums/LibraryItemType";

export class LibraryCatalogue {
    // Implementing Singleton Pattern

    // Holds the single instance of the LibraryCatalogue class
    private static libraryCatalogueInstance: LibraryCatalogue;
    // Array to store all library items
    public libraryItems: LibraryItem[] = [];

    private constructor() {
    }

    /**
     * Retrieves the single instance of the LibraryCatalogue class.
     * If an instance does not already exist, creates one.
     * @returns LibraryCatalogue - The singleton instance of the class.
     */
    public static getInstance(): LibraryCatalogue {
        if(!this.libraryCatalogueInstance) {
            return this.libraryCatalogueInstance = new LibraryCatalogue();
        }
        return this.libraryCatalogueInstance;
    }

    /**
     * Adds a new library item to the Library catalogue.
     * @param item - The library item to be added (e.g., Book, Audiobook).
     */
    public addItem(item: LibraryItem) {
        this.libraryItems.push(item);
    }

    // Display all the items in the Library Catalogue
    public displayLibraryItems() {
        console.log(`============== Catalogue ==============`)
        this.libraryItems.map((libraryItem, index) => {
            libraryItem.displayInfo();
            (index !== this.libraryItems.length - 1) ? console.log(`-----------------------------------`) : null;
        })
        console.log(`=======================================`)
    }

    /**
     * Searches for a library item by its title and type.
     * @param title - The title of the library item to search for.
     * @param type - The type of the library item
     * @returns LibraryItem | null - The found library item or null if no match is found.
     */
    public findItemByTitle(title: string, type: LibraryItemType): LibraryItem | null {
        return this.libraryItems.find((libraryItem) => libraryItem.getTitle() === title && libraryItem.getType() === type) || null;
    }
}