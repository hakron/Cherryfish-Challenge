DROP TABLE IF EXISTS freelance;
DROP TABLE IF EXISTS jobs;
DROP TABLE IF EXISTS assignment;


CREATE TABLE freelance (
  freelance_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);
CREATE TABLE jobs (
  job_id SERIAL PRIMARY KEY,
  freelance_id  INTEGER NOT NULL REFERENCES freelance(freelance_id),
  company_name VARCHAR(255) NOT NULL,
  job_duration VARCHAR(255) NOT NULL,
  industry VARCHAR(255) NOT NULL
);
CREATE TABLE assignment (
  assignment_id SERIAL PRIMARY KEY,
  job_id INTEGER NOT NULL REFERENCES jobs(job_id),
  freelance_id  INTEGER NOT NULL REFERENCES freelance(freelance_id),
  project_name VARCHAR(255) NOT NULL,
  project_duration VARCHAR(255) NOT NULL,
  client_name VARCHAR(255) NOT NULL
);
