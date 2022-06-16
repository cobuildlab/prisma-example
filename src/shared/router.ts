import express from 'express';

export const publicRouter = express.Router();

// This route doesn't need authentication
publicRouter.get('/api/public', function (req, res) {
  res.json({
    message: "Hello from a public endpoint! You don't need to be authenticated to see this.",
  });
});
