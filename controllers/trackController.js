const Track = require('../models/trackModel');

exports.getAllTracks = async (req, res, next) => {
  try {
    const tracks = await Track.find();

    res.status(200).json({
      status: 'success',
      totalResults: tracks.length,
      data: {
        tracks,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message,
    });
  }
};

exports.getTrack = async (req, res, next) => {
  try {
    const track = await Track.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        track,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message,
    });
  }
};

exports.addTrack = async (req, res, next) => {
  const { title, poster, duration } = req.body;

  try {
    const newTrack = await Track.create({
      title,
      duration,
      poster,
    });

    res.status(201).json({
      status: 'success',
      data: {
        track: newTrack,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: 'fail',
      message: error.message,
    });
  }
};

exports.updateTrack = async (req, res, next) => {
  try {
    const updatedTrack = await Track.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json({
      status: 'success',
      message: 'track updated',
      data: {
        track: updatedTrack,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
    });
  }
};

exports.deleteTrack = async (req, res, next) => {
  try {
    await Track.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: 'success',
      message: 'track deleted successfully',
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message,
    });
  }
};
