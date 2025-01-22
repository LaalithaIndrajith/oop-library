import {LibraryItem} from "./LibraryItem";
import {LibraryItemType} from "../enums/LibraryItemType";

export class AudioBook extends LibraryItem {
    private narrator: string;
    private length: number;

    constructor(id:number,title:string,narrator:string, length:number) {
        super(id, title,LibraryItemType.Audiobook);
        this.narrator = narrator;
        this.length = length;
    }

    // Displays detailed information about the Audiobook.
    displayInfo(): void {
        console.log(`
        Audio Book - ID: ${this.id}
        Title: ${this.title}
        Narrator: ${this.narrator}
        Length: ${this.length} mins
        Is Available: ${!this.isBorrowed}`);
    }

    public getABNarrator(){
        return this.narrator;
    }

    public updateABNarrator(narrator:string){
        this.narrator = narrator;
    }

    public getABLength(){
        return this.length;
    }

    public updateABLength(length:number){
        this.length = length;
    }

    public borrow(): void {
        super.borrow();
        console.log(`The Audiobook titled ${this.title} narrated by ${this.narrator} was successfully borrowed..`);
    }
}