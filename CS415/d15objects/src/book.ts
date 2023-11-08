/*
o	createBook, which will take title, author, and libraryID as inputs.  It will create a new book object and add it to the library, 
which will be represented as a global array named libraryBooks.  createBook should return the newly created book.
o	findTitles, which will find all the book titles in libraryBooks and return them in an alphabetically ordered array.
o	findAuthors, which will find all the authors in libraryBooks and return them in an alphabetically ordered array.
o	findIDs, which will find all the libraryIDs in libraryBooks and return them in an alphabetically ordered array.
*/

export interface Book {
    title: string,
    author: string,
    libraryID: number
}

export let library: Book[] = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
];


/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
export function showTitles(): void {
    /* this function is complete, no need to modify.  Inspect it as an example for the other functions. */
    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

    const titles = findTitles();

    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
    titles.sort();
    const titleString = titles.join("\n");

    let textArea: HTMLInputElement | null = document.getElementById("displayArea") as HTMLInputElement | null;
    if (textArea) { textArea.innerHTML = titleString; }
}

export function showAuthor(): void {
    /* this function is complete, no need to modify.  Inspect it as an example for the other functions. */
    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

    const authors = findAuthors();

    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
    authors.sort();
    const authorString = authors.join("\n");

    let textArea: HTMLInputElement | null = document.getElementById("displayArea") as HTMLInputElement | null;
    if (textArea) { textArea.innerHTML = authorString; }
}
export function showID(): void {
    /* this function is complete, no need to modify.  Inspect it as an example for the other functions. */
    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

    const id = findIDs();

    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
    id.sort();
    const idString = id.join("\n");

    let textArea: HTMLInputElement | null = document.getElementById("displayArea") as HTMLInputElement | null;
    if (textArea) { textArea.innerHTML = idString; }
}

/**
 * 
 * @return {object} array holding all titles as elements
 */
export function findTitles(): string[] {

    let title:string[] = [];
    for (const book of library){
        title.push(book.title)
    }
    //fix this to work according to the specs

    // let titles = ["This is a test title", "Another test title", "And another test title for good measure"];  
    return title.sort();
}


/**
 * @returns {undefined} no return
 * Event handler for Add book button.  Creates and adds book to the library
 */
export function addBook():  void {

    let title: HTMLInputElement  = document.getElementById("title") as HTMLInputElement;
    let author: HTMLInputElement  = document.getElementById("author") as HTMLInputElement;
    let libraryID: HTMLInputElement = document.getElementById("libraryID") as HTMLInputElement;

    let titleValue = title.value;
    let authorValue = author.value;
    let libraryidValue = +libraryID.value;
    let newlyAddedBook:Book = createBook(titleValue, authorValue, libraryidValue);
    console.log(newlyAddedBook);
    console.log(findAuthors());
    console.log("finish the implementation -- get the author, create a book object, and add to the library array!!");
}


/**
 * 
 * @returns {string[]} find all  authors in libraryBooks and return them in alphabetically ordered array.
 */
export function findAuthors(): string[] {
    //implement this
    let author:string[] = [];
    for (const book of library){
        author.push(book.author)
    }
    return author.sort();
}

/**
 * 
 * @returns {number[]} find all the libraryIDs in libraryBooks and return them in an alphabetically ordered array.
*/
export function findIDs(): number[] {
    //implement this
    let libraryIDs:number[] = [];
    for (const book of library){
        libraryIDs.push(book.libraryID)
    }
    return libraryIDs.sort();
}


/**
 * @returns {book} new book object
 * createBook, which will take title, author, and libraryID as inputs.  It will create a new book object and add it to the library, 
which will be represented as a global array named libraryBooks.  createBook should return the newly created book.
 */
export function createBook(title: string, author: string, libraryID: number): Book {
    let newlyCreated:Book ={title:title, author:author, libraryID:libraryID};
    library.push(newlyCreated);
    return newlyCreated;

}

/**
 * 
 * @returns {undefined} 
 */
export function scramble(): void {
    console.log("implement scramble if you have time ...");

    const titles = findTitles();

    /*need to sort and then join the titles by their length (e.g., someArray.join("\n")  */ 
    let titleSplit = titles.join(" ").split(" "); 
    titleSplit.sort((a, b) => a.length - b.length);
    let titleString= titleSplit[0];
    for (let i = 1; i < titleSplit.length; i++){
        if (titleSplit[i].length === titleSplit[i-1].length){
            titleString += " " + titleSplit[i]
        }else{
            titleString += "\n" + titleSplit[i]
        }
    }

    let textArea: HTMLInputElement | null = document.getElementById("displayArea") as HTMLInputElement | null;
    if (textArea) { textArea.innerHTML = titleString; }

}

