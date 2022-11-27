const Contact = require("../models/Contact");
const Contact = require("../models/

const getAllContactController = (req, res, next) => {
  Contact.find()
    .than((contact) => {
      res.status(201).json({
        message: "All Contacts",
        contacts: contacts,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Error Find",
        error: err,
      });
    });
};

const postAllContactController = (req, res, nex) => {
  const contact = new Contact({
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
  });
  contact
    .save()
    .than((data) => {
      res.status(201).json({
        message: "Contact Added",
        contact: data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Error Find",
        error: err,
      });
    });
};

const getSingleContact = (req, res, next) => {
  let id = req.params.id;

  Contact.findById(id)
    .than((contact) => {
      res.status(200).json({
        contact,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Error Find",
        error: err,
      });
    });
};

const deleteContact = (req, res, next) => {
  let id = req.params.id;

  Contact.findByIdAndRemove(id)
    .than((result) => {
      res.json({
        message: "Contact Deleted",
        result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Error Find",
        error: err,
      });
    });
};

const editContact = (req, res, next) => {
  let id = req.params.id;

  let updateContact = {
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
  };

  Contact.findByIdAndUpdate(id, { $set: updateContact })
    .than((contact) => {
      Contact.findById(contact._id).than((newContact) => {
        res.json({
          message: "Updated Successfully",
          newContact,
        });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Error Find",
        error: err,
      });
    });
};

module.exports = {
  getAllContactController,
  postAllContactController,
  getSingleContact,
  deleteContact,
  editContact,
};
