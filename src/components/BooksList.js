import React, { useContext } from 'react';
import _ from 'lodash';
import Book from './Book';
import BooksContext from '../context/BooksContext';

const BooksList = () => {
  const { books, setBooks } = useContext(BooksContext);

  const handleRemoveBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <React.Fragment>
      <div className="table-responsive">
        <table className="table" id="myTable">
          <thead>
            <tr>
              <th scope="col">Título </th>
              <th scope="col">Autor</th>
              <th scope="col">Quantidade</th>
              <th scope="col">Preço</th>
              <th scope="col">Código</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody id="book-list">
            {!_.isEmpty(books) ? (
              books.map((book) => (
                <Book key={book.id} {...book} handleRemoveBook={handleRemoveBook} />
              ))
            ) : (
              <p className="message">Nenhum livro em estoque. Por favor, cadastre um livro.</p>
            )}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default BooksList;