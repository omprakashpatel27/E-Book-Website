function feedback(){
    return document.getElementById("feed").innerHTML = " Thanks for Your Feedback. We delightful to know that you like our BookStore."
};
function feedback1(){
    return document.getElementById("feed").innerHTML = " Thanks for Your Feedback. We try to upgrade our services for sure in future ."
};
function feedback2(){
    return document.getElementById("feed").innerHTML = " Thanks for Your Feedback. We apology that you won't found e-boook. We will try to add your e-book."
};
function feedback3(){
    return document.getElementById("feed").innerHTML = " Thanks for Your Feedback \n Sorry for Inconveince, We defenitely Resolve Your Issue in Future."
};
bookname = ["Harry Potter and the Deathly Hallows",
 "The Name of the Wind",
 "The Way of Kings",
 "The Wise Man's Fear",
 "Words of Radiance",
 "Clockwork Princess",
 "A Storm of Swords",
"Harry Potter and the Prisoner of Azkaban",
"Harry Potter and the Half-Blood Prince ",
"Harry Potter and the Goblet of Fire"];
 JSONbook_name = JSON.stringify(bookname);
 localStorage.setItem("book_name",JSONbook_name);

 authorname = ["J.K Rowling",
 "Patrick Rothfuss",
 "Brandon Sanderson",
 "Patrick Rothfuss",
 "Brandon Sanderson",
"Cassandra Clare",
"George R.R. Martin",
"J.K Rowling",
"J.K Rowling",
"J.K Rowling"];
 JSONauthor_name = JSON.stringify(authorname);
 localStorage.setItem("author_name",JSONauthor_name);

 rating = ["4.61","4.54","4.65","4.57","4.76","4.58","4.54","4.56","4.56","4.55","4.66","4.55"];
 JSONrating_name = JSON.stringify(rating);
 localStorage.setItem("rating_name",JSONrating_name);

 read = ["Click Here to Read",
 "Click Here to Read",
 "Click Here to Read",
 "Click Here to Read",
 "Click Here to Read",
  "Click Here to Read",
   "Click Here to Read",
 "Click Here to Read",
  "Click Here to Read",
   "Click Here to Read"];
 JSONread_name = JSON.stringify(read);
 localStorage.setItem("read_name",JSONread_name);


 