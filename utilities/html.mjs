const html = (strings, ...values) => {
  const processedValues = values.map(value =>
    Array.isArray(value) ? value.join('') : value
  );

  return strings.reduce(
    (prev, curr, i) => `${prev}${curr}${processedValues[i] || ''}`,
    ''
  );
};

export default html;
