// #!/usr/bin/env node

'use strict';

const { indexOf } = require("lodash");

/**
 * 4: Contact List // Contacts
 *
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast)
 *     that returns a contact object.
 *
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *
 *  b. Create a factory Function called makeContactList that returns an Object
 *     that manages contacts. The contact-list object should have the following methods:
 *
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and
 *         returns the contact object if found in the contacts-list, or,
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should
 *         return a String formated with all the full-names of the separated
 *         with a line-break, like so:
 *
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

function makeContact(id, nameFirst, nameLast) {
  let contact = {};
  contact.id = id;
  contact.nameFirst = nameFirst;
  contact.nameLast = nameLast;
  return contact;
}

function makeContactList() {
  /*
   * You need something here to hold contacts. See length api for a hint:
   */
  var contacts = [];

  return {
    // we implemented the length api for you //
length: function() {
  return contacts.length;
},
addContact: function(contact) {
return contacts.push(contact);
},
findContact: function(fullName) {
  let splitName = fullName.split(' ')
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].nameFirst === splitName[0] && contacts[i].nameLast === splitName[1]){
      return contacts[i];
    }
  }
  },
  removeContact: function(contact) {
    for(let i = 0; i < contacts.length; i++){
  if (contact === contacts[i]) {
    contacts.splice(contacts[i], 1)
  }
    }
  },
  printAllContactNames: function(){
    let fullNames = []
    for (let i = 0; i < contacts.length; i++) {
      fullNames.push(`${contacts[i].nameFirst} ${contacts[i].nameLast}`)
    }
    let joinFullNames = fullNames.join('\n')
    return joinFullNames
  }
}
}
// YOUR CODE GOES ABOVE HERE //

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.makeContact = makeContact;
  module.exports.makeContactList = makeContactList;
}
