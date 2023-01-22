const Weather = require('../models/weatherModel');




// const setActivity = asyncHandler(async (req, res) => {
//     const { name, desc, activityType, duration, date } = req.body
//     if (!name || !desc || !activityType || !duration || !date) {
//         res.status(400)
//         throw new Error('Please add All Fields')
//     }

//     const activity = await Activity.create({
//         name,
//         desc,
//         activityType,
//         duration,
//         date
//     })
//     if (activity) {
//         res.status(201).json({
//             _id: activity.id,
//             name: activity.name,
//             desc: activity.desc,
//             activityType: activity.activityType,
//             duration: activity.duration,
//             date: activity.date
//         })
//     } else {
//         res.status(400)
//         throw new Error('Invalid user data')
//     }

//     res.status(200).json(activity)
// })
// const updateActivity = asyncHandler(async (req, res) => {
//     const activity = await Activity.findById(req.params.id)
//     if (!activity) {
//         req.status(400)
//         throw new Error('Activity Not Found')
//     }
//     const updatedActivity = await Activity.findByIdAndUpdate(req.params.id, req.body, {
//         new: true,
//     })
//     res.status(200).json(updatedActivity)
// })
// const deleteActivity = asyncHandler(async (req, res) => {
//     const activity = await Activity.findById(req.params.id)

//     if (!activity) {
//         res.status(400)
//         throw new Error('activity not found')
//     }

//     await activity.remove()

//     res.status(200).json({ id: req.params.id })
// })




module.exports = {
    
}