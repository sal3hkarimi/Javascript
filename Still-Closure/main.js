function closure() {
  let value = 0;

  return function () {
    value++;
    const message = `value in closure is ${value}`;

    const msgLogger = () => console.log(message);
    const valueLogger = () => console.log(value);

    return [msgLogger, valueLogger];
  };
}

const counter = closure();

const [msg, val] = counter();
counter();
counter();
counter();

msg(); // value in closure is 1
val(); // 4

// ----------------------------------------
let buttonProps = (borderRadius) => {
  const createVariantButtonProps = (variant, color) => {
    const newProps = {
      borderRadius,
      variant,
      color,
    };
    return newProps;
  };
  return createVariantButtonProps;
};

let primaryButton = buttonProps("1rem");
const primaryButtonProps = primaryButton("primary", "red"); /* result:
{ 
  borderRadius: "1rem", 
  variant: "primary", 
  color: "red" 
}
*/

// ----------------------------------------

const fetchUtility = (baseURL, headers) => {
  const createFetchInstance = (route, requestMethod, data) => {
    const tempReq = new Request(`${baseURL}${route}`, {
      method: requestMethod,
      headers,
      data: data || null,
    });
    return [fetch, tempReq];
  };

  return createFetchInstance;
};

const fetchInstance = fetchUtility("https://jsonplaceholder.typicode.com");
const [getFunc, getReq] = fetchInstance("/todos/1", "GET");

getFunc(getReq)
  .then((resp) => resp.json())
  .then((data) => data); /* result:
  { 
    userId: 1,
    id: 1, 
    title: 'delectus aut autem', 
    completed: false 
  }
  */
