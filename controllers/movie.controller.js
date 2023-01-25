
const Movie = require('../models/movie.model');

exports.createMovie =async(req,res)=>{
    const movie = await Movie.create(req.body);
    res.status(201).send(movie);

}
exports.getAllMovie =async(req,res)=>{
    const query = {}

    if (req.query.name != undefined){
        query.name = req.query.name
    }

    const movies = await Movie.find(query)
    res.status(200).send(movies);
}
exports.getMovie = async (req,res)=>{
    const movie =  await Movie.findOne({
        _id:req.params.id
    });
    res.status(200).send(movie)
}