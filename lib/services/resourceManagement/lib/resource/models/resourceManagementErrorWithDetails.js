/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.14.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the ResourceManagementErrorWithDetails class.
 * @constructor
 * @member {array} [details] Gets or sets validation error.
 * 
 */
function ResourceManagementErrorWithDetails(parameters) {
  ResourceManagementErrorWithDetails['super_'].call(this, parameters);
  if (parameters !== null && parameters !== undefined) {
    if (parameters.details) {
      var tempParametersdetails = [];
      parameters.details.forEach(function(element) {
        if (element) {
          element = new models['ResourceManagementError'](element);
        }
        tempParametersdetails.push(element);
      });
      this.details = tempParametersdetails;
    }
  }    
}

util.inherits(ResourceManagementErrorWithDetails, models['ResourceManagementError']);

/**
 * Validate the payload against the ResourceManagementErrorWithDetails schema
 *
 * @param {JSON} payload
 *
 */
ResourceManagementErrorWithDetails.prototype.serialize = function () {
  var payload = ResourceManagementErrorWithDetails['super_'].prototype.serialize.call(this);
  if (util.isArray(this['details'])) {
    payload['details'] = [];
    for (var i = 0; i < this['details'].length; i++) {
      if (this['details'][i]) {
        payload['details'][i] = this['details'][i].serialize();
      }
    }
  }

  return payload;
};

/**
 * Deserialize the instance to ResourceManagementErrorWithDetails schema
 *
 * @param {JSON} instance
 *
 */
ResourceManagementErrorWithDetails.prototype.deserialize = function (instance) {
  ResourceManagementErrorWithDetails['super_'].prototype.deserialize.call(this, instance);
  if (instance) {
    if (instance['details']) {
      var tempInstancedetails = [];
      instance['details'].forEach(function(element1) {
        if (element1) {
          element1 = new models['ResourceManagementError']().deserialize(element1);
        }
        tempInstancedetails.push(element1);
      });
      this['details'] = tempInstancedetails;
    }
  }

  return this;
};

module.exports = ResourceManagementErrorWithDetails;