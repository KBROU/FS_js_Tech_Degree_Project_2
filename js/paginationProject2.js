//Project 2: Pagination
//Kody Broussard
//5_26_2018
//Use jQuery

//Create a function that shows first 10 students

 //$('.student-list').hide();

const list = $('.student-list li');
const perPage = 10;
const pageCount = $(list).length / perPage;
const page = 1; 

//Create and append the pagination links
for(var i = 0 ; i<pageCount; i++){
       $('.pagination').append('<li><a href="#">'+(i+1)+'</a></li> ');
     }

$('.pagination li a').first().addClass("active");


//Create the showPage function
function showPage (index, pageNumber) {
   // first hide all students on the page
    list.hide();
    // then loop through all students in our student list argument
    list.each( function (index, value) {
    // if student should be on this page number    
    if(index >= perPage * (pageNumber-1) && index < perPage * pageNumber) {
        // show the student
        $(value).show();
        }  
    });
}


//Call function
showPage( list, page);

 //Add functionality to the pagination links with an event listener
$('.pagination li a').click(function () {
    $('.pagination li a').removeClass("active");
    $(this).addClass("active");
    showPage(this, parseInt($(this).text()))
});


//Extra Credit Search Function

//Add Search Component

$('.student-search').append('<div><input type="text" id="searchInput"  placeholder="Search for students..."><button>Search</button></div>');


//The click and keyup method works together
//Add functionality to the search
$('.student-search, #searchInput').on('click keyup', function () {
    //console.log(event.target);
      var inputValue = $("#searchInput").val().toLowerCase();
        $(list).filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(inputValue) > -1); 
        });
    });   













