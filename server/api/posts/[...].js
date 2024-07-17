export default defineEventHandler((event) => {
  console.log(event);
  console.log(event.context.params);
  return {
    data: `this is post for ${event.context.params._}`,
  };
});
