import _groups from './groups';

export const api = {
  getGroups() {
    return new Promise(resolve => {
      setTimeout(() => resolve(_groups), 1000);
    });
  }
};
