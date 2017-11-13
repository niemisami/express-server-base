import models from '../models';
import Promise from 'bluebird';
import _ from 'lodash';

export const simpleService = {
  testService: Promise.resolve({
    message: 'service response'
  })
}
