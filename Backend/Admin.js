const Express = require("express");
const Bodyparser=require("body-parser");
const Mongo=require("mongodb").MongoClient;
const Url="mongodb://localhost:27017/"
const ObjectId=require("mongodb").ObjectID;
const Cor=require("cors");
var Data_base="admininfo" 
var app=Express();
app.use(Cor());
app.use(Bodyparser.json());
app.use(Bodyparser.urlencoded({extended:true}));
  var Dob, Collection, Collectionlogfeed
app.listen(4000, ()=>{
    Mongo.connect(Url, {useNewUrlParser:true}, (err,db)=>{
        if(err) throw err;
     Dob=db.db(Data_base);
     Collectionadmin= Dob.collection("admin");
     Collectionlogfeed= Dob.collection("loginfeeddata");
     CollectionReg= Dob.collection("Registration");
     Collectionfeed= Dob.collection("feedbacks");   

        console.log("connect to`" + Data_base +"`!");
    });
});
app.post("/logingdata",(req, res)=>{
  Collectionadmin.findOne(req.body, (err, result)=>{
      if(err){
        return res.status(500).send(err);
      }
      var s="";
      if(!result){
        s="0";
        console.log('login Fail')
      }
      else{
        s="1";
        console.log('login Sucessful')
      }
      const responseData={
        message:s
      }
      res.send(responseData);
    }) ;
      });
app.get("/login/ggetall", (req, resp)=>{
  Collectionadmin.find({}).toArray((err, result)=>{
        if(err){
            return resp.status(500).send(err);
        }
        resp.send(result)
    });
});
app.get("/login/getone/:_id", (req, resp)=>{
  Collectionadmin.findOne({"_id": new ObjectId(req.params._id)},(err, result)=>{
        if(err){
            return resp.status(500).send(err);
        }
        resp.send(result)
    });
});
app.post("/login/postdata2",(req, res)=>{
  Collectionadmin.insert(req.body, (err, result)=>{
      if(err){
        return res.status(500).send(err);
      }
      res.send(result);
  
    }) 
      });
      app.put("/login/update/:_id", (req, resp)=>{
        Collectionadmin.updateOne({"_id": new ObjectId(req.params._id)},{$set:req.body},(err, result)=>{
            if(err){
                return resp.status(500).send(err);
            }
            resp.send(result)
        });
            });
            app.delete("/login/getone/:_id", (req, resp)=>{
              Collectionadmin.remove({"_id": new ObjectId(req.params.id)},(err, result)=>{
                    if(err){
                        return resp.status(500).send(err);
                    }
                    resp.send(result)
                });
            });
            

            // Loginfeedback API
           
          app.post("/logfeedback/:_id",(req, res)=>{
            Collectionlogfeed.findOne(req.body, (err, result)=>{
                if(err){
                  return res.status(500).send(err);
                }
                  if(!result){
                  console.log('result.email')
                }
                else{
                  console.log('res.email')
                }
                res.send(result);
          }) ;
                });
          app.get("/login/feedgetall", (req, resp)=>{
            Collectionlogfeed.find({}).toArray((err, result)=>{
                  if(err){
                      return resp.status(500).send(err);
                  }
                  resp.send(result)
              });
          });
          app.get("/login/feedgetone/:_id", (req, resp)=>{
            Collectionlogfeed.findOne({"_id": new ObjectId(req.params._id)},(err, result)=>{
                  if(err){
                      return resp.status(500).send(err);
                  }
                  resp.send(result)
              })
          });
          app.post("/login/feedpostdata2",(req, res)=>{
            Collectionlogfeed.insert(req.body, (err, result)=>{
                if(err){
                  return res.status(500).send(err);
                }
                res.send(result.result);
            
              }) 
                });
                
                app.put("/login/feedupdate/:_id", (req, resp)=>{
                  Collectionlogfeed.updateOne({"_id": new ObjectId(req.params._id)},{$set:req.body},(err, result)=>{
                      if(err){
                          return resp.status(500).send(err);
                      }
                      resp.send(result)
                  });
                      });
          
                      app.delete("/login/delete/:id", (req,resp)=>{
                        Collectionlogfeed.remove({"_id":new ObjectId(req.params.id)}, (err,result)=>{
                              if(err){
                                  return resp.status(500).send(err);
                              }
                                  resp.send(result);
                          });
                      } );

                      // LogOut User
                  app.get("/Logout",(req,resp)=>{
                    
                  })

                  //start Registration Api
                  app.post("/registerdata/:_id",(req, res)=>{
                    CollectionReg.findOne(req.body, (err, result)=>{
                      if(err){
                        return res.status(500).send(err);
                      }
                      if(!result){
                        console.log('result.email')
                      }
                      else{
                        console.log('res.email')
                      }
                      res.send(result);
                    }) ;
                      });
                app.get("/feed/getall", (req, resp)=>{
                  CollectionReg.find({}).toArray((err, result)=>{
                        if(err){
                            return resp.status(500).send(err);
                        }
                        resp.send(result)
                    });
                });
                app.get("/feed/getone/:_id", (req, resp)=>{
                  CollectionReg.findOne({"_id": new ObjectId(req.params._id)},(err, result)=>{
                        if(err){
                            return resp.status(500).send(err);
                        }
                        resp.send(result)
                    });
                });
                app.post("/feed/postdata2",(req, res)=>{
                  CollectionReg.insert(req.body, (err, result)=>{
                      if(err){
                        return res.status(500).send(err);
                      }
                      res.send(result.result);
                  
                    }) 
                      });
                      
                      app.put("/feed/update/:_id", (req, resp)=>{
                        CollectionReg.updateOne({"_id": new ObjectId(req.params._id)},{$set:req.body},(err, result)=>{
                            if(err){
                                return resp.status(500).send(err);
                            }
                            resp.send(result)
                        });
                            });
                
                            app.delete("/feed/delete/:id", (request, response) => {
                              CollectionReg.remove({ "_id": new ObjectId(request.params._id) }, (error, result) => {
                                  if(error) {
                          
                                      return response.status(500).send(error);
                          
                                  }
                          
                                  response.send(result);
                          
                              });
                          
                          });
                //Registration Feedback

                app.post("/feedback/:_id",(req, res)=>{
                  Collectionfeed.findOne(req.body, (err, result)=>{
                    if(err){
                      return res.status(500).send(err);
                    }
                    if(!result){
                      console.log('result.email')
                    }
                    else{
                      console.log('res.email')
                    }
                    res.send(result);
              }) ;
                    });
              app.get("/feed/feedgetall", (req, resp)=>{
                Collectionfeed.find({}).toArray((err, result)=>{
                      if(err){
                          return resp.status(500).send(err);
                      }
                      resp.send(result)
                  });
              });
              app.get("/feed/feedgetone/:_id", (req, resp)=>{
                Collectionfeed.findOne({"_id": new ObjectId(req.params._id)},(err, result)=>{
                      if(err){
                          return resp.status(500).send(err);
                      }
                      resp.send(result)
                  });
              });
              app.post("/feed/feedpostdata2",(req, res)=>{
                Collectionfeed.insert(req.body, (err, result)=>{
                    if(err){
                      return res.status(500).send(err);
                    }
                    res.send(result.result);
                
                  }) 
                    });
                    
                    app.put("/feed/feedupdate/:_id", (req, resp)=>{
                      Collectionfeed.updateOne({"_id": new ObjectId(req.params._id)},{$set:req.body},(err, result)=>{
                          if(err){
                              return resp.status(500).send(err);
                          }
                          resp.send(result)
                      });
                          });
                          app.delete("/feed/delete/:_id", (req, resp)=>{
                            Collectionfeed.remove({"_id": new ObjectId(req.params.id)},(err, result)=>{
                                  if(err){
                                      return resp.status(500).send(err);
                                  }
                                  resp.send(result)
                              });
                          });