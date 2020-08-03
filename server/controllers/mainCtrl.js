const data = require('../../data/data.json')
let nextUserID = data.users.length + 1
let nextEventID = data.events.length + 1

/* user data:
        "id": 1,
        "first_name": "Stanly",
        "last_name": "Woodland",
        "email": "swoodland0@vistaprint.com",
        "gender": "Male",
        "paid": true
*/

const baseCtrl = {
    get: (req, res) => {
        return res.status(200).send(data)
    },
}
const userCtrl = {
    get: (req, res) => {
        return res.status(200).send(data.users)
    },
    post: (req, res) => {
        const newUser = {
            "id": nextUserID,
            ...req.body.newUser
        }
        nextUserID++
        console.log(newUser)
        data.users.push(newUser)
        return res.status(200).send(data.users)
    },
    put: (req, res) => {
        const {id} = req.params
        const {newUser} = req.body
        const index = data.users.findIndex( (u) => u.id === +id)
        data.users[index] = {
            ...data.users[index],
            ...newUser,
        }
        return res.status(200).send(data.users)
    },
    delete: (req, res) => {
        const {id} = req.params
        const index = data.users.findIndex( u => u.id === +id)
        if (index === -1) { res.status(404).send("No such user") }
        else { data.users.splice(index, 1) 
            return res.status(200).send(data.users)
        }
    },
}

const eventsCtrl = {
    get: (req, res) => {
        return res.status(200).send(data.events)
    },
    post: (req, res) => {
        const newEvent = {id: nextEventID, ...req.body.newEvent}

        nextEventID++
        console.log(newEvent)
        data.events.unshift(newEvent)
        return res.status(200).send(data.events)
    },
    put: (req, res) => {
        console.log(req.body)
        const {id} = req.params
        const {updatedEventObj} = req.body
        const index = data.users.findIndex( (e) => e.id === +id)
        if (index === -1) { res.status(404).send("No such event") }
        data.events[index] = {
            ...data.events[index],
            ...updatedEventObj,
        }

        return res.status(200).send(data.events)
    },
    delete: (req, res) => {
        const {id} = req.params
        const index = data.events.findIndex( e => e.id === +id)
        if (index === -1) { res.status(404).send("No such event") }
        else { data.events.splice(index, 1) 
            return res.status(200).send(data.events)
        }
    },
}



module.exports = {
    base: baseCtrl,
    users: userCtrl,
    events: eventsCtrl,
}
