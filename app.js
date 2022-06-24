const express = require('express');
const routes = require("./routes/routes");
const bodyParser = require("body-parser");

const app = express();

routes(app);

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})

app.listen(3006, () => {
  console.log("Servidor rodando na porta 3006");
});
