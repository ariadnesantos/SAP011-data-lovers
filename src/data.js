export const dataBB = {
  function (characters, value, key) {
    const order = characters.filter(function (character) {
      const filtered = character[key].includes(value);

      return filtered;
    });
  }
}
export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};
