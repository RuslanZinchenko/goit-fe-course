'use strict'

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


for (let i of posts) {
  // select element
  let body = document.querySelector('body')

  // create element
  let post = document.createElement('div')
  let img = document.createElement('img')
  let h2 = document.createElement('h2')
  let p = document.createElement('p')
  let a = document.createElement('a')

  // add class
  post.classList.add('post')
  img.classList.add('post__image')
  h2.classList.add('post__title')
  p.classList.add('post__text')
  a.classList.add('button')

  // add attr
  img.setAttribute('src', i.img)
  img.setAttribute('alt', 'post image')
  a.setAttribute('href', '#')

  // paste textContent
  h2.textContent = i.title;
  p.textContent =i.text;
  a.textContent = i.link;

  // paste el on screen
  body.append(post)
  post.append(img)
  post.append(h2)
  post.append(p)
  post.append(a)
}