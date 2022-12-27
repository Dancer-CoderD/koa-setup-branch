export function createConfig(answer) {
  const haveMiddleWare = (name) => {
    return answer.middleware.indexOf(name) !== -1;
  };

  const inputConfig = {
    packageName: answer.packageName,
    port: answer.port,
    middleware: {
      static: haveMiddleWare("koaStatic"),
      router: haveMiddleWare("koaRouter"),
    },
  };

  return inputConfig;
}
