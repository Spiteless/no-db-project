// const data = require('../../data/data.users.json')
// const e = require('express')
// let nextID = data.users.length + 1

// /* user data:
//         "id": 1,
//         "first_name": "Stanly",
//         "last_name": "Woodland",
//         "email": "swoodland0@vistaprint.com",
//         "gender": "Male",
//         "paid": true
// */

// module.exports = {
//     get: (req, res) => {
//         return res.status(200).send(data.users)
//     },
//     post: (req, res) => {
//         const newUser = {
//             "id": nextID,
//             ...req.body.newUser
//         }
//         nextID++
//         console.log(newUser)
//         data.users.push(newUser)
//         return res.status(200).send(data.users)
//     },
//     put: (req, res) => {
//         const {id} = req.params
//         const {newUser} = req.body
//         const index = data.users.findIndex( (u) => u.id === +id)
//         data.users[index] = {
//             ...data.users[index],
//             ...newUser,
//         }
//         return res.status(200).send(data.users)
//     },
//     delete: (req, res) => {
//         const {id} = req.params
//         const index = data.users.findIndex( u => u.id === +id)
//         if (index === -1) { res.status(404).send("No such user") }
//         else { data.users.splice(index, 1) 
//             return res.status(200).send(data.users)
//         }
//     },
// }