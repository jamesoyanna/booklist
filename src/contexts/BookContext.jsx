import React, {createContext, useState} from 'react';
import uuid from 'uuid/v1';
export const BookContext  = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: "name of wind", author: "Fani Kayode", id:1},
        { title: "empire of money", author: "John bush", id: 2},
        { title: "final battle", author: "Rita Domnic", id: 3}
    ])
    
    const addBook = (title, author)=>{
        setBooks([...books, {title, author, id:uuid}])
    }

    const removeBook = (id)=>{
     setBooks(books.filter(book =>book.id !==id))
    }

    return ( 
       <BookContext.Provider value = {{books, addBook, removeBook}}>
         {props.children}
       </BookContext.Provider>
     );
}
 
export default BookContextProvider;