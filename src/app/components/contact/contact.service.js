function ContactService (AuthService, $firebaseRef, $firebaseArray, $firebaseObject) {
  var ref = $firebaseRef.contacts;
  var uid = AuthService.getUser().uid;
  return {
    createNewContact: createNewContact,
    getContactById: getContactById,
    updateContact: updateContact,
    deleteContact: deleteContact
  };

  function createNewContact (contact) {
    return $firebaseArray(ref.child(uid))
      .$add(contact);
  }

  function getContactById (id) {
    return $firebaseObject(ref.child(uid).child(id));
  }

  function updateContact (contact) {
    return contact.$save();
  }

  function deleteContact (contact) {
    return contact.$remove();
  }
}

angular
  .module('components.contact')
  .factory('ContactService', ContactService);