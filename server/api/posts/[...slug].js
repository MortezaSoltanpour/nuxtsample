export default defineEventHandler((event) => {
  console.log(event);
  console.log(event.context.params);
  var slugItem = event.context.params.slug.split("/");

  return {
    data: slugItem,
  };
});
