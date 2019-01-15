// Copyright 2018 Google LLC
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

'use strict';

const assert = require('assert');

const createJob = require('../createJob');
const deleteJob = require('../deleteJob');

const PROJECT_ID = process.env.GCLOUD_PROJECT;
const LOCATION_ID = process.env.LOCATION_ID || 'us-central1';
const SERVICE_ID = 'my-service';

describe('Cloud Scheduler Sample Tests', () => {

  it('should create and delete a scheduler job', async () => {
    const create_output = await createJob(PROJECT_ID, LOCATION_ID, SERVICE_ID);
    assert.ok(create_output.includes('projects/'));

    const jobName = create_output.split('/').pop();
    const delete_output = await deleteJob(PROJECT_ID, LOCATION_ID, jobName);
    assert.ok(delete_output.includes('projects/'));
  });
  
});
