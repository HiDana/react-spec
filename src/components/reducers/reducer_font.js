export default function(state = null, action) {
  switch(action.type) {
  case 'FONT_SET':
    return action.fontSet;
    default:
  }

  return state;
}
