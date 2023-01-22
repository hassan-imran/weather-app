const express = require('express')
const router = express.Router()

const bcrypt = require('bcrypt');
const saltRounds = 10;

const User = require('../models/userModel');

router.route('/signup').post(async (req, res) => {
    const userName = req.body.userName;
    let pass = req.body.pass;

    bcrypt.hash(pass, saltRounds, async function (err, hash) {

        pass = hash;

        await User.create({ userName, pass })
            .then(() => res.status(200).json("User added!"))
            .catch((err) => res.json(`Error code: ${err}`));
    });

});

router.route('/signin').post(async (req, res) => {
    const userName = req.body.userName;
    const pass = req.body.pass;

    User.findOne({ userName }, function (err, user) {
        if (!user) {
            res.send("User not found!");
        } else if (user) {
            bcrypt.compare(pass, user.pass, function(err, result) {
                if (result == true) {
                    res.send("Logged in successfully!");
                }
                else {
                    res.status(403).send("Password incorrect!");
                }
            });
        }
    });

})

// router.route('/').get(getActivities).post(setActivity)
// router.route('/:id').delete(deleteActivity).put(updateActivity)

module.exports = router;