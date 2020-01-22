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

// DO NOT EDIT! This is a generated sample ("Request",  "scheduler_updatejob")

// sample-metadata:
//   title:
//   usage: node samples/v1/scheduler_updatejob.js

'use strict';

function main() {
  // [START scheduler_updatejob]

  // Imports the client library
  const {CloudSchedulerClient} = require('@google-cloud/scheduler').v1;

  // Instantiates a client
  const cloudSchedulerClient = new CloudSchedulerClient();

  async function sampleUpdateJob() {
    const job = {};
    const updateMask = {};

    // Construct request
    const request = {
      job: job,
      updateMask: updateMask,
    };

    // Run request
    const [response] = await cloudSchedulerClient.updateJob(request);

    console.log(response);
  }
  sampleUpdateJob();
  // [END scheduler_updatejob]
}

main();