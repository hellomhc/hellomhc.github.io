import type {NextPage} from 'next';
import {join} from 'path';
import os from 'os';
import http from 'http';
import fs from 'fs';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;

const Home: NextPage = () => {
  const pagesDirectory = join(process.cwd(), 'pages');
  console.log('Join...', {join});
  console.log({pagesDirectory});
  console.log('fs:', fs);
  console.log('global:', global);
  console.log(os.arch());
  console.log(process);
  console.log(os.arch());
  console.log(os.platform());
  console.log(os.hostname());
  console.log(os.type());
  console.log(os.cpus());

  fs.readdir(pagesDirectory, function (err, files) {
    //handling error
    if (err) {
      return console.log('Unable to scan directory: ' + err);
    }
    //listing all files using forEach
    files.forEach(function (file) {
      // Do whatever you want to do with the file
      console.log(file);
    });
  });
  const requestListener = function () {
    console.log('Server is listening...');
  };
  const server = http.createServer(requestListener);

  server.listen(4321);
  return <Container></Container>;
};

export default Home;
