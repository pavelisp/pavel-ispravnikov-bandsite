// Bandsite API: 104baf9f-b99e-42b2-a940-473e1f68bbb9

// Getting comments from BandSite API

const loadComments = () => { axios.get('https://project-1-api.herokuapp.com/comments?api_key=104baf9f-b99e-42b2-a940-473e1f68bbb9')
.then((res)=>{
  console.log(res.data)
res.data.forEach((comment)=>{
  let randomNum = Math.floor(Math.random()*1111)
  displayComment(comment, `url(https://source.unsplash.com/100x100/?person?sig${randomNum})`)});
})};


// Post comment on form submit

const postComment = (name, comment) => {
  axios({
    method: 'post',
    url: 'https://project-1-api.herokuapp.com/comments?api_key=104baf9f-b99e-42b2-a940-473e1f68bbb9',
    headers: {'Content-Type': 'application/json'},
    data: {
      name: name,
      comment: comment
    },

  }).then(()=>{
    loadComments();
  })
}

// Getting references to elements on the page

const nameInput = document.getElementById("name");
const commentInput = document.getElementById("comment");
const button = document.querySelector(".comment-button");
const comments = document.querySelector(".comments");
const form = document.querySelector(".comment-form__form");

// Function that constructs a comment and appends it to the comments list in DOM

const displayComment = (cmnt, portrait) => {
  const comment = document.createElement("article");
  comment.classList.add("comment");
  comment.setAttribute('id', cmnt.id);

  const commentWrapper = document.createElement("div");
  commentWrapper.classList.add("comment__wrapper", "divider");

  const commentAvatar = document.createElement("div");
  commentAvatar.classList.add("comment__avatar");
  commentAvatar.style.backgroundImage = portrait;

  const commentContent = document.createElement("div");
  commentContent.classList.add("comment__content");

  const commentHeader = document.createElement("div");
  commentHeader.classList.add("comment__header");

  const commentName = document.createElement("h4");
  commentName.classList.add("comment__name");
  commentName.innerText = cmnt.name;

  const commentDate = document.createElement("span");
  commentDate.classList.add("comment__date", "date");
  commentDate.innerText = moment(cmnt.timestamp).fromNow();

  const commentText = document.createElement("p");
  commentText.classList.add("comment__text");
  commentText.innerText = cmnt.comment;

  commentHeader.appendChild(commentName);
  commentHeader.appendChild(commentDate);

  commentContent.appendChild(commentHeader);
  commentContent.appendChild(commentText);

  commentWrapper.appendChild(commentAvatar);
  commentWrapper.appendChild(commentContent);

  comment.appendChild(commentWrapper);

  comments.prepend(comment);
};

// Form event listener

form.addEventListener("submit", (e) => {

  // Prevent page refresh

  e.preventDefault();

  // Remove red border on repeat submit

  nameInput.classList.remove("comment-form__input--error");
  commentInput.classList.remove("comment-form__input--error");

  // If both inputs have values

  if (nameInput.value && commentInput.value) {

    // Push comment data into BandSite API

    postComment(nameInput.value, commentInput.value)
    
    // Clear all the comments

    while (comments.children[0]) {
      comments.children[0].remove();
    }

    // Clear form inputs

    nameInput.value = "";
    commentInput.value = "";
  } else {

    // If any of input fields is empty, put a red border around it

    if (nameInput.value === "") {
      nameInput.classList.add("comment-form__input--error");
    }
    if (commentInput.value === "") {
      commentInput.classList.add("comment-form__input--error");
    }
  }
});

// Initial load of the comments

loadComments();