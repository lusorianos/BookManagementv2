import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const BookForm = (props) => {
    const [book, setBook] = useState(() => {
        return {
            bookname: props.book ? props.book.bookname : '',
            author: props.book ? props.book.author : '',
            quantity: props.book ? props.book.quantity : '',
            price: props.book ? props.book.price : '',
            isbn: props.book ? props.book.isbn : ''
        };
    });

  const [errorMsg, setErrorMsg] = useState('');
  const { bookname, author, price, quantity, isbn } = book;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [bookname, author, price, quantity, isbn];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const book = {
        id: uuidv4(),
        bookname,
        author,
        price,
        quantity,
        isbn
      };
      props.handleOnSubmit(book);
    } else {
      errorMsg = 'Por favor, preencha o campo.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'quantity':
        if (value === '' || parseInt(value) === +value) {
          setBook((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      case 'price':
        if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setBook((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      default:
        setBook((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div className="container" id="formulary">
      <div className="row justify-content-center">
        <div className="main-form col-12">
          <header>Cadastrar livro</header>
          {errorMsg && <p className="errorMsg"><i class="bi bi-exclamation-triangle-fill"></i>{errorMsg}</p>}
          <Form onSubmit={handleOnSubmit}>
            <Form.Group controlId="name">
              <Form.Control
                className="input-control"
                type="text"
                name="bookname"
                value={bookname}
                placeholder="Nome do livro"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="author">
              <Form.Control
                className="input-control"
                type="text"
                name="author"
                value={author}
                placeholder="Autor"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="form-content">
              <Form.Control
                className="input-control"
                type="number"
                name="quantity"
                value={quantity}
                placeholder="Quantidade em estoque"
                onChange={handleInputChange}
              />
              <Form.Control
                className="input-control"
                type="text"
                name="price"
                value={price}
                placeholder="Valor unitário"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="isbn">
              <Form.Control
                className="input-control"
                type="text"
                name="isbn"
                value={isbn}
                placeholder="Código do livro"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button type="submit" className="submit-btn">
              Cadastrar
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default BookForm;