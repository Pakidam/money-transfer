const Pool = require("pg").Pool;

const pool = new Pool({
  user: "me",
  host: "localhost",
  database: "moneytransfer",
  password: "password",
  port: 5432
});

const getUsers = (req, res) => {
  pool.query(
    "SELECT * FROM customer ORDER BY customer_id ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    }
  );
};

const getUserById = (req, res) => {
  const customer_id = parseInt(req.params.id);

  pool.query(
    "SELECT * FROM customer WHERE customer_id =$1",
    [customer_id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    }
  );
};

const createUser = (req, res) => {
  const {
    sending_country,
    first_name,
    middle_name,
    last_name,
    email,
    password,
    marketing_preference
  } = req.body;

  pool.query(
    "INSERT INTO customer (sending_country, first_name, middle_name, last_name, email, password, marketing_preference) VALUES ($1, $2, $3, $4, $5, $6, $7)",
    [
      sending_country,
      first_name,
      middle_name,
      last_name,
      email,
      password,
      marketing_preference
    ],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(201).send("User added");
    }
  );
};

module.exports = {
  getUsers,
  getUserById,
  createUser
};
