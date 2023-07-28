import React from 'react'



export const BookList = ({books,deleteBook}) => {
  return books.map(book=>(
    <tr key={book.ISBN}>
        <td>{book.ISBN}</td>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>{book.price}</td>
        <td className='delete-btn' onClick={()=>deleteBook(book.ISBN)}><button type='button' className='btn btn-danger'>Delete</button></td>
    </tr>

  )
  )
}
