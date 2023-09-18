import { request } from "express";
import User from "../models/UserModel.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUsersById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const saveUser = async (req, res) => {
  const user = new User(req.body);
  try {
    const insert_user = await user.save();
    res.status(201).json(insert_user);
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log("error save");
  }
};

export const updateUser = async (req, res) => {
  try {
    const update_user = await User.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(update_user);
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log("error update");
  }
};

export const deleteUser = async (req, res) => {
  try {
    const delete_user = await User.deleteOne({ _id: req.params.id });
    res.status(200).json(delete_user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
