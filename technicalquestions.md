technical questions.md. 
1.	How long did you spend on the coding assignment? 2 days
<br>
a.	What would you add to your solution if you had more time? I would add the ability to paginate all the results for the single query, make clickable redirects (separate api calls) from the results shown to get more specific result. 
<br>
b.	If you didn't spend much time on the coding test, then use this as an opportunity to explain what you would add.
If I didn’t spend as much time on the coding test, I would have implemented an Ajax search, to automatically display results as search is typed, without having to enter submit.
<br>
2.	What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
The most useful feature of the project has to be the const and let variables, which allows the object to be used within its scope, as opposed to using var which assignes an object 



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

<br>
3.	How would you track down a performance issue in production? Have you ever had to do this?
I would track down a performance issues by placing breakpoints within code( functions, variables, loops)  before and after to see if a particular value is being assigned or not, or why code is breaking a certain point. 
<br>
4.	How would you improve the API that you just used?
I would change the way the Object is created for certain values, as some results return an array with multiple ISBNs for the same book. Other than that, it is a fairly usable api. 
<br>
5.	Please describe yourself using correctly formatted JSON.
{
"name": "Ritchie",
"lastname": "Perera",
"age": 31,
"nationality": "Canadian",
"livesin": "Toronto",
"passions": [
"Programming",
"Basketball",
"Music"
],
"interests": [
"Education",
"Sports"
],
"dreams": [
"To have seen the whole world”
],
}
