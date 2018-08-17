import logger from '../../project/logger/app-logger'


// Generic error handler used by all endpoints.
export function handleError(res, reason, code) {
  logger.error("ERROR: " + reason);
  res.status(200).json({
    "error": {
      "message" : reason ,
      "code" : code}
    });
}

export function createResponse(res, data , code) {
  logger.info("SUCCESS:" + data);
  res.status(200).json({
    "data": data ,
    "code" : code
  });
}

export function handleException(res, reason ) {
  logger.error("EXCEPTION:" + reason);
  res.status(500).json({
    "error": {
      "message" : reason ,
      "code" : 500}
    });
}
