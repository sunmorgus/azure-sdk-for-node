/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the StatefulCreateServiceGroupDescription class.
 * @constructor
 * @member {number} [targetReplicaSetSize]
 * 
 * @member {number} [minReplicaSetSize]
 * 
 * @member {boolean} [hasPersistedState]
 * 
 * @member {number} [replicaRestartWaitDurationSeconds]
 * 
 * @member {number} [quorumLossWaitDurationSeconds]
 * 
 * @member {number} [standByReplicaKeepDurationSeconds]
 * 
 * @member {number} [defaultMoveCost]
 * 
 * @member {boolean} [isDefaultMoveCostSpecified]
 * 
 */
function StatefulCreateServiceGroupDescription() {
  StatefulCreateServiceGroupDescription['super_'].call(this);
}

util.inherits(StatefulCreateServiceGroupDescription, models['ServiceGroupDescription']);

/**
 * Defines the metadata of StatefulCreateServiceGroupDescription
 *
 * @returns {object} metadata of StatefulCreateServiceGroupDescription
 *
 */
StatefulCreateServiceGroupDescription.prototype.mapper = function () {
  return {
    required: false,
    serializedName: '2',
    type: {
      name: 'Composite',
      className: 'StatefulCreateServiceGroupDescription',
      modelProperties: {
        applicationName: {
          required: false,
          serializedName: 'ApplicationName',
          type: {
            name: 'String'
          }
        },
        serviceName: {
          required: false,
          serializedName: 'ServiceName',
          type: {
            name: 'String'
          }
        },
        serviceTypeName: {
          required: false,
          serializedName: 'ServiceTypeName',
          type: {
            name: 'String'
          }
        },
        partitionDescription: {
          required: false,
          serializedName: 'PartitionDescription',
          type: {
            name: 'Composite',
            className: 'PartitionDescription'
          }
        },
        placementConstraints: {
          required: false,
          serializedName: 'PlacementConstraints',
          type: {
            name: 'String'
          }
        },
        correlationScheme: {
          required: false,
          serializedName: 'CorrelationScheme',
          type: {
            name: 'Composite',
            className: 'ServiceCorrelationDescription'
          }
        },
        serviceLoadMetrics: {
          required: false,
          serializedName: 'ServiceLoadMetrics',
          type: {
            name: 'Composite',
            className: 'ServiceCorrelationDescription'
          }
        },
        servicePlacementPolicies: {
          required: false,
          serializedName: 'ServicePlacementPolicies',
          type: {
            name: 'Composite',
            className: 'ServiceCorrelationDescription'
          }
        },
        flags: {
          required: false,
          serializedName: 'Flags',
          type: {
            name: 'Number'
          }
        },
        serviceGroupMemberDescription: {
          required: false,
          serializedName: 'ServiceGroupMemberDescription',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'ServiceGroupMemberDescriptionElementType',
                type: {
                  name: 'Composite',
                  className: 'ServiceGroupMemberDescription'
                }
            }
          }
        },
        ServiceKind: {
          required: true,
          serializedName: 'ServiceKind',
          type: {
            name: 'String'
          }
        },
        targetReplicaSetSize: {
          required: false,
          serializedName: 'TargetReplicaSetSize',
          type: {
            name: 'Number'
          }
        },
        minReplicaSetSize: {
          required: false,
          serializedName: 'MinReplicaSetSize',
          type: {
            name: 'Number'
          }
        },
        hasPersistedState: {
          required: false,
          serializedName: 'HasPersistedState',
          type: {
            name: 'Boolean'
          }
        },
        replicaRestartWaitDurationSeconds: {
          required: false,
          serializedName: 'ReplicaRestartWaitDurationSeconds',
          type: {
            name: 'Number'
          }
        },
        quorumLossWaitDurationSeconds: {
          required: false,
          serializedName: 'QuorumLossWaitDurationSeconds',
          type: {
            name: 'Number'
          }
        },
        standByReplicaKeepDurationSeconds: {
          required: false,
          serializedName: 'StandByReplicaKeepDurationSeconds',
          type: {
            name: 'Number'
          }
        },
        defaultMoveCost: {
          required: false,
          serializedName: 'DefaultMoveCost',
          type: {
            name: 'Number'
          }
        },
        isDefaultMoveCostSpecified: {
          required: false,
          serializedName: 'IsDefaultMoveCostSpecified',
          type: {
            name: 'Boolean'
          }
        }
      }
    }
  };
};

module.exports = StatefulCreateServiceGroupDescription;