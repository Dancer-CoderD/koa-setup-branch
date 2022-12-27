export default () => {
  return {
    type: "checkbox",
    name: "middleware",
    message: "set package middleware:",
    choices: [{ name: "koaStatic" }, { name: "koaRouter" }],
  };
};
