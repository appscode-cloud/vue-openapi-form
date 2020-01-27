const getTitleFromProp = function(prop) {
  prop = prop.charAt(0).toUpperCase() + prop.slice(1);
  return prop.replace(/([a-z0-9])([A-Z])/g, "$1 $2");
};

const recurse = function(schema, title) {
  let newSchema = Object.assign({}, { title }, { ...schema });
  if (schema.type === "object") {
    let newProperties = {};

    // extend schema of old properties
    try {
      if (schema.properties) {
        Object.keys(schema.properties).forEach(prop => {
          const title = getTitleFromProp(prop);
          newProperties = Object.assign(
            {},
            { ...newProperties },
            { [`${prop}`]: { ...recurse(schema.properties[prop], title) } }
          );
        });

        // assign new properties to newSchema
        newSchema = Object.assign(
          {},
          { ...newSchema },
          { properties: { ...newProperties } }
        );
      }
      // for additional properties
      else if (schema.additionalProperties) {
        newSchema = Object.assign(
          {},
          { ...newSchema },
          { type: "key-value-pairs" }
        );

        // console.log({ newSchema });

        newSchema.additionalProperties = Object.assign(
          {},
          { ...schema.additionalProperties },
          {
            title: "Value",
            ui: {
              tag: "input",
              type: "text"
            }
          }
        );
      }
    } catch (e) {
      // console.log(schema);
      // console.log(e);
    }
  } else if (schema.type === "array") {
    let newItems = {};

    // extend old items
    const title = "";
    newItems = Object.assign(
      {},
      { ...newItems },
      { ...recurse(schema.items, title) }
    );

    // assign new items to newSchema
    newSchema = Object.assign({}, { ...newSchema }, { items: { ...newItems } });
  } else {
    let type = "";
    if (schema.type === "number") type = "number";
    else if (schema.type === "boolean") type = "checkbox";
    else type = "text";

    newSchema = Object.assign(
      {},
      { ...newSchema },
      {
        ui: {
          tag: "input",
          type
        }
      }
    );

    // if (schema.type === "boolean") // console.log(newSchema);
  }

  return newSchema;
};

export default function(schema, title) {
  return recurse(schema, title);
}
