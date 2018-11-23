//Project 2: Pagination
//Kody Broussard
//5_26_2018
//Use jQuery

//Set variables
let numberOfPages;
let searchList = [];
const list = $('.student-list li');
const perPage = 10;
const page = 1;

//Create pageCount function to calculate 10 items per page
function pageCount (index) {
    numberOfPages = $(index).length / perPage;
}
//call pageCount 
pageCount (list);

//Create the pagination buttons and add active class to the first button
function paginButton () {
    for(var i = 0 ; i<numberOfPages; i++){
       $('.pagination').append('<li><a href="#">'+(i+1)+'</a></li> ');
     }

    $('.pagination li a').first().addClass("active");
}
//call paginButton function
paginButton ();


//Add functionality to the pagination links with a click event listener
function paginFunction (arr) {
    $('.pagination li a').click(function () {
        $('.pagination li a').removeClass("active");
        $(this).addClass("active");
        showPage($(arr), parseInt($(this).text()))
    });
}
//call paginFunction function
paginFunction (list);

//Create function that loops through all the students and displays 10 per page
function showPage (arr, pageNumber) {
    // Loop through all students in our student list argument
    $(arr).each( function (index, value) {
    // if student should be on this page number    
    if(index >= perPage * (pageNumber-1) && index < perPage * pageNumber) {
        // show the student
        $(value).show();
       } else {
        $(value).hide();
        }  
    });
}


//Call showPage function
showPage (list, page);


//Extra Credit Search Function

//Add Search Component to webpage

$('.student-search').append('<div><input type="text" id="searchInput"  placeholder="Search for students..."><button>Search</button></div>');

//No search result function

function noResult () {
    $('.student-list').prepend('<div class ="noMessage"><span>No Results From Search</span></div>'); 
    $('.noMessage').hide();
}
noResult ();

//Add functionality to the search
$('.student-search button, #searchInput').on('click keyup', function () {
    //reset searchList and pagination buttons
    searchList = [];
    $('.pagination li a').hide();
    //create variable for user input  
    var inputValue = $("#searchInput").val().toLowerCase();
        //Loop through the list display list items that match input and hide the rest
        $(list).each( function (){
            if($(this).text().includes(inputValue)) {
                $(this).show();
                if (searchList !== $(this).show()) {
                    searchList.push($(this).show())
                    }
               } else {
                $(this).hide();
               }
        });
        //call variables 
        pageCount (searchList);
        showPage (searchList, page);
        paginButton ();
        paginFunction (searchList);
        
        //Display no result if search does not find a match
        if (searchList.length === 0){
             $('.noMessage').show();
            } else {
             $('.noMessage').hide(); 
            }
        
});   


















