export default defineEventHandler(async (event) => {
  console.log(event);

  const body = await readBody(event);
  console.log(body);

  const query = getQuery(event);
  console.log(query);
  return {
    data: body,
  };
});
