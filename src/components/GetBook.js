import { BiCalendarPlus } from "react-icons/bi";
import { useState } from 'react';
import BookInfo from "./BookInfo";
import { list } from "postcss";


 

const clearData = {
    title: '',
    author: '',
    pubDate: '',
    aptTime: '',
    isbn: '',
    
    
  } 

var GetBook = ({ onSendBook, lastId }) => {
 
  var [toggleForm, setToggleForm] = useState(true)
  var [formData, setFormData] = useState(clearData)

  
  
  function formDataPublish() {

   
   // setToggleForm(!toggleForm)

    // Function to do an Ajax call
const doAjax = async () => {
  const response = await fetch('http://openlibrary.org/search.json?q='+formData.title); // Generate the Response object
  if (response.ok) {
    const jsonValue = await response.json(); // Get JSON value from the response body
    return Promise.resolve(jsonValue);
  } else {
    document.getElementById("root").innerHTML += 'record not found';
    return Promise.reject('*** PHP file not found');
  }
}
doAjax().then(console.log).catch(console.log);


// Call the function and output value or error message to console
doAjax().then(data => {
 

  
  for (const product of data['docs']) {
    
 //   const myList = document.querySelector('ul');
var myList = document.querySelector('ul');
   // const myList = document.querySelectorAll('ul');
    const BookInfo = {
      id: lastId + 1,
      title: product.title,
      author: product.author_name[0],
      pubDate: product.publish_date[0],
      isbn: product.isbn[0]

      }
      onSendBook(BookInfo)
      
 //   setFormData(BookInfo); //sets value of input form 
    console.log(data['docs']);
    
     
 let listItem = document.createElement('li');
  listItem.appendChild(
    document.createElement('strong')
  ).textContent = product.title;
  listItem.append(
    ` Author: ${
      product.author_name
    }. Pub Date: `
  );
  listItem.appendChild(
    document.createElement('strong')
  ).textContent = `${product.publish_date}` + '    ' +  product.isbn[0] ;

listItem.setAttribute("id", product.isbn[0] );
var x = document.createElement("IMG");
x.setAttribute("src", "http://covers.openlibrary.org/b/isbn/"+product.isbn[0]+"-S.jpg");
x.setAttribute("alt", "The Pulpit Rock");

listItem.appendChild(x);

 listItem.appendChild(
  document.createElement("button")
) 
  myList.appendChild(listItem);

console.log(product.title);

//this allows 1 result to be returned, easier to sort search, if removed, all results are shown
    var indents = [];
    for (var i = 0; i < this.props.level; i++) {
      indents.push(<span className='indent' key={product.isbn[0]}>te</span>);
    }
    return indents;

}

  console.log('end of iteration');
})
.catch(console.error);




  }

  return (
/* 
    FOR THE INPUT FORM  */
    <div>
      <button onClick={() => { setToggleForm(!toggleForm) }}
        className={`bg-blue-400 text-white px-2 py-3 w-full text-left rounded-t-md
        ${toggleForm ? 'rounded-t-md' : 'rounded-md'}`}>
        <div><BiCalendarPlus className="inline-block align-text-top" /> Search Book</div>
      </button>
      {
        toggleForm &&
        <div className="border-r-2 border-b-2 border-l-2 border-light-blue-500 rounded-b-md pl-4 pr-4 pb-4">
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Title
          </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input type="text" name="title" id="title"
                onChange={(event) => { setFormData({ ...formData, title: event.target.value }) }}
                value={formData.title}
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-end">
              <button type="submit" onClick={formDataPublish} className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                Submit
            </button>
            </div>
          </div>
        </div>
      }
    </div>
  )


  

}

export default GetBook


