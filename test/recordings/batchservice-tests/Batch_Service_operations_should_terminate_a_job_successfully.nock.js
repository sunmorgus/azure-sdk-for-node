// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '00000000-0000-0000-0000-000000000000';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .post('/jobs/HelloWorldJobNodeSDKTest/terminate?api-version=2017-05-01.5.0')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 26 May 2017 16:59:36 GMT',
  etag: '0x8D4A458970D086C',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'c8892ae1-abf1-456d-954b-c528bc35b3c3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://batchtestnodesdk.japaneast.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/terminate',
  date: 'Fri, 26 May 2017 16:59:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .post('/jobs/HelloWorldJobNodeSDKTest/terminate?api-version=2017-05-01.5.0')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 26 May 2017 16:59:36 GMT',
  etag: '0x8D4A458970D086C',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'c8892ae1-abf1-456d-954b-c528bc35b3c3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://batchtestnodesdk.japaneast.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/terminate',
  date: 'Fri, 26 May 2017 16:59:34 GMT',
  connection: 'close' });
 return result; }]];