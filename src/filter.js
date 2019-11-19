import _ from 'lodash';

export function filter(array, filterFn = _.filter) {
  // don't mind this code, the importand part is the usage of lodash in default params
  return filterFn(array, (el) => el === 1);
}
