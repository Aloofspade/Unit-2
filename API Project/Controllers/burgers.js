const Burger = require('../models/Burgers')

const {StatusCode} = ('http-status-codes')

const getAllBurgers = async (req, res) => {
    const jobs = await Job.find({createdBy: req.user.userID}).sort("created at")
    res.status(StatusCode.OK).json({jobs, length: jobs.length})
}

const getBurger = async (req, res) => {
    const {userID} = req.user.userID
    const {id: burgerID} = req.params

    const burger = await burger.findOne({createdBy: userID, _id: burgerID})
    if(!burger){
        throw new NotFoundError(`not burger wiht id  ${burgerID}`)
    }

    res.status(StatusCode.OK).json({ burger })
};

const createBurger = async (req, res) => {
    req.body.createBy = req.user.userID;
    const burger = await Burger.create(req.body);
    

    res.status(StatusCode.CREATED).json(burger);
}

const updateBurger = async (req, res) => {
    // const {company, position} = req.body;
    // const {userID} = req.user

    // const {id, BurgerID} = req.params;

    const {
        body: {company, position},
        user: {userID},
        params: {id, burgerID}
    } = req


    if (!company || !position) {
        throw new BadRequestError("Please provide company and position")

    }

    const burger = await Burger.findByIdAndUpdate(
        
        {_id: burgerID, createBy: userID},
        req.body,
        {new: true, runValidators: true}
        
        );


        if(!burger){
        throw new BadRequestError(`no burger with id ${burgerID}`)
        }

        res.status(StatusCode.OK).json({burger})
}

const deleteBurger = async (req, res) => {
   const {
       params: {id: burgerID},
       use: {userID}
   } = req

   const burger = await Burger.findByIdAndRemove({_id: burgerID, createBy: userID});

   res.status(StatusCode.OK).json({burger})

   if(!burger){
       throw new BadRequestError(`no burger with id ${burgerID} found`)
   }
}

module.exports = {getAllBurgers,getBurger, createBurger, updateBurger, deleteBurger};