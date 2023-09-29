const titleCase = require('./title-case');

test('Converting string to title case', () => {
  expect(titleCase('hello world')).toBe('Hello World');
  expect(titleCase('javascript programming')).toBe('Javascript Programming');
  expect(titleCase('openai chatbot')).toBe('Openai Chatbot');
  expect(titleCase('sHoRt AnD sToUt')).toBe('Short And Stout');
  expect(titleCase('HERE IS MY HANDLE HERE IS MY SPOUT')).toBe(
    'Here Is My Handle Here Is My Spout'
  );
});
