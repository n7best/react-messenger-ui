/**
 * Parse the input component by calling the render() method (passed to docx generator instance)
 * @param {Object} input Input component
 */
const parse = (input) => {
  function parseComponent(inputComponent) {
    console.log('parsing', inputComponent);
    return inputComponent.render();;
  }

  function toBuffer() {
    return parseComponent(input);
  }

  return {
    toBuffer
  };
};

export default parse;
