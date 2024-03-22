const makeHeader = (
  type,
  length
) /*type, length를 받아서 String으로 만듦*/ => `HTTP/1.1 200 Ok
  Content-Type: ${type} 
  Content-Length: ${length}`;

const makeResponse = (type, body /* text/html / html */) => {
  body = Buffer.from(body);
  return `${makeHeader(type, body.length)}

${body.toString()}`;
};

const redirect = () => {
  return `HTTP/1.1 301 Moved Permently
Content-Type: text/html 
Content-Length: 0
Connection: Close
Location: /

`;
};

module.exports = { makeResponse, redirect };
