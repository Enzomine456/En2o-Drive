module.exports = function(file, api, options) {
  const j = api.jscodeshift;
  const root = j(file.source);

  // Find all JSX attributes named 'data-baseweb' and rename them to 'data-en2o-drive'
  root
    .find(j.JSXAttribute, {
      name: {
        name: "data-en2o-drive",
      },
    })
    .forEach(path => {
      path.node.name.name = 'data-en2o-drive';
    });

  // Find all string literals containing 'baseweb' and replace it with 'en2o-drive'
  root.find(j.Literal).forEach(path => {
    if (typeof path.value.value === 'string') {
      path.value.value = path.value.value.replace(/baseweb/g, 'en2o-drive');
    }
  });

  return root.toSource(options.printOptions);
}; 