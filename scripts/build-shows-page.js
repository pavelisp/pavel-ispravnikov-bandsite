// Bandsite API: 104baf9f-b99e-42b2-a940-473e1f68bbb9

// Getting shows data from BandSite API

axios.get('https://project-1-api.herokuapp.com/showdates?api_key=104baf9f-b99e-42b2-a940-473e1f68bbb9')
.then((res)=>{
  console.log(res.data)
res.data.forEach((show)=>{loadShows(show)});
});

// Selecting the element to insert shows array content into

const shows = document.querySelector(".shows__list");

// Populating the shows list with items from the shows array

const loadShows = x =>{
  
  let showsItem = document.createElement('li');
  let showsItemInfoDate = document.createElement('p');
  let showsItemInfoVenue = document.createElement('p');
  let showsItemInfoLocation = document.createElement('p');
  let showsItemHeaderDate = document.createElement('span');
  let showsItemHeaderVenue = document.createElement('span');
  let showsItemHeaderLocation = document.createElement('span');
  let showsButton = document.createElement('button');

  showsItem.classList.add('shows__item', 'divider');
  showsItemInfoDate.classList.add('shows__item-info','shows__item-info--bold');
  showsItemInfoVenue.classList.add('shows__item-info');
  showsItemInfoLocation.classList.add('shows__item-info');
  showsItemHeaderDate.classList.add('shows__item-header');
  showsItemHeaderDate.append('Date');
  showsItemHeaderVenue.classList.add('shows__item-header');
  showsItemHeaderVenue.append('Venue');
  showsItemHeaderLocation.classList.add('shows__item-header');
  showsItemHeaderLocation.append('Location');
  showsButton.classList.add('shows__button','button');
  
  showsItemInfoDate.innerText = moment(Number(x.date)).format('ddd MMM DD YYYY');
  showsItemInfoDate.prepend(showsItemHeaderDate);
  showsItemInfoVenue.innerText = x.place;
  showsItemInfoVenue.prepend(showsItemHeaderVenue);
  showsItemInfoLocation.innerText = x.location;
  showsItemInfoLocation.prepend(showsItemHeaderLocation);
  showsButton.innerText = 'Buy Tickets'

  showsItem.appendChild(showsItemInfoDate);
  showsItem.appendChild(showsItemInfoVenue)
    showsItem.appendChild(showsItemInfoLocation)
    showsItem.appendChild(showsButton)
  shows.appendChild(showsItem);
};

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
