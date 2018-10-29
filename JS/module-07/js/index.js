"use strict";

const posts = [
    {
        img: "https://placeimg.com/400/150/arch",
        title: "Post title 1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
        link: 'link-1.com'
    },
    {
        img: "https://placeimg.com/400/150/nature",
        title: "Post title 2",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
        link: 'link-2.com'
    },
    {
        img: "https://placeimg.com/400/150/arch",
        title: "Post title 3",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
        link: 'link-3.com'
    }
];

const body = document.querySelector('body');

const result = createCards (posts);

body.append(...result); 

/*Helpers*/

function createCards (posts) {
  return posts.reduce((acc, el) => acc.concat(createPostCard (el)), []);
};

function createPostCard ({img, title, text, link}) {
  
  // create element
  const post = document.createElement('div');
  const postImage = document.createElement('img');
  const postTitle = document.createElement('h2');
  const postText = document.createElement('p');
  const button = document.createElement('a');

  // add class
  post.classList.add('post');
  postImage.classList.add('post__image');
  postTitle.classList.add('post__title');
  postText.classList.add('post__text');
  button.classList.add('button');

  // add attr
  postImage.setAttribute('src', img);
  postImage.setAttribute('alt', 'post image');
  button.setAttribute('href', '#');

  // paste textContent
  postTitle.textContent = title;
  postText.textContent = text;
  button.textContent = link;

  post.append(postImage, postTitle, postText, button);

  return post;
}