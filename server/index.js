const express = require('express')

const app = express()
const port = 3333

const ctrl = require('./controllers/mainCtrl')

app.use(express.json())

const api = { users:'/api/users/',
              events:'/api/users/' }

//users endpoints
app.get(api.users, ctrl.users.get)
app.post(api.users, ctrl.users.post)
app.put(api.users + ":id", ctrl.users.put)
app.delete(api.users + ":id", ctrl.users.delete)

//events endpoints
app.get(api.events, ctrl.events.get)
app.post(api.events, ctrl.events.post)
app.put(api.events + ":id", ctrl.events.put)
app.delete(api.events + ":id", ctrl.events.delete)

app.listen(port, () => console.log(`Server running on ${port}`))
