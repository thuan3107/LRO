const mongoose = require('mongoose');

module.exports = async () => {
    const connectionParams = {
        useNewUrlParser: true,
		useUnifiedTopology: true,
    }
    try {
      await mongoose.connect(process.env.DB, connectionParams);
      // console.log("Connected to database successfully")
      console.log(`
      \x1b[46m CONNECTED TO DATABASE\x1b[44m  SUCCESSFULLY 
        `);
    } catch (error) {
      // console.log("Could not connect to database!")
      console.log(`
        \x1b[40m CONNECTED TO DATABASE\x1b[41m  SUCCESSFULLY \x1b[40m
        `);
    }
}