import {nanoid} from "nanoid";

interface IArticle {
    id: string;
    title: string;
    img: string;
    content: string;
    type: string;
}

class Article implements IArticle {
    content: string;
    id: string;
    img: string;
    title: string;
    type: string;

    constructor(title: string, img: string, content: string, type: string) {
        this.id = nanoid();
        this.title = title;
        this.img = img;
        this.content = content;
        this.type = type;
    }

}

export default Article
