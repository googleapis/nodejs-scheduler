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

// DO NOT EDIT! This is a generated sample ("RequestAsyncPagedAll",  "listjobs")

// sample-metadata:
//   title:
//   usage: node samples/v1/listjobs.js

'use strict';

function main() {

  // Imports the client library
  const {CloudSchedulerClient} = require('@google-cloud/scheduler').v1;

  // Instantiates a client
  const cloudSchedulerClient = new CloudSchedulerClient();

  async function sampleListJobs() {
    const formattedParent = cloudSchedulerClient.locationPath('[PROJECT]', '[LOCATION]');

    // Run request
    const [response] = await cloudSchedulerClient.listJobs({parent: formattedParent});

    // Iterate over paged response (uses auto pagination by default)
    for (const resource of response) {
      console.log(resource);
    }
  }
  sampleListJobs();
}

main();