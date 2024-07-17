export default defineEventHandler((event) => {
  console.log(event);

  return {
    data: "Morteza soltanpour from route",
  };
});
