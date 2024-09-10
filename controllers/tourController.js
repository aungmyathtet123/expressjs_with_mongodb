const { fail, match } = require("assert");
const fs = require("fs");
const Tour=require('./../models/tourModel');
const APIFeatures=require('./../utils/apiFeatures');
const catchAsync =require('./../utils/catchAsync');
// const AppError = require("../utils/appError");
const factory=require('./handlerFactory');
// const tours = JSON.parse(
//     fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
//   );
// exports.checkId=(req,res,next,val)=>{
    // if (req.params.id * 1 > tours.length) {
    //     return res.status(404).json({
    //       status: "fail",
    //       message: "Invalid ID",
    //     });
    // }
    // next();
// }
// exports.checkBody=(req,res,next)=>{
//   if(!req.body.name || !req.body.price){
//     return res.status(400).json({
//       status:'fail',
//       message:'Missing name or price'
//     })
//   }
//   next(); 
// }
//middleware
exports.aliasTopTours=(req,res,next)=>{
req.query.limit='5';
req.query.sort='-ratingsAverage,price';
req.query.fields='name,price,ratingsAverage,summary,difficulty';
next();
};

exports.getAllTour=factory.getAll(Tour);
// exports.getAllTour = catchAsync(async (req, res ,next) => {
//   const features=new APIFeatures(Tour.find(),req.query).filter().sort().limitFields().paginate();
//   const tours=await features.query;
//   res.status(200).json({
//     status: "success",
//     Timeat:req.requestTime,
//     result: tours.length,
//     data: {
//       tours,
//     },
//   });
//   // try{
//     //build query
//     // 1) Filtering
//     // const queryObj={...req.query};
//     // const execludedFields=['page','sort','limit','fields'];
//     //delete about page ,sort if request not include in data
//     // execludedFields.forEach(el=>delete queryObj[el]);
//     //write query first way
//     // const tours= await Tour.find({
//     //   duration:5,
//     //   difficulty:'easy'
//     // });
//     //1b) Advanced fltering
//     // let queryStr=JSON.stringify(queryObj);
//     // queryStr=queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match=>`$${match}`);
//     // const query= Tour.find(JSON.parse(queryStr));
//     //2) Sorting
//     // if(req.query.sort){
//     //   const sortBy=req.query.sort.split(',').join(' ');
//     //   query=query.sort(sortBy);
//     // }else{
//     //   //- is appear first
//     //   query=query.sort('-createdAt');
//     // }
//     //3) field limiting
//     // if(req.query.fields){
//     //   const fields=req.query.fields.split(',').join(' ');
//     //   query=query.select(fields);
//     // }else{
//     //   // - is excluding
//     //   query=query.select('-v__v');
//     // }
//     //4) pagination
//     // const page=req.query.page*1 || 1;
//     // const limit=req.query.limit*1 || 100;
//     // const skip=(page-1)*limit;
//     // //page=3&limit=10,1-10,page 1,11-20,page 2,21-30,page 3
//     // // query=query.skip(20).limit(10);
//     // //for example skip is page 2 and limt 10 skip is 20 .if we skip 20 , page 3 result is start 30
//     // query=query.skip(skip).limit(limit);
//     // if(req.query.page){
//     //   const numTours=await Tour.countDocuments();
//     //   if(skip >= numTours) throw new Error('This page does not exit');
//     // }
//     //execute query
//     // const features=new APIFeatures(Tour.find(),req.query).filter().sort().limitFields().paginate();
//     // const tours=await features.query;
//     //query.sort().select().skip().limit() big query
//     //second waay
//     // const tours= await Tour.find().where('duration').equals(5).where('difficulty').equals('easy');
//     // res.status(200).json({
//     //   status: "success",
//     //   Timeat:req.requestTime,
//     //   result: tours.length,
//     //   data: {
//     //     tours,
//     //   },
//     // });
//   // }catch(err){
//   //   res.status(400).json({
//   //     status:'fail',
//   //     message:err
//   //   });
//   // }
    
//   });

exports.getTour=factory.getOne(Tour,{path:'reviews'});
// exports.getTour =  catchAsync(async (req, res ,next) => {
//   const tour=await Tour.findById(req.params.id).populate('reviews');
//   if(!tour){
//     return next(new AppError('No tour found with that Id', 404));
//   }
//      res.status(200).json({
//       status: "success",
//       data: {
//         tour,
//       },
//     });
//   // try{
//   //   const tour=await Tour.findById(req.params.id);
//   //   //Tours.findOne({_id:req.params.id})
//   //    res.status(200).json({
//   //     status: "success",
//   //     data: {
//   //       tour,
//   //     },
//   //   });
//   // }catch(err)
//   // {
//   //   res.status(400)
//   // }   
//    // const id = req.params.id * 1;
//     // const tour = tours.find((el) => el.id === id);
//     // if (!tour) {
//     //   return res.status(404).json({
//     //     status: "fail",
//     //     message: "Invalid ID",
//     //   });
//     // }
//     // res.status(200).json({
//     //   status: "success",
//     //   data: {
//     //     tour,
//     //   },
//     // });
//   });
  exports.updateTour=factory.updateOne(Tour);
// exports.updateTour = catchAsync(async(req, res ,next) => {
//   const tour= await Tour.findByIdAndUpdate(req.params.id,req.body,{
//     new:true,
//     runValidators:true
//   });
//   if(!tour){
//     return next(new AppError('No tour found with that Id', 404));
//   }
//   res.status(200).json({
//     status: "success",
//     data: {
//       tour,
//     },
//   });
//   // try{
//   //  const tour= await Tour.findByIdAndUpdate(req.params.id,req.body,{
//   //     new:true,
//   //     runValidators:true
//   //   })
//   //   res.status(200).json({
//   //     status: "success",
//   //     data: {
//   //       tour,
//   //     },
//   //   });
//   // }catch(err){
//   //   res.status(400).json({
//   //     status:'fail',
//   //     message:err
//   //   });
//   // }
  
//   });
exports.createTour=factory.createOne(Tour);
// exports.createTour = catchAsync(async (req, res, next) => {
//   const newTour=await Tour.create(req.body);
//   res.status(201).json({
//     status: "success",
//     data: {
//       tours: newTour,
//     },
//   });
//   // try{
//   //   const newTour=await Tour.create(req.body);
//   //   res.status(201).json({
//   //     status: "success",
//   //     data: {
//   //       tours: newTour,
//   //     },
//   //   });
//   // }catch(err){
//   //   res.status(400).json({
//   //     status:'fail',
//   //     messsage:err
//   //   })
//   // }
//   });
exports.deleteTour=factory.deleteOne(Tour);
// exports.deleteTour = catchAsync(async (req, res ,next) => {
//   const tour=await Tour.findByIdAndDelete(req.params.id);
//   if(!tour){
//     return next(new AppError('No tour found with that Id', 404));
//   }
//   res.status(204).json({
//     status: "succcess",
//     data: null,
//   });
  // try{
  //   await Tour.findByIdAndDelete(req.params.id);
  //   res.status(204).json({
  //     status: "succcess",
  //     data: null,
  //   });
  // }catch(err){
  //   res.status(400).json({
  //     status:'fail',
  //     messsage:'Invalid data sent!'
  //   })
  // }
// });
exports.getTourStats=catchAsync(async(req,res ,next)=>{
  const stats=await Tour.aggregate([
    {
      $match:{ratingsAverage:{$gte:4.5}}
    },
    {
      $group:{
        _id:{$toUpper:'$difficulty'},
        numTours:{$sum:1},
        numRatings:{$sum:'$ratingsQuantity'},
        avgRating:{$avg:'$ratingsAverage'},
        avgPrice:{$avg:'$price'},
        minPrice:{$min:'$price'},
        maxPrice:{$max:'$price'}
      }
    },
    {
      $sort:{avgPrice:1}
    },
  ]);
  res.status(201).json({
    status: "success",
    data:{
      stats
    }
  })
  // try{
  //   const stats=await Tour.aggregate([
  //     {
  //       $match:{ratingsAverage:{$gte:4.5}}
  //     },
  //     {
  //       $group:{
  //         _id:{$toUpper:'$difficulty'},
  //         numTours:{$sum:1},
  //         numRatings:{$sum:'$ratingsQuantity'},
  //         avgRating:{$avg:'$ratingsAverage'},
  //         avgPrice:{$avg:'$price'},
  //         minPrice:{$min:'$price'},
  //         maxPrice:{$max:'$price'}
  //       }
  //     },
  //     {
  //       $sort:{avgPrice:1}
  //     },
  //     // {
  //     //   $match:{ _id:{$ne: 'EASY'}}
  //     // }
  //   ]);
  //   res.status(201).json({
  //     status: "success",
  //     data:{
  //       stats
  //     }
  //   })
  // }catch(err){
  //   res.status(400).json({
  //     status:'fail',
  //     messsage:err
  //   })
  // }
});
exports.getMonthlyPlan=catchAsync(async (req,res ,next)=>{
  const year=req.params.year*1;//2021
  const plan= await Tour.aggregate([
    {
      $unwind:'$startDates'
    },
    {
      $match:{
        startDates:{
          $gte:new Date(`${year}-01-01`),
          $lte:new Date(`${year}-12-31`),
        }
      }
    },
    {
      $group:{
        _id:{$month:'$startDates'},
        numTourStarts:{$sum:1},
        tours:{ $push:'$name'}
      }
    },
    {
      $addFields:{month: '$_id'}
    },
    {
      $project:{
        _id:0
      }
    },
    {
      //-1 is desc
      $sort:{numberTourStarts:-1}
    },
    {
      $limit:12
    }
  ]);
  res.status(201).json({
    status:'success',
    data:{
      plan
    }
  })
  // try{
  //   const year=req.params.year*1;//2021
  //   const plan= await Tour.aggregate([
  //     {
  //       $unwind:'$startDates'
  //     },
  //     {
  //       $match:{
  //         startDates:{
  //           $gte:new Date(`${year}-01-01`),
  //           $lte:new Date(`${year}-12-31`),
  //         }
  //       }
  //     },
  //     {
  //       $group:{
  //         _id:{$month:'$startDates'},
  //         numTourStarts:{$sum:1},
  //         tours:{ $push:'$name'}
  //       }
  //     },
  //     {
  //       $addFields:{month: '$_id'}
  //     },
  //     {
  //       $project:{
  //         _id:0
  //       }
  //     },
  //     {
  //       //-1 is desc
  //       $sort:{numberTourStarts:-1}
  //     },
  //     {
  //       $limit:12
  //     }
  //   ]);
  //   res.status(201).json({
  //     status:'success',
  //     data:{
  //       plan
  //     }
  //   })
  // }catch(errr){
  //   res.status(404).json({
  //     status:'fail',
  //     message:err
  //   })
  // }
});