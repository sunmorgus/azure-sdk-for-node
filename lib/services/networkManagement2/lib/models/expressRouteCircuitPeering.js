/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator 1.0.1.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the ExpressRouteCircuitPeering class.
 * @constructor
 * Peering in an ExpressRouteCircuit resource.
 *
 * @member {string} [peeringType] The PeeringType. Possible values are:
 * 'AzurePublicPeering', 'AzurePrivatePeering', and 'MicrosoftPeering'.
 * Possible values include: 'AzurePublicPeering', 'AzurePrivatePeering',
 * 'MicrosoftPeering'
 *
 * @member {string} [state] The state of peering. Possible values are:
 * 'Disabled' and 'Enabled'. Possible values include: 'Disabled', 'Enabled'
 *
 * @member {number} [azureASN] The Azure ASN.
 *
 * @member {number} [peerASN] The peer ASN.
 *
 * @member {string} [primaryPeerAddressPrefix] The primary address prefix.
 *
 * @member {string} [secondaryPeerAddressPrefix] The secondary address prefix.
 *
 * @member {string} [primaryAzurePort] The primary port.
 *
 * @member {string} [secondaryAzurePort] The secondary port.
 *
 * @member {string} [sharedKey] The shared key.
 *
 * @member {number} [vlanId] The VLAN ID.
 *
 * @member {object} [microsoftPeeringConfig] The Microsoft peering
 * configuration.
 *
 * @member {array} [microsoftPeeringConfig.advertisedPublicPrefixes] The
 * reference of AdvertisedPublicPrefixes.
 *
 * @member {string} [microsoftPeeringConfig.advertisedPublicPrefixesState]
 * AdvertisedPublicPrefixState of the Peering resource. Possible values are
 * 'NotConfigured', 'Configuring', 'Configured', and 'ValidationNeeded'.
 * Possible values include: 'NotConfigured', 'Configuring', 'Configured',
 * 'ValidationNeeded'
 *
 * @member {number} [microsoftPeeringConfig.customerASN] The CustomerASN of the
 * peering.
 *
 * @member {string} [microsoftPeeringConfig.routingRegistryName] The
 * RoutingRegistryName of the configuration.
 *
 * @member {object} [stats] Gets peering stats.
 *
 * @member {number} [stats.primarybytesIn] Gets BytesIn of the peering.
 *
 * @member {number} [stats.primarybytesOut] Gets BytesOut of the peering.
 *
 * @member {number} [stats.secondarybytesIn] Gets BytesIn of the peering.
 *
 * @member {number} [stats.secondarybytesOut] Gets BytesOut of the peering.
 *
 * @member {string} [provisioningState] Gets the provisioning state of the
 * public IP resource. Possible values are: 'Updating', 'Deleting', and
 * 'Failed'.
 *
 * @member {string} [gatewayManagerEtag] The GatewayManager Etag.
 *
 * @member {string} [lastModifiedBy] Gets whether the provider or the customer
 * last modified the peering.
 *
 * @member {object} [routeFilter] The reference of the RouteFilter resource.
 *
 * @member {array} [routeFilter.rules] Collection of RouteFilterRules contained
 * within a route filter.
 *
 * @member {array} [routeFilter.peerings] A collection of references to express
 * route circuit peerings.
 *
 * @member {string} [routeFilter.provisioningState] The provisioning state of
 * the resource. Possible values are: 'Updating', 'Deleting', 'Succeeded' and
 * 'Failed'.
 *
 * @member {string} [routeFilter.etag] Gets a unique read-only string that
 * changes whenever the resource is updated.
 *
 * @member {string} [name] Gets name of the resource that is unique within a
 * resource group. This name can be used to access the resource.
 *
 * @member {string} [etag] A unique read-only string that changes whenever the
 * resource is updated.
 *
 */
class ExpressRouteCircuitPeering extends models['SubResource'] {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ExpressRouteCircuitPeering
   *
   * @returns {object} metadata of ExpressRouteCircuitPeering
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ExpressRouteCircuitPeering',
      type: {
        name: 'Composite',
        className: 'ExpressRouteCircuitPeering',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          peeringType: {
            required: false,
            serializedName: 'properties.peeringType',
            type: {
              name: 'String'
            }
          },
          state: {
            required: false,
            serializedName: 'properties.state',
            type: {
              name: 'String'
            }
          },
          azureASN: {
            required: false,
            serializedName: 'properties.azureASN',
            type: {
              name: 'Number'
            }
          },
          peerASN: {
            required: false,
            serializedName: 'properties.peerASN',
            type: {
              name: 'Number'
            }
          },
          primaryPeerAddressPrefix: {
            required: false,
            serializedName: 'properties.primaryPeerAddressPrefix',
            type: {
              name: 'String'
            }
          },
          secondaryPeerAddressPrefix: {
            required: false,
            serializedName: 'properties.secondaryPeerAddressPrefix',
            type: {
              name: 'String'
            }
          },
          primaryAzurePort: {
            required: false,
            serializedName: 'properties.primaryAzurePort',
            type: {
              name: 'String'
            }
          },
          secondaryAzurePort: {
            required: false,
            serializedName: 'properties.secondaryAzurePort',
            type: {
              name: 'String'
            }
          },
          sharedKey: {
            required: false,
            serializedName: 'properties.sharedKey',
            type: {
              name: 'String'
            }
          },
          vlanId: {
            required: false,
            serializedName: 'properties.vlanId',
            type: {
              name: 'Number'
            }
          },
          microsoftPeeringConfig: {
            required: false,
            serializedName: 'properties.microsoftPeeringConfig',
            type: {
              name: 'Composite',
              className: 'ExpressRouteCircuitPeeringConfig'
            }
          },
          stats: {
            required: false,
            serializedName: 'properties.stats',
            type: {
              name: 'Composite',
              className: 'ExpressRouteCircuitStats'
            }
          },
          provisioningState: {
            required: false,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'String'
            }
          },
          gatewayManagerEtag: {
            required: false,
            serializedName: 'properties.gatewayManagerEtag',
            type: {
              name: 'String'
            }
          },
          lastModifiedBy: {
            required: false,
            serializedName: 'properties.lastModifiedBy',
            type: {
              name: 'String'
            }
          },
          routeFilter: {
            required: false,
            serializedName: 'properties.routeFilter',
            type: {
              name: 'Composite',
              className: 'RouteFilter'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          etag: {
            required: false,
            readOnly: true,
            serializedName: 'etag',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ExpressRouteCircuitPeering;
