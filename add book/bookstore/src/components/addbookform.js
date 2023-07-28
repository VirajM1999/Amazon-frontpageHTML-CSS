
import { useState ,useEffect} from 'react';

import React from 'react'

import  {BookList } from './booklist';

 
const getbookdata=()=>{
    const data=localStorage.getItem('books');
    if(data){
        return JSON.parse(data)
    }
    else{
        return []
    }
}

export default function AddBookForm() {

    
        const [books, setBooks]=useState(getbookdata)
    
      const[ISBN,setISBN]=useState('')
      const[title,setTitle]=useState('')
      const[author,setAuthor]=useState('')
      const[price,setPrice]=useState('')
    
      //add books
      const addbooksubmit=(e)=>{
        e.preventDefault();
        let book={
          ISBN,
          title,
          author,
          price
        }
        setBooks([...books,book])
        setISBN('')
        setTitle('')
        setAuthor('')
        setPrice('')
       
      }
      //delete books
      const deleteBook=(ISBN)=>{
       const deletebooks=books.filter((element,index)=>{
        return element.ISBN!==ISBN
       })
       setBooks(deletebooks)
      }



      //saving data to localstorage
      useEffect(()=>{
        localStorage.setItem('books',JSON.stringify(books));},[books])

      return (
          <div className='main'>
        <div className="formcontainer">
                <h1>Add book</h1>
              <form className='form-group' onSubmit={addbooksubmit}>
                <label>ISBN number</label>
                <input type='text' className='form-control' required
                onChange={(e)=>setISBN(e.target.value)} value={ISBN}/>
                <br></br>
                <label>Title</label>
                <input type='text' className='form-control' required
                onChange={(e)=>setTitle(e.target.value)} value={title}/>
                <br></br>
                <label>Author</label>
                <input type='text' className='form-control' required
                onChange={(e)=>setAuthor(e.target.value)} value={author}/>
                <br></br>
                <label>Price</label>
                <input type='text' className='form-control' required
                onChange={(e)=>setPrice(e.target.value)} value={price}/>
                <br></br>
                <button type='submit' className='btn btn-success btn-md'>ADD</button>
              </form>
            </div>

            <div className='viewcontainer'>
                {books.length>0 &&<>
               <div className="table-responsive">
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ISBN</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                         <BookList books={books} deleteBook={deleteBook} />
                    </tbody>
                </table>
               </div>
               <button className='btn btn-danger btn-md'onClick={()=>setBooks([])} >Remove all</button>
                </>}
               
                <br></br>
                {books.length<1 && <div> No books are added yet</div>}
            </div>
            </div>
      )
    }

 

