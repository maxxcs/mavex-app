export function getPropByPath(parent, path) {
  if (!path) return parent;

  let props = path.split('.');
  let iLen = props.length - 1;
  let name = props[iLen];
  let i;

  for (i = 0; i < iLen; i++) {
    let prop = props[i];
    let candidate = parent[prop];

    if (candidate !== undefined) {
      parent = candidate;
    } else {
      break;
    }
  }
  const value = parent[props[i]];
  return { parent, name, value };
}

export function setPropByPath(object, path, value) {
  const fields = path.split('.');
  const last = fields.pop();
  let current = object;

  fields.forEach(field => {
    if (typeof current[field] !== 'object')
      current[field] = {};
    current = current[field];
  });

  current[last] = value;

  return object;
}

const files = {
  name: 'project',
  toggled: true,
  children: [
    {
      name: 'src',
      id: '56d4a6d5as4d56as4a65d4a',
      children: [
        { name: 'index.js', id: "56d4a6d5as4dcv76b65vc8" },
        { name: 'app.js', id: "56d4a6d5as4dcv76b65vc8" }
      ]
    },
    {
      name: 'public',
      id: "56d4a6d5as4dcv76b65vc8",
      children: [
        {
          name: 'static',
          id: "56d4a6d5as4dcv76b65vc8",
          children: [
            { name: 'index.html', id: "56d4a6d5as4dcv76b65vc8" },
            { name: 'main.css', id: "56d4a6d5as4dcv76b65vc8" }
          ]
        }
      ]
    }
  ]
};