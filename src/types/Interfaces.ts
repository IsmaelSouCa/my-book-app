export interface IBook {
    ISBN : string;
    title: string;
    author: string;
    published: string;
    cover: string;
    status: 'Leído' | 'Pendiente';
    isFavorite: boolean;
}