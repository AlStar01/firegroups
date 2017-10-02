import firebase from '../firebase';

export function createGroup(group, user) {
  const { groupName, groupDescription, groupType } = group;
  const { uid } = user;

  const ref = firebase.database().ref('group-metadata/');
  const newGroupRef = ref.push({});

  let newGroup = {
    id: newGroupRef.key,
    name: groupName,
    description: groupDescription,
    type: groupType,
    createdByUserId: uid,
    createdAt: firebase.database.ServerValue.TIMESTAMP
  };

  if(groupType === 'private') {
    newGroup.authorizedUsers = {};
    newGroup.authorizedUsers[uid] = true;
  }

  return newGroupRef.set(newGroup);
}
