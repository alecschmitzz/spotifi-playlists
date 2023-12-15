import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import os from 'os';
import {
  postPlaylist,
  getPlaylist,
  getPlaylists,
  patchPlaylist,
  deletePlaylist,
  postSongToPlaylist,
  notFound,
} from './controllers'; // Adjust the import paths according to your project structure
import makeCallback from './express-callback';


dotenv.config();

const apiRoot = process.env.API_ROOT;
const app = express();
app.use(cors({
  origin: `${process.env.FRONT_END_URL}`,
  credentials: true
}));
app.use(bodyParser.json());
// TODO: figure out DNT compliance.
app.use((_, res, next) => {
  res.set({ Tk: '!' });
  next();
});
app.post(`${apiRoot}/playlists`, makeCallback(postPlaylist));
app.delete(`${apiRoot}/playlists/:id`, makeCallback(deletePlaylist));
app.delete(`${apiRoot}/playlists`, makeCallback(deletePlaylist));
app.patch(`${apiRoot}/playlists/:id`, makeCallback(patchPlaylist));
app.patch(`${apiRoot}/playlists`, makeCallback(patchPlaylist));
app.get(`${apiRoot}/playlists`, makeCallback(getPlaylists));
app.get(`${apiRoot}/playlists/:id`, makeCallback(getPlaylist));
app.post(`${apiRoot}/playlists/:playlistId/addsong/:songId`, makeCallback(postSongToPlaylist));
app.get(`${apiRoot}`, (req, res) => {
  res.json({ message: "Ok it works...", hostname: os.hostname(), version: "0.0.1-beta2" })
})
app.use(makeCallback(notFound));

// listen for requests
app.listen(`${process.env.PORT}`, () => {
  console.log(`============ ${process.env.STATUS} ============`);
  console.log(`Server is listening on port ${process.env.PORT}${apiRoot}`);
  console.log(`Visit: ${process.env.BASE_URL}${apiRoot}`);
});

export default app;
