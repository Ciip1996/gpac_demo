const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'gpac',
  password: 'admin123',
  port: 5432,
})

const getUsers = (request, response) => {
    pool.query('SELECT * FROM clients ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  
  const getUserById = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM clients WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }


  const createUser = (request, response) => {
    const { name = '', industry= '', job_position='', phone, salary, location='', title='', email='', images='https://africajurists.org/wp-content/uploads/2015/03/empty_avatar.jpg' } = request.query;
    pool.query(
      'INSERT INTO clients (name, industry, job_position, phone, salary, location, title, email, images) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)', 
      [name, industry, job_position, phone, salary, location, title, email, images],
      (error, results) => {
        if (error) {
          console.log(error);
          throw error;
        }
        if(results.rowCount)
          response.status(201).send(`User added succesfully`);
    });
  }
  
  
  module.exports = {
    getUsers,
    getUserById,
    createUser
}

  