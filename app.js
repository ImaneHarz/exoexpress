/* Créer une programme app.js qui utilise express.
Cette application devra tourner sur votre ip locale et le port 7777. 
Avec votre navigateur en se connectant sur en http à votre ip locale sur le port 7777 on
devra récupérer le message 'Exercices express partie 2' Pour cela il faudra créer une route qui manage le path / */



const app = express()

const PORT = 7777

app.get('/exercices', (req, res) => {
  res.send('Exercices express partie 2')
})
