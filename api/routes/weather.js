const express = require('express');
const router = express.Router();
const dotenv = require('dotenv').config();

const Weather = require('../models/weatherModel');

router.route('/city').post(async (req, res) => {
    const city = req.body.city;
    let weatherUpdate = {};

    let details = await (await fetch(`${process.env.WEATHER_API}&q=${city}&aqi=no`)).json();
    Weather.findOne({ city }, async function (err, cityExists) {
        if (!cityExists) {
            Weather.create({ city, details })
                .then(() => res.json(details))
                .catch((err) => res.json(`Error code: ${err}`));
        };
        if (cityExists) {
            Weather.updateOne({ city }, { details }, function (err, cityUpdated) {
                if (err) {
                    res.json(err);
                } else {
                    res.json(details);
                    // weatherUpdate = 'abc';
                    // console.log(weatherUpdate);
                    // console.log(details);
                }
            })
        }
    });

    // router.route('/city').post(async (req, res) => {
    //     const cities = req.body.cities; //array from FE
    //     let weatherUpdate = {};

    //     let a = await Promise.all(cities.map(async (city) => {
    //         let details = await( await fetch(`${process.env.WEATHER_API}&q=${city}&aqi=no`)).json();
    //         Weather.findOne({ city }, async function (err, cityExists) {
    //             if (!cityExists) {
    //                 Weather.create({ city, details })
    //                     .then(() => weatherUpdate[city] = details )
    //                     .catch((err) => res.json(`Error code: ${err}`));
    //             };
    //             if (cityExists) {
    //                 Weather.updateOne({ city }, { details }, function (err, cityUpdated) {
    //                     if (err) {
    //                         res.json(err);
    //                     } else {
    //                         weatherUpdate[city] = details;
    //                         // weatherUpdate = 'abc';
    //                         // console.log(weatherUpdate);
    //                         // console.log(details);
    //                     }
    //                 })
    //             }
    //         });
    //     })).then(() => {
    //         res.send(weatherUpdate);
    //         console.log(weatherUpdate)
    //     }
    //     );
    // await Weather.create({ city, details })
    //     .then(() => res.status(200).json("City added!"))
    //     .catch((err) => res.json(`Error code: ${err}`));
})

module.exports = router;