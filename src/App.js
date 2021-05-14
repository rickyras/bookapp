import { useState, useEffect, useCallback } from 'react'
import { BiCalendar } from "react-icons/bi"
import Sort from "./components/Sort"
import GetBook from "./components/GetBook"
import BookInfo from "./components/BookInfo"

function App() {

  let [bookList, setBookList] = useState([]);
  let [query, setQuery] = useState("");
  let [sortBy, setSortBy] = useState("author");
  let [orderBy, setOrderBy] = useState("asc");

  const filteredAppointments = bookList.filter(
    item => {
      return (
        item.author.toLowerCase().includes(query.toLowerCase()) ||
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.isbn.includes(query) 
      )
    }
  ).sort((a, b) => {
    let order = (orderBy === 'asc') ? 1 : -1;
    return (
      a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
        ? -1 * order : 1 * order
    )
  })

 

  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl mb-3">
        <BiCalendar className="inline-block text-red-400 align-top" />Book Search</h1>
      <GetBook
        onSendBook={mySearch => setBookList([...bookList, mySearch])}
        lastId={bookList.reduce((max, item) => Number(item.id) > max ? Number(item.id) : max, 0)}
      />
      <Sort query={query}
        onQueryChange={myQuery => setQuery(myQuery)}
        orderBy={orderBy}
        onOrderByChange={mySort => setOrderBy(mySort)}
        sortBy={sortBy}
        onSortByChange={mySort => setSortBy(mySort)}
      />

      <ul className="divide-y divide-gray-200">
        {filteredAppointments
          .map(book => (
            <BookInfo key={book.id}
              book={book}
              ononDeleteBook={
                appointmentId =>
                  setBookList(bookList.filter(book =>
                    book.id !== appointmentId))
              }
            />
          ))
        }
      </ul>
    </div>
  );
}

export default App;
