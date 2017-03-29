export default function(state = null, action) {
  switch(action.type) {
  case 'COLOR_SET':
    return action.colorSet;
    default:
  }

  return state;
}
