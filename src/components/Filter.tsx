import type { IBook } from "../types/Interfaces";

function filterBooksByStatus(books: IBook[], status: string): IBook[] {
    return books.filter(book => book.status === status);
}

export default filterBooksByStatus;