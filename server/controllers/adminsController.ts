const data = {
  admins: require("../models/admin.json"),
  setAdmins: function (data) {
    this.admins = data;
  },
};

export const getAllAdmins = (req, res) => {
  res.json(data.admins);
};

export const createNewAdmin = (req, res) => {
  const newEmployee = {
    id: data.admins?.length ? data.admins[data.admins.length - 1].id + 1 : 1,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
  };

  if (!newEmployee.firstname || !newEmployee.lastname) {
    return res
      .status(400)
      .json({ message: "First and last names are required." });
  }

  data.setAdmins([...data.admins, newEmployee]);
  res.status(201).json(data.admins);
};

const updateAdmin = (req, res) => {
  const employee = data.admins.find((emp) => emp.id === parseInt(req.body.id));

  if (!employee) {
    return res
      .status(400)
      .json({ message: `Admin ID ${req.body.id} not found` });
  }

  if (req.body.firstname) employee.firstname = req.body.firstname;

  if (req.body.lastname) employee.lastname = req.body.lastname;

  const filteredArray = data.admins.filter(
    (emp) => emp.id !== parseInt(req.body.id)
  );

  const unsortedArray = [...filteredArray, employee];

  data.setAdmins(
    unsortedArray.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
  );

  res.json(data.admins);
};

export const deleteAdmin = (req, res) => {
  const employee = data.admins.find((emp) => emp.id === parseInt(req.body.id));

  if (!employee) {
    return res
      .status(400)
      .json({ message: `Admin ID ${req.body.id} not found` });
  }

  const filteredArray = data.admins.filter(
    (emp) => emp.id !== parseInt(req.body.id)
  );

  data.setAdmins([...filteredArray]);
  res.json(data.admins);
};

export const getAdmin = (req, res) => {
  const employee = data.admins.find(
    (emp) => emp.id === parseInt(req.params.id)
  );

  if (!employee) {
    return res
      .status(400)
      .json({ message: `Admin ID ${req.params.id} not found` });
  }

  res.json(employee);
};
