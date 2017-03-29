export function colorSet(newColor){
  return {
    type: 'COLOR_SET',
    colorSet: newColor
  };
}
export function fontSet(newFont){
  return {
    type: 'FONT_SET',
    fontSet: newFont
  };
}
