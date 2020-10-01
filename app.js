/* 1. Créer une programme app.js qui utilise express.
Cette application devra tourner sur votre ip locale et le port 7777. 
Avec votre navigateur en se connectant sur en http à votre ip locale sur le port 7777 on
devra récupérer le message 'Exercices express partie 2' Pour cela il faudra créer une route qui manage le path /

2. Ajouter une route /get_current_time qui retournera à l'utilisateur la date du serveur sur lequel s'exécute app.js 

3. Ajouter une route /how_pass_data qui retourne à l'utilisateur un message qui lui
explique comment on passe des données d'un handler/middleware à un autre sur express*/



const app = express()
let date = Date.now()

const PORT = 7777

app.get('/exercices', (req, res) => {
  res.send('Exercices express partie 2')
})

app.get('/get_current_time', (req, res) => {
   res.send('{Date.now()}')
})
  
app.get('/how_pass_data', (req, res, next) => {
 
  
// Pas réussi à aller plus loin :/
  
