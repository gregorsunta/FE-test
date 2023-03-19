'use strict';

import './styles/index.css';

const UserSearch = (function () {
  let userList = null;
  let searchTimeout = null;

  const fetchUsers = async (e) => {
    const searchStr = e.target.value;
    userList = null;

    clearTimeout(searchTimeout);

    searchTimeout = setTimeout(() => {
      fetch(`https://jsonplaceholder.typicode.com/users?name_like=${searchStr}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('An error occured');
          }
          return response.json();
        })
        .then((response) => {
          userList = response;
          updateUI();
          console.log(userList);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 800);
  };

  const updateUI = () => {
    const userListContainer = document.getElementById('user-list-container');

    const resetListContainer = () => {
      while (userListContainer.firstChild) {
        userListContainer.removeChild(userListContainer.lastChild);
      }
    };
    const createRow = (user) => {
      const tr = document.createElement('tr');
      const td = document.createElement('td');

      const name = td.cloneNode();
      const id = td.cloneNode();
      const email = td.cloneNode();

      name.textContent = user.name;
      id.textContent = user.id;
      email.textContent = user.email;

      tr.append(id, name, email);
      return tr;
    };
    const createRowNode = () => {
      if (!userList[0]) {
        return [
          createRow({ name: 'no data', id: 'no data', email: 'no data' }),
        ];
      }
      return userList.map((user) => createRow(user));
    };

    resetListContainer();

    userListContainer.append(...createRowNode());
  };

  const init = () => {
    const searchBox = document.getElementById('list-search');
    searchBox.addEventListener('input', fetchUsers);
  };
  return { init };
})();

UserSearch.init();
