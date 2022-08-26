// imports
import express, { response } from 'express';

// constants
const PORT = process.env.PORT || 3333;

// app
const app = express();
app.get('/', (request, response) => {
  response.json({ message: 'Seems that everything went fine :)' });
});
// app.get('/test', (request, response) => {
//   response.json({ message: 'Testing new route :)' });
// });

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});