import { Author } from "@/interfaces";

export async function getAuthorById(id:number) {
    const url = `${process.env.WORDPRESS_URL}/wp-json/wp/v2/users/${id}`;

    
    const response = await fetch(url);
    const author: Author = await response.json();
    console.log('author',author)
    
      return author;
}