// Mock data for comments

let commentData = [
  {
    name: "Miles Acosta",
    value: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    timestamp: new Date(2020, 12, 20)
  },
  {
    name: "Emilie Beach",
    value: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    timestamp: new Date(2021, 01, 09)
  },
  {
    name: "Connor Walton",
    value: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    timestamp: new Date(2021, 02, 17)
  }
];

// Getting references to elements on the page

const nameInput = document.getElementById("name");
const commentInput = document.getElementById("comment");
const button = document.querySelector(".comment-button");
const comments = document.querySelector(".comments");
const form = document.querySelector(".comment-form__form");

// Function that constructs a comment and appends it to the comments list in DOM

const displayComment = (cmnt) => {
  const comment = document.createElement("article");
  comment.classList.add("comment");

  const commentWrapper = document.createElement("div");
  commentWrapper.classList.add("comment__wrapper", "divider");

  const commentAvatar = document.createElement("div");
  commentAvatar.classList.add("comment__avatar");

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
  commentText.innerText = cmnt.value;

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

    // Add input data as an object to the comments array

    commentData.push({
      name: nameInput.value,
      value: commentInput.value,
      timestamp: new Date(),
    });

    // Clear all the comments

    while (comments.children[0]) {
      comments.children[0].remove();
    }

    // Loop over comments array and add them to the DOM

    commentData.forEach((oneComment) => {
      displayComment(oneComment);
    });

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

// Loop over comments array to add them to the bio page DOM

commentData.forEach((oneComment) => {
  displayComment(oneComment);
});