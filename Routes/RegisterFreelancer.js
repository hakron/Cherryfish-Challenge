const express = require('express');
router = express.Router();
const db = require('../DataBase/DbFreelancers.js');

router.route('/registerNewFreelancer')
.post((req, res) => {
      db.insertFreelance(req.body.freelance_name, req.body.company_name, req.body.job_from, req.body.job_to, req.body.industry, req.body.project_name, req.body.project_from, req.body.project_to, req.body.client_name).then(function(results){
            res.json({
                  success:true,
                  message: "You are now registered"
            })
      }).catch(function(err){
            console.log(err);
            res.json({
                  success: false
            })
      });
});
module.exports = router;
