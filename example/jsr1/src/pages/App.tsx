import * as React from 'react';

//console.log("env=", process.env.NODE_ENV)
//
export default function Page() { 
  return (
  <html>
    <head>
      <title>home</title>
      <link href="/public/static/main.css" rel="stylesheet" />
    </head>
    <body>
      <div id="root"></div>
      <script type="module" src="/public/static/home.js"></script>
    </body>
  </html>
  );
}
