/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { ServiceClientOptions, RequestOptions, ServiceCallback, HttpOperationResponse, ServiceClientCredentials } from 'ms-rest';
import * as models from "./models";
import * as operations from "./operations";

declare class LogicManagementClient {
  /**
   * Initializes a new instance of the LogicManagementClient class.
   * @constructor
   *
   * @class
   * @param {credentials} credentials - Credentials needed for the client to connect to Azure.
   *
   * @param {string} subscriptionId - The subscription id.
   *
   * @param {string} [baseUri] - The base URI of the service.
   *
   * @param {object} [options] - The parameter options
   *
   * @param {Array} [options.filters] - Filters to be added to the request pipeline
   *
   * @param {object} [options.requestOptions] - Options for the underlying request object
   * {@link https://github.com/request/request#requestoptions-callback Options doc}
   *
   * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
   *
   * @param {string} [options.apiVersion] - The API version.
   *
   * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
   *
   * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
   *
   * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
   *
   */
  constructor(credentials: ServiceClientCredentials, subscriptionId: string, baseUri?: string, options?: ServiceClientOptions);

  credentials: ServiceClientCredentials;

  subscriptionId: string;

  apiVersion: string;

  acceptLanguage: string;

  longRunningOperationRetryTimeout: number;

  generateClientRequestId: boolean;

  // Operation groups
  workflows: operations.Workflows;
  workflowVersions: operations.WorkflowVersions;
  workflowTriggers: operations.WorkflowTriggers;
  workflowTriggerHistories: operations.WorkflowTriggerHistories;
  workflowRuns: operations.WorkflowRuns;
  workflowRunActions: operations.WorkflowRunActions;
  integrationAccounts: operations.IntegrationAccounts;
  schemas: operations.Schemas;
  maps: operations.Maps;
  partners: operations.Partners;
  agreements: operations.Agreements;
  certificates: operations.Certificates;
  sessions: operations.Sessions;


  /**
   * Lists all of the available Logic REST API operations.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<OperationListResult>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  listOperationsWithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.OperationListResult>>;

  /**
   * Lists all of the available Logic REST API operations.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {OperationListResult} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {OperationListResult} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link OperationListResult} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  listOperations(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.OperationListResult>;
  listOperations(callback: ServiceCallback<models.OperationListResult>): void;
  listOperations(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.OperationListResult>): void;


  /**
   * Lists all of the available Logic REST API operations.
   *
   * @param {string} nextPageLink The NextLink from the previous successful call
   * to List operation.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<OperationListResult>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  listOperationsNextWithHttpOperationResponse(nextPageLink: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.OperationListResult>>;

  /**
   * Lists all of the available Logic REST API operations.
   *
   * @param {string} nextPageLink The NextLink from the previous successful call
   * to List operation.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {OperationListResult} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {OperationListResult} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link OperationListResult} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  listOperationsNext(nextPageLink: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.OperationListResult>;
  listOperationsNext(nextPageLink: string, callback: ServiceCallback<models.OperationListResult>): void;
  listOperationsNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.OperationListResult>): void;
}

export = LogicManagementClient;
