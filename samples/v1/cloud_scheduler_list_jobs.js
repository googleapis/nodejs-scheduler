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

// DO NOT EDIT! This is a generated sample ("RequestAsyncPagedAll",  "cloud_scheduler_list_jobs")

// sample-metadata:
//   title: List Jobs
//   usage: node samples/v1/cloud_scheduler_list_jobs.js [--project_id "PROJECT_ID"] [--location_id "LOCATION_ID"]

'use strict';

function main(projectId = 'PROJECT_ID', locationId = 'LOCATION_ID') {
  // [START cloud_scheduler_list_jobs]
  /**
  * TODO(developer): Uncomment these variables before running the sample.
  */
  // const projectId = 'PROJECT_ID';
  // const locationId = 'LOCATION_ID';

  // Imports the client library
  const {CloudSchedulerClient} = require('@google-cloud/scheduler').v1;

  // Instantiates a client
  const cloudSchedulerClient = new CloudSchedulerClient();

  async function sampleListJobs() {
    const formattedParent = cloudSchedulerClient.locationPath(projectId, locationId);

    // Run request
    const [response] = await cloudSchedulerClient.listJobs({parent: formattedParent});

    // Iterate over paged response (uses auto pagination by default)
    for (const resource of response) {
      console.log(`Job name: ${resource.name}`);
    }
  }
  sampleListJobs();
  // [END cloud_scheduler_list_jobs]
}

const argv = require(`yargs`)
  .option('project_id', {
    default: 'PROJECT_ID',
    string: true
  })
  .option('location_id', {
    default: 'LOCATION_ID',
    string: true
  })
  .argv;

main(argv.project_id, argv.location_id);