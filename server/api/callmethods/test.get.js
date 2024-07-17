export default defineEventHandler((event) => {
  console.log(event);
  console.log(event.context);
  console.log(event.context.auth);
  console.log("Test routes, GET data");
  return {
    data: "Test routes, GET data",
  };
});
