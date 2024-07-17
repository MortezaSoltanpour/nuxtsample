export default defineEventHandler((event) => {
  console.log(event);

  return {
    data: "Test routes, GET data",
  };
});
