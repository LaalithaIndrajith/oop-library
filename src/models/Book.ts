export class Book {
    protected id: number;
    protected title: string;
    protected author: string;
    protected isbn: string;
    private isBorrowed: boolean;

    constructor(id: number,title: string,author: string,isbn: string) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isBorrowed = false
    }

    public displayBookInfo(){
        console.log(`
        Book - ID: ${this.id}
        Title: ${this.title}
        Author: ${this.author}
        ISBN: ${this.isbn}
        IsAvailable: ${!this.isBorrowed}`);
    }

    public getTitle(): string {
        return this.title;
    }

    public borrowBook():void {
        this.isBorrowed = true;
    }

    public isAvailable(): boolean {
        return !this.isBorrowed;
    }

    public returnBook(): void {
        this.isBorrowed = false;
    }


}