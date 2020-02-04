// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

import * as protosTypes from '../protos/protos';
import * as assert from 'assert';
import {describe, it} from 'mocha';
const cloudschedulerModule = require('../src');

const FAKE_STATUS_CODE = 1;
class FakeError {
  name: string;
  message: string;
  code: number;
  constructor(n: number) {
    this.name = 'fakeName';
    this.message = 'fake message';
    this.code = n;
  }
}
const error = new FakeError(FAKE_STATUS_CODE);
export interface Callback {
  (err: FakeError | null, response?: {} | null): void;
}

export class Operation {
  constructor() {}
  promise() {}
}
function mockSimpleGrpcMethod(
  expectedRequest: {},
  response: {} | null,
  error: FakeError | null
) {
  return (actualRequest: {}, options: {}, callback: Callback) => {
    assert.deepStrictEqual(actualRequest, expectedRequest);
    if (error) {
      callback(error);
    } else if (response) {
      callback(null, response);
    } else {
      callback(null);
    }
  };
}
describe('v1beta1.CloudSchedulerClient', () => {
  it('has servicePath', () => {
    const servicePath =
      cloudschedulerModule.v1beta1.CloudSchedulerClient.servicePath;
    assert(servicePath);
  });
  it('has apiEndpoint', () => {
    const apiEndpoint =
      cloudschedulerModule.v1beta1.CloudSchedulerClient.apiEndpoint;
    assert(apiEndpoint);
  });
  it('has port', () => {
    const port = cloudschedulerModule.v1beta1.CloudSchedulerClient.port;
    assert(port);
    assert(typeof port === 'number');
  });
  it('should create a client with no option', () => {
    const client = new cloudschedulerModule.v1beta1.CloudSchedulerClient();
    assert(client);
  });
  it('should create a client with gRPC fallback', () => {
    const client = new cloudschedulerModule.v1beta1.CloudSchedulerClient({
      fallback: true,
    });
    assert(client);
  });
  describe('getJob', () => {
    it('invokes getJob without error', done => {
      const client = new cloudschedulerModule.v1beta1.CloudSchedulerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.scheduler.v1beta1.IGetJobRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.getJob = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.getJob(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getJob with error', done => {
      const client = new cloudschedulerModule.v1beta1.CloudSchedulerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.scheduler.v1beta1.IGetJobRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.getJob = mockSimpleGrpcMethod(request, null, error);
      client.getJob(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('createJob', () => {
    it('invokes createJob without error', done => {
      const client = new cloudschedulerModule.v1beta1.CloudSchedulerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.scheduler.v1beta1.ICreateJobRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.createJob = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.createJob(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createJob with error', done => {
      const client = new cloudschedulerModule.v1beta1.CloudSchedulerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.scheduler.v1beta1.ICreateJobRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.createJob = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.createJob(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('updateJob', () => {
    it('invokes updateJob without error', done => {
      const client = new cloudschedulerModule.v1beta1.CloudSchedulerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.scheduler.v1beta1.IUpdateJobRequest = {};
      request.job = {};
      request.job.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.updateJob = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.updateJob(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateJob with error', done => {
      const client = new cloudschedulerModule.v1beta1.CloudSchedulerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.scheduler.v1beta1.IUpdateJobRequest = {};
      request.job = {};
      request.job.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.updateJob = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.updateJob(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('deleteJob', () => {
    it('invokes deleteJob without error', done => {
      const client = new cloudschedulerModule.v1beta1.CloudSchedulerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.scheduler.v1beta1.IDeleteJobRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.deleteJob = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.deleteJob(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes deleteJob with error', done => {
      const client = new cloudschedulerModule.v1beta1.CloudSchedulerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.scheduler.v1beta1.IDeleteJobRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.deleteJob = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.deleteJob(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('pauseJob', () => {
    it('invokes pauseJob without error', done => {
      const client = new cloudschedulerModule.v1beta1.CloudSchedulerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.scheduler.v1beta1.IPauseJobRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.pauseJob = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.pauseJob(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes pauseJob with error', done => {
      const client = new cloudschedulerModule.v1beta1.CloudSchedulerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.scheduler.v1beta1.IPauseJobRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.pauseJob = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.pauseJob(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('resumeJob', () => {
    it('invokes resumeJob without error', done => {
      const client = new cloudschedulerModule.v1beta1.CloudSchedulerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.scheduler.v1beta1.IResumeJobRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.resumeJob = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.resumeJob(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes resumeJob with error', done => {
      const client = new cloudschedulerModule.v1beta1.CloudSchedulerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.scheduler.v1beta1.IResumeJobRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.resumeJob = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.resumeJob(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('runJob', () => {
    it('invokes runJob without error', done => {
      const client = new cloudschedulerModule.v1beta1.CloudSchedulerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.scheduler.v1beta1.IRunJobRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.runJob = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.runJob(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes runJob with error', done => {
      const client = new cloudschedulerModule.v1beta1.CloudSchedulerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.scheduler.v1beta1.IRunJobRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.runJob = mockSimpleGrpcMethod(request, null, error);
      client.runJob(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('listJobs', () => {
    it('invokes listJobs without error', done => {
      const client = new cloudschedulerModule.v1beta1.CloudSchedulerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.scheduler.v1beta1.IListJobsRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock Grpc layer
      client._innerApiCalls.listJobs = (
        actualRequest: {},
        options: {},
        callback: Callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse);
      };
      client.listJobs(request, (err: FakeError, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });
  });
  describe('listJobsStream', () => {
    it('invokes listJobsStream without error', done => {
      const client = new cloudschedulerModule.v1beta1.CloudSchedulerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.scheduler.v1beta1.IListJobsRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {response: 'data'};
      // Mock Grpc layer
      client._innerApiCalls.listJobs = (
        actualRequest: {},
        options: {},
        callback: Callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse);
      };
      const stream = client
        .listJobsStream(request, {})
        .on('data', (response: {}) => {
          assert.deepStrictEqual(response, expectedResponse);
          done();
        })
        .on('error', (err: FakeError) => {
          done(err);
        });
      stream.write(expectedResponse);
    });
  });
});
