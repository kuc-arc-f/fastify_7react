import fastify from 'fastify';
import path from 'node:path';
import { fileURLToPath } from 'url';
import fastifyStatic from '@fastify/static';
import { renderToString } from 'react-dom/server';
// router
import routerTest from './routes/test';
// pages-SSR
import Top from './pages/App';
import About from './pages/about';
import Contact from './pages/contact';
import Test from './pages/Test';
//
const __filename = fileURLToPath(import.meta.url);
let __dirname = path.dirname(__filename);
//
const app = async () => {
console.log("env=", process.env.NODE_ENV);
  if(process.env.NODE_ENV === 'develop'){
    __dirname = __dirname.replace("/src", '');
  }else{
    __dirname = __dirname.replace("/dist", '');
  }
//console.log("__dirname=", __dirname);
  const app = fastify();
  app.register(fastifyStatic, {
    root: path.join(__dirname, 'public/static/'),
    prefix: '/public/static/',
  });
  /*
  API 
  */
  app.get('/api/test1', async (req, reply) => {
    const ret = await routerTest.test1(req, reply);
    reply.send(ret)
  });
  app.post('/api/send_post', async (req, reply) => {
    const ret = await routerTest.sendPost(req, reply);
    reply.send(ret)
  });
  //MPA
  //
  app.get('/test', (req, reply) => {
    reply.type('text/html');
    reply.send(renderToString(Test()));
  });
  app.get('/about', (req, reply) => {
    reply.type('text/html');
    reply.send(renderToString(About()));
  });
  app.get('/contact', (req, reply) => {
    reply.type('text/html');
    reply.send(renderToString(Contact()));
  });

  //
  app.get('/*', (req, reply) => {
    reply.type('text/html');
    reply.send(renderToString(Top()));
//    reply.send("{ret: OK}");
  });
  //
  if (import.meta.env.PROD)
    app.listen(3000);

  return app;
};

export const viteNodeApp = app();