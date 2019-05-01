const menu = require('../model/menu');

module.exports.rootPage = (req, res, next)=>{
        res.send("<h1>Hello world!</h1>");
}


// Function to add Menu to the database
module.exports.addMenu = (req, res, next)=>{
        
        const menutoInsert = new menu();
        menutoInsert.zipcode = 95112;
        menutoInsert.servicetype = 'VTA';
        menutoInsert.cost = '20$';
        menutoInsert.location = 'San Jose';

        menutoInsert.save( 
        ).then( result=>{
                console.log('successfully saved the record');
                res.send('<h1>successfully saved the record</h1>');
        }).catch( error=>{
                console.log(error);
        });
}


// Function to get the menu from the database based on the zipcode
module.exports.getMenu = (req, res, next)=>{
       const zipcode = req.query.zipcode;
       console.log(zipcode);
        menu.find({zipcode: zipcode}).then((result)=>{
                console.log(result);
                res.send(result);
                // if there are no records in the result, then it means no services will be available for a given service
        }).catch( error=>{
                console.log(error);
        });
}
