"use strict"

//////////////////////////////get all users/////////////////////////////////////////
const submitBtn = document.querySelector('.js-submit');
const resultAll = document.querySelector('.resultAll');
const apiURL = 'https://test-users-api.herokuapp.com/users/';

let n = 1;

submitBtn.addEventListener('click', getAllUsers);

function getAllUsers(evt) {
  evt.preventDefault();
  fetch(apiURL)
    .then(res => {
      if (res.ok) return res.json();
      throw new Error('Err');
    })
    .then(data => {
      const users = data.data;
      createTable(users);
    })
    .catch(err => console.log(err));
}

const createTable = users => {
  const markup = users.reduce((markup, user) => markup +
    `<tr>
      <td class="nTd">${n++}</td>
      <td class="nTd">${user.id}</td>
      <td class="nameTd">${user.name}</td>
      <td class="ageTd">${user.age}</td>
    </tr>`, '');
    let table = `<table class="table_blur">
    <thead>
      <th>№</th>
      <th>ID</th>
      <th>NAME</th>
      <th>AGE</th>
    </thead>
    <tbody>
      ` + markup + `
    </tbody>
    </table>`
  updateTable(table);
}

const updateTable = table => {
  resultAll.innerHTML = table;
}
/////////////////////////get user////////////////////////////////////////////////////
const inputID = document.querySelector('.inputID');
const btnID = document.querySelector('.btnID');
const resultID = document.querySelector('.resultID');

btnID.addEventListener('click', getUserById);

function getUserById(evt) {
  evt.preventDefault();
  fetch(apiURL + inputID.value)
    .then(res => {
      if (res.ok) return res.json();
      throw new Error('Err');
    })
    .then(data => {
      if (data.status !== 200) {
        resultID.innerHTML = 'Invalid data value';
      } else {
        showUser(data);
      }
    })
    .catch(err => console.log(err));
}

const showUser = data => {
  if (data) {
    let user = data.data;
    resultID.innerHTML =
    `<p>id: ${user.id}</p>
    <p>name: ${user.name}</p>
    <p>age: ${user.age}</p>`
    inputID.value = '';
  }
}
///////////////////////////upload user/////////////////////////////////////////////////
const nameAdd = document.querySelector('.nameAdd');
const ageAdd = document.querySelector('.ageAdd');
const btnAdd = document.querySelector('.btnAdd');
const resultAdd = document.querySelector('.resultAdd') ;

const options = btnAdd.addEventListener('click', addUser);

function addUser(evt) {
  evt.preventDefault();
  fetch(apiURL, {
    method: 'POST',
    body: JSON.stringify({
      name: nameAdd.value,
      age: ageAdd.value
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(res => {
      if (res.ok) return res.json();
      throw new Error('Err' + res.statusText);
    })
    .then(data => {
      if (data.status !== 201) {
        resultAdd.innerHTML = 'Invalid data value';
      } else {
        let user = data.data;
        resultAdd.innerHTML = `user name: ${user.name}, age: ${user.age} succesfully posted`;
        nameAdd.value = '';
        ageAdd.value = '';
      }
    })
    .catch(err => console.log(err));
  }
////////////////////////////////remove user//////////////////////////////////////////////
const inputRmv = document.querySelector('.inputRmv');
const btnRmv = document.querySelector('.btnRmv');
const resultRmv = document.querySelector('.resultRmv'); 

btnRmv.addEventListener('click', removeUser);

function removeUser(evt) {
  evt.preventDefault();
  fetch(apiURL + inputRmv.value, {
    method: 'DELETE',
    body: JSON.stringify({
    id: inputRmv.value
    })
  })
    .then(res => {
      if (res.ok) return res.json();
      throw new Error('Err' + res.statusText);
    })
    .then(data => {
      console.log(data.status);
      if (data.status !== 200) {
        resultRmv.innerHTML = 'Invalid data value';
      } else {
        resultRmv.innerHTML = 'user was succesfully deleted';
        inputRmv.value = '';
      }
    })
    .catch(err => console.log(err));
  }
////////////////////////////////update user info/////////////////////////////////////////////
const inputUpd = document.querySelector('.inputUpd');
const nameUpd = document.querySelector('.nameUpd');
const ageUpd = document.querySelector('.ageUpd');
const btnUpd = document.querySelector('.btnUpd');
const resultUpd = document.querySelector('.resultUpd');

btnUpd.addEventListener('click', updateUser);

function updateUser(evt) {
  evt.preventDefault();
  fetch(apiURL + inputUpd.value, {
    method: 'PUT',
    body: JSON.stringify({
      id: inputUpd.value,
      name: nameUpd.value,
      age: ageUpd.value
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(res => {
      if (res.ok) return res.json();
      throw new Error('Err' + res.statusText);
    })
    .then(data => {
      let user = data.data;
      if (data.status !== 200) {
        resultUpd.innerHTML = 'Invalid data value';
      } else {
        resultUpd.innerHTML = `user with id: ${user.id} was succesfully updated to name: ${user.name}, age:${user.age}`;
        inputUpd.value = '';
        nameUpd.value = '';
        ageUpd.value = '';
      }
    })
    .catch(err => console.log(err));
    }