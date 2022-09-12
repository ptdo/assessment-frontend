export interface IAuthor {
    id: string,
    name: string,
    avatar: string
}

export interface IComment {
    id: string,
    title: string,
    description: string,
    createdAt: Date
}

export interface IPost {
    id: string,
    title: string,
    description: string,
    authors: IAuthor[],
    comments: IComment[],
    createdAt: Date
}