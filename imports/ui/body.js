import { Template } from 'meteor/templating';

import { Bookmarks } from '../api/bookmarks.js';

import './body.html';

Template.body.helpers({
  bookmarks() {
    return Bookmarks.find({});
  },
});

Template.body.events({
  'submit .new-bookmark'(event) {
    event.preventDefault();

    const target = event.target;
    const name = target.bmname.value;
    const url = target.bmurl.value;

    Bookmarks.insert({
      name, url
    });
    // clear form
    target.bmname.value = '';
    target.bmurl.value = '';
  }
})
