import {LibraryCatalogue} from "./LibraryCatalogue";
import {LibraryItemType} from "../enums/LibraryItemType";

export class User {
    private name: string;
    private email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

    public getName(): string {
        return this.name;
    }

    public updateName(name: string) {
        this.name = name;
    }

    public getEmail(): string {
        return this.email;
    }

    public updateEmail(email: string) {
        this.email = email;
    }

    public borrowItem(itemTitle: string, itemType:LibraryItemType):void {
        const libraryItem = LibraryCatalogue.getInstance().findItemByTitle(itemTitle,itemType);
        if (libraryItem) {
            if(libraryItem.isAvailable()){
                libraryItem.borrow();
                console.log(`${this.name} has successfully borrowed the ${itemType}: "${itemTitle}".`);
            }else{
                console.log(`Sorry, The ${itemType}: "${itemTitle}" is not available to borrow.`);
            }
        }else{
            console.log(`The ${itemType} titled "${itemTitle}" is not available in the catalogue.`);
        }
    }

    public returnItem(itemTitle: string, itemType:LibraryItemType): void {
        const libraryItem = LibraryCatalogue.getInstance().findItemByTitle(itemTitle,itemType);
        if (libraryItem) {
            libraryItem.handover();
            console.log(`${this.name} has successfully returned the ${itemType}: "${itemTitle}".`);
        }else{
            console.log(`The ${itemType} titled "${itemTitle}" is not available in the catalogue.`);
        }
    }
}