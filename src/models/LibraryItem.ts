import {LibraryItemType} from "../enums/LibraryItemType";

export abstract class LibraryItem{
    protected id: number;
    protected type: LibraryItemType;
    protected title: string;
    protected isBorrowed: boolean;

    protected constructor(id: number,title: string, type: LibraryItemType) {
        this.id = id;
        this.title = title;
        this.type = type;
        this.isBorrowed = false;
    }

    abstract displayInfo():void

    public getTitle(): string{
        return this.title;
    };

    public updateTitle(title:string):void {
        this.title = title;
    }

    public getType():LibraryItemType {
        return this.type;
    }

    public isAvailable(): boolean {
        return !this.isBorrowed;
    }

    public borrow(): void {
        this.isBorrowed = true;
    };

    public handover(): void {
        this.isBorrowed = false;
    };

}