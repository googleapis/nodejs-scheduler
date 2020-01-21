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

// DO NOT EDIT! This is a generated sample ("Request",  "cloud_scheduler_create_job")

// sample-metadata:
//   title: Create Job
//   description: Create a job that posts to /log_payload on an App Engine service.
//   usage: node samples/v1/cloud_scheduler_create_job.js [--project_id "PROJECT_ID"] [--location_id "LOCATION_ID"] [--service_id "my-service"]

'use strict';

function main(projectId = 'PROJECT_ID', locationId = 'LOCATION_ID', serviceId = 'my-service') {
  // [START cloud_scheduler_create_job]
  /**
  * TODO(developer): Uncomment these variables before running the sample.
  */
  // const projectId = 'PROJECT_ID';
  // const locationId = 'LOCATION_ID';
  // const serviceId = 'my-service';

  // Imports the client library
  const {CloudSchedulerClient} = require('@google-cloud/scheduler').v1;

  // Instantiates a client
  const cloudSchedulerClient = new CloudSchedulerClient();

  async function sampleCreateJob() {
    const formattedParent = cloudSchedulerClient.locationPath(projectId, locationId);
    const httpMethod = 'POST';
    const relativeUri = '/log_payload';
    const body = Buffer.from('Hello World');
    const appEngineRouting = {
      service: serviceId,
    };
    const appEngineHttpTarget = {
      httpMethod: httpMethod,
      relativeUri: relativeUri,
      body: body,
      appEngineRouting: appEngineRouting,
    };
    const timeZone = 'America/Los_Angeles';
    const schedule = '* * * * *';
    const job = {
      appEngineHttpTarget: appEngineHttpTarget,
      timeZone: timeZone,
      schedule: schedule,
    };

    // Construct request
    const request = {
      parent: formattedParent,
      job: job,
    };

    // Run request
    const [response] = await cloudSchedulerClient.createJob(request);

    console.log(`Created job: ${response.name}`);
  }
  sampleCreateJob();
  // [END cloud_scheduler_create_job]
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
  .option('service_id', {
    default: 'my-service',
    string: true
  })
  .argv;

main(argv.project_id, argv.location_id, argv.service_id);