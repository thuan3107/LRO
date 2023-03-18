const User = require("../models/User.js");
const Docs = require("../models/docs.models.js");
const { StatusCode } = require("../utils/constants.js");
const { jsonGenerate } = require("../utils/helpers.js");
const { DateNow } = require("../Func/Date.js");

exports.DeleteUser = async (req, res) => {};

exports.DeleteDoc = async (req, res) => {};

exports.DeleteArt = async (req, res) => {
  try {
  } catch (error) {}
};

// Thống kê user
exports.StatisticsUsers = async (req, res) => {
  try {
    const TUser = await User.find();
    const TotalUser = TUser.length;

    res.json(
      jsonGenerate(StatusCode.SUCCESS, `User Data Succssfully`, {
        TotalUser,
        TUser,
      })
    );
  } catch (error) {}
};

exports.StatisticsDocs = async (req, res) => {
  try {
    var today = new Date();
    var day =
      today.getDate() +
      "/" +
      (today.getMonth() + 1) +
      "/" +
      today.getFullYear();
    var oldday =
      today.getDate() +
      "/" +
      (today.getMonth() + 1) +
      "/" +
      today.getFullYear();
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const TDocs = await Docs.find();
    const NDocs = await Docs.find({
      $and: [
        {
          date: day,
        },
      ],
    });
    const ODocs = await Docs.find({
      $and: [
        {
          date:
            today.getDate() -
            1 +
            "/" +
            (today.getMonth() + 1) +
            "/" +
            today.getFullYear(),
        },
      ],
    });
    const TotalDoc = TDocs.length;
    const NewDoc = NDocs.length;
    const OldDoc = ODocs.length;
    const TotalViewDoc = TDocs.reduce((total, doc) => total + doc.view, 0);
    const TotalLikeDoc = TDocs.reduce(
      (total, doc) => total + doc.like.length,
      0
    );
    res.json(
      jsonGenerate(StatusCode.SUCCESS, `User Data Succssfully`, {
        TotalDoc,
        NewDoc,
        OldDoc,
        TotalViewDoc,
        TotalLikeDoc,
      })
    );
  } catch (error) {}
};

exports.StatisticsArts = async (req, res) => {
  try {
  } catch (error) {}
};

exports.ChartLineDoc = async (req, res) => {
  try {
    const result = [];
    const ArrDay = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const formattedDate =
        date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
      const docs = await Docs.find({ date: formattedDate });
      result.push(docs.length);
      ArrDay.push(formattedDate);
    }
    res.json(
      jsonGenerate(StatusCode.SUCCESS, `Data Successfully`, { result, ArrDay })
    );
  } catch (error) {
    console.error(error); // log or handle the error properly
  }
};
