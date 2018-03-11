var db = require("../models");

module.exports = function(app){
	app.get("/", function(req, res) {
		db.Burger.findAll({
			order: ['burger_name']
		})
		.then(function(dbBurger){
			var hbsObject = {
				burgers:dbBurger
			};
			res.render("index", hbsObject);
		});
	 }); 
     
 	app.post("/api/burgers", function(req, res) {
		db.Burger.create({
			burger_name:req.body.name
		})
		.then(function(dbBurger) {
			res.json({ id: dbBurger.insertId });
			})
			.catch(function(err) {
			res.json(err);
		});
	});	

    
    app.put("/api/burgers/:id", function(req, res) {
      var condition = req.params.id;
	
	//   db.Rating.update({
	// 	  rating:req.params.burg
	//   })
    //   console.log("condition", condition);
	  db.Burger.update({
			devoured: true
		},{
			where:{
				id:condition
			}
			// order:['name', 'ASC']
		}).then(function(dbBurger){
			console.log("I'm special" + dbBurger);
			// console.log("my condition" + dbBurger.devoured);
			if (dbBurger.changedRows === 0) {
				return res.status(404).end();
			}
			res.status(200).end();
		});
	});

	app.delete("/api/burgers/:id", function(req, res) {
		var condition = req.params.id;
	  
		db.Burger.destroy({
			 where:{
				  id:condition
			  }
			  // order:['name', 'ASC']
		  }).then(function(dbBurger){
				res.json(dbBurger);
		  });
	  });
	
};