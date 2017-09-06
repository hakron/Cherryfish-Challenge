const spicePg = require('spiced-pg');
const secrets = require('./secrets.json');
const dbUrl = process.env.DATABASE_URL ||`postgres:${secrets.dbUser}:${secrets.password}@localhost:5432/Cherryfish`;
const db = spicePg(dbUrl);


function insertFreelance(freelance_name, company_name, job_from, job_to, industry, project_name, project_from, project_to, client_name) {

  const jobDuration = job_from + ' - ' + job_to;
  const projectDuration = project_from + ' - ' + project_to;
  const q = `
  WITH insert_freelance AS
  (
    INSERT INTO freelance (name)
    VALUES ($1) RETURNING freelance_id
  )
  ,
  insert_job AS (
    INSERT INTO jobs (freelance_id, company_name, job_duration, industry)
    VALUES ( (SELECT freelance_id FROM insert_freelance),
    $2, $3, $4) RETURNING job_id
  )
  INSERT INTO assignment (job_id, freelance_id,
    project_name, project_duration, client_name)
    VALUES ( (SELECT job_id FROM insert_job),
    (SELECT freelance_id FROM insert_freelance),
    $5, $6, $7)
    `
    ;
    const params = [freelance_name, company_name, jobDuration, industry, project_name, projectDuration, client_name];

    return db.query(q, params).then(function(results) {
      return {success: true};

    }).catch(function(err){
      console.log(err);
      throw err;
    });
  }
  exports.insertFreelance = insertFreelance;
