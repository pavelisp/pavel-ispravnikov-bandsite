// Mockup data for the shows

const showsData = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },

  {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },

  {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },

  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },

  {
    date: "Wed Dec 15 2021",
    venue: "Press Club ",
    location: "San Francisco, CA",
  },
];

// Selecting the element to insert shows array content into

const shows = document.querySelector(".shows__list");

// Populating the shows list with items from the shows array

showsData.forEach(x=>{
  let showsItem = document.createElement('li');
  let showsItemInfoDate = document.createElement('p');
  let showsItemInfoVenue = document.createElement('p');
  let showsItemInfoLocation = document.createElement('p');
  let showsItemHeader = document.createElement('span');
  let showsButton = document.createElement('button');

  showsItem.classList.add('shows__item', 'divider');
  showsItemInfoDate.classList.add('shows__item-info','shows__item-info--bold');
  showsItemInfoVenue.classList.add('shows__item-info');
  showsItemInfoLocation.classList.add('shows__item-info');
  showsItemHeader.classList.add('shows__item-header');
  showsButton.classList.add('shows__button','button');

  showsItemInfoDate.append(showsItemHeader);
  showsItemInfoDate.innerText = x.date;
  showsItemInfoVenue.innerText = x.venue;
  showsItemInfoLocation.innerText = x.location;
  showsButton.innerText = 'Buy Tickets'

  showsItem.appendChild(showsItemInfoDate);
  showsItem.appendChild(showsItemInfoVenue)
    showsItem.appendChild(showsItemInfoLocation)
    showsItem.appendChild(showsButton)
  shows.appendChild(showsItem);
})

// Added event listener on shows items to add active state on clicked items

shows.addEventListener("click", (e) => {
e.preventDefault();

// Add shows listing active status on clicked item if doesn't already have it & remove if has it

if(e.target.closest('.shows__item').classList.contains('shows__item--active') === false ){

  // Remove active status from all the show listings

  for(let item of shows.children){
    item.classList.remove('shows__item--active')
  }
    // Add active status to clicked li

  e.target.closest('.shows__item').classList.add('shows__item--active')
} else {

    // remove active status from clicked li
  e.target.closest('.shows__item').classList.remove('shows__item--active')
}

});
