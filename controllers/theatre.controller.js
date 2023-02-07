const Theatre = require('../models/theatre.model')

exports.createTheatre =async(req,res)=>{
    const theatreObject = {
        name:req.body.name,
        city:req.body.city,
        description:req.body.description,
        pinCode:req.body.pinCode
    }
    const theatre = await Theatre.create(req.body);
    res.status(201).send(theatre);
}

exports.getAllTheatre =async(req,res)=>{
    const queryObj = {};
    if (req.query.pinCode != undefined){
        queryObj.pinCode=req.query.pinCode;
    }
    if (req.query.name != undefined){
        queryObj.name=req.query.name;
    }
    if (req.query.description != undefined){
        queryObj.description=req.query.description;
    }
    if (req.query.city != undefined){
        queryObj.city=req.query.city;
    }
    
    
    const theaters =  await Theatre.find(queryObj);
    res.status(201).send(theaters);
}

exports.getTheatre =async(req,res)=>{
    const id = req.params.id;

    const theatre = await Theatre.findOne({
        _id:id
    })
    res.status(200).send(theatre)
}

exports.deleteTheatre =async(req,res)=>{

await Theatre.deleteOne({
        _id : req.params.id
    });
    res.status(200).send({message:`Successfully deleted  theatre with id: ${req.params.id}`});
}

exports.updateTheatre = async(req, res)=>{
    const id = req.params.id;

    const saveTheater = await Theatre.findOne({_id:req.params.id});
    if(!saveTheater){
        return res.status(400).send({message:"Theater does't exists"})
    }
    saveTheater.name = req.body.name ? req.body.name : saveTheater.name;
    saveTheater.description = req.body.description ? req.body.description : saveTheater.description;
    saveTheater.city = req.body.city ? req.body.city : saveTheater.city;
    saveTheater.pinCode = req.body.pinCode ? req.body.pinCode : saveTheater.pinCode;

    const updateTheatre = await saveTheater.save();
    res.status(200).send(updateTheatre);
}

exports.AddMoviesToTheater = async (req, res) =>{
    const theaterId = req.params.theaterId;
    const movieId = req.params.movieId

    const saveTheater = await Theatre.findOne({_id:theaterId})

    if (!saveTheater){
        return res.status(400).send({message:"Theater doesn't exists"})
    }

    const movieIds =  req.body.movies;

    movieIds.forEach(movieId => {
        saveTheater.movies.push(movieId)
        
    });
    const updateTheatre = await saveTheater.save();

    return res.status(200).send(updateTheatre);
}