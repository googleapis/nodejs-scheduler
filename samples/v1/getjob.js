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

// DO NOT EDIT! This is a generated sample ("Request",  "getjob")

// sample-metadata:
//   title:
//   usage: node samples/v1/getjob.js

'use strict';

function main() {

  // Imports the client library
  const {CloudSchedulerClient} = require('@google-cloud/scheduler').v1;

  // Instantiates a client
  const cloudSchedulerClient = new CloudSchedulerClient();

  async function sampleGetJob() {
    const formattedName = cloudSchedulerClient.jobPath('[PROJECT]', '[LOCATION]', '[JOB]');

    // Run request
    const [response] = await cloudSchedulerClient.getJob({name: formattedName});

    console.log(response);
  }
  sampleGetJob();
}

main();