'use strict';

import './styles/index.css';
import { API_URL } from './constants.js';

const UserSearch = (function () {
  let userList = null;
  const SEARCH_TIMEOUT_AMOUNT = 600;

  const fetchUsers = async (searchStr) => {
    userList = null;
    try {
      // TODO: start loading icon
      // should paginate for better performance
      const response = await fetch(`${API_URL}/users?name_like=${searchStr}`);
      if (!response.ok) {
        throw new Error(`An error occured (${response.status})`);
      }
      const responseJSON = await response.json();
      userList = responseJSON;
      updateUI();
    } catch (err) {
      // TODO: show user error message

      console.error(err);
    } finally {
      // TODO: stop loading icon
    }
  };
  const debounce = (callback, delay = 500) => {
    let timer = null;

    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  };
  const validateInput = (input) => {
    // alphabetic characters, whitespace and empty string
    const regex = /^[a-zA-Z\s]*$/;
    return regex.test(input);
  };
  const updateUI = () => {
    const tableBody = document.getElementById('content_table-body');

    const resetListContainer = () => {
      while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.lastChild);
      }
    };
    const createRowNode = (user) => {
      const tr = document.createElement('tr');
      const td = document.createElement('td');

      const name = td.cloneNode();
      const id = td.cloneNode();
      const email = td.cloneNode();

      id.classList.add('text-neutral-500');
      email.classList.add('text-neutral-500');

      name.textContent = user.name;
      id.textContent = user.id;
      email.textContent = user.email;

      tr.append(id, name, email);
      return tr;
    };
    resetListContainer();
    const rowNodes = userList.map((user) => createRowNode(user));
    tableBody.append(...rowNodes);
  };
  const init = () => {
    // display all items
    fetchUsers('');

    // enable item search
    const searchBox = document.getElementById('list-search');
    searchBox.value = '';
    const onInput = debounce(fetchUsers, SEARCH_TIMEOUT_AMOUNT);
    searchBox.addEventListener('input', (e) => {
      const input = e.target.value;
      if (validateInput(input)) {
        onInput(input);
      } else {
        // TODO: show user error message
        console.error(
          'Only alphabetic characters, whitespaces and empty strings are allowed in the input field',
        );
      }
    });
  };
  return { init };
})();

UserSearch.init();
