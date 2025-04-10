import * as React from 'react';

export default function Page() { 
  return (
  <html>
    <head>
      <title>page2</title>
      <link href="/public/static/main.css" rel="stylesheet" />
    </head>
    <body>
      <div id="app"></div>
      <script type="module" src="/public/static/page2.js"></script>
    </body>
  </html>
  );
}
