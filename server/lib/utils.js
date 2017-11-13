import _ from 'lodash';

/**
 * 
 * @param {Object} body  
 * @param {Array} requidedKeys An array of keys
 */
export const containsKeys = (body, requidedKeys) => {
    const containsKeysResult = requidedKeys.reduce((result, key) => {
        return (body[key] !== undefined) && result
    }, true);
    return containsKeysResult;
}

/**
 * Waits serviceActionPromise to be fulfilled and sends result or an error as an response
 */
export const sendPromiseResultOrErrorToClient = (res, promise) =>
promise.then(result => {
  res.json(result);
}).catch(err => {
  res.status(404).json({
    data: {},
    message: 'Failed to handle request',
    error: err.errors || err.message || err
  });
});

export const sendErrorToClient = (res, err) => {
res.status(404).json({
  data: {},
  message: 'Failed to handle request',
  error: err.errors || err.message || err
});
}
