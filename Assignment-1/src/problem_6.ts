{
//You are given an object representing a book with properties title (string), author (string), and publishedYear (number). Use type alias for declaring the object. Write a TypeScript function called isRecentBook that takes this book object as input and determines if the book was published in the last 5 years.

type Book = {
    title:string;
    author:string;
    publishedYear:number;
}

const isRecentBook = (bok:Book):boolean =>{
    const publishedYear = bok.publishedYear
    const currentYear:number = new Date().getFullYear()

    if(currentYear - publishedYear <= 5){
        return true
    }else return false

}

// Sample Input :
const book1: Book = {
    title: "Sample Book",
    author: "John Doe",
    publishedYear: 2025
};
console.log(isRecentBook(book1));


//
}