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
 * Initializes a new instance of the Sku class.
 * @constructor
 * Sku of the Namespace.
 *
 */
class Sku {
  constructor() {
  }

  /**
   * Defines the metadata of Sku
   *
   * @returns {object} metadata of Sku
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Sku',
      type: {
        name: 'Composite',
        className: 'Sku',
        modelProperties: {
          name: {
            required: true,
            isConstant: true,
            serializedName: 'name',
            defaultValue: 'Standard',
            type: {
              name: 'String'
            }
          },
          tier: {
            required: true,
            isConstant: true,
            serializedName: 'tier',
            defaultValue: 'Standard',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Sku;