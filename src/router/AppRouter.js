import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import AddBook from '../components/AddBook';
import BooksList from '../components/BooksList';
import useLocalStorage from '../hooks/useLocalStorage';
import BooksContext from '../context/BooksContext';
import EditBook from '../components/EditBook';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';



  
const AppRouter = () => {
    const [books, setBooks] = useLocalStorage('books', []);
  
    return (
      <BrowserRouter>      
        <Header />
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-12">
              <BooksContext.Provider value={{ books, setBooks }}>
                <Switch>
                  <Route component={BooksList} path="/" exact={true} />
                  <Route component={AddBook} path="/add" />
                  <Route component={EditBook} path="/edit/:id" />
                  <Route component={() => <Redirect to="/" />} />
                </Switch>
              </BooksContext.Provider>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  };

  
export default AppRouter;