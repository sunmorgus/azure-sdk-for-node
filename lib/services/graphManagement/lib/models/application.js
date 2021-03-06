/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the Application class.
 * @constructor
 * Active Directory application information.
 *
 * @member {string} [objectId] The object ID.
 *
 * @member {string} [objectType] The object type.
 *
 * @member {string} [appId] The application ID.
 *
 * @member {array} [appPermissions] The application permissions.
 *
 * @member {boolean} [availableToOtherTenants] Whether the application is be
 * available to other tenants.
 *
 * @member {string} [displayName] The display name of the application.
 *
 * @member {array} [identifierUris] A collection of URIs for the application.
 *
 * @member {array} [replyUrls] A collection of reply URLs for the application.
 *
 * @member {string} [homepage] The home page of the application.
 *
 */
class Application {
  constructor() {
  }

  /**
   * Defines the metadata of Application
   *
   * @returns {object} metadata of Application
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Application',
      type: {
        name: 'Composite',
        className: 'Application',
        modelProperties: {
          objectId: {
            required: false,
            serializedName: 'objectId',
            type: {
              name: 'String'
            }
          },
          objectType: {
            required: false,
            serializedName: 'objectType',
            type: {
              name: 'String'
            }
          },
          appId: {
            required: false,
            serializedName: 'appId',
            type: {
              name: 'String'
            }
          },
          appPermissions: {
            required: false,
            serializedName: 'appPermissions',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          availableToOtherTenants: {
            required: false,
            serializedName: 'availableToOtherTenants',
            type: {
              name: 'Boolean'
            }
          },
          displayName: {
            required: false,
            serializedName: 'displayName',
            type: {
              name: 'String'
            }
          },
          identifierUris: {
            required: false,
            serializedName: 'identifierUris',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          replyUrls: {
            required: false,
            serializedName: 'replyUrls',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          homepage: {
            required: false,
            serializedName: 'homepage',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Application;
