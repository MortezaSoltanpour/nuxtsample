export default defineEventHandler((event) => {
  console.log("************ MIDDLE WARE ************************");
  console.log("new request : " + event.node.req);
  console.log("new request : " + event.node.res);
  console.log("new request : " + event.node.req.url);
  console.log("************ MIDDLE WARE ************************");

  event.context.auth = { user: 1234 };
});
