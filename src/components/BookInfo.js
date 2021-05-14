import { BiTrash } from "react-icons/bi"

const BookInfo = ({ book, ononDeleteBook}) => {
  return (
    <li className="px-3 py-3 flex items-start">
      <button onClick={() => ononDeleteBook(book.id)}
        className="p-1.5 mr-1.5 mt-1 rounded text-white bg-red-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        <BiTrash /></button>
      <div className="flex-grow">
        <div className="flex items-center">
          <span className="flex-none font-medium text-2xl text-blue-500">Title:{book.title}</span>
          <span className="flex-grow text-right">{book.pubDate}</span>
        </div>
        <div><b className="font-bold text-blue-500"></b> {book.author}</div>
        <div className="leading-tight">{book.isbn}</div>
        
      </div>
    </li>
  )
}

export default BookInfo