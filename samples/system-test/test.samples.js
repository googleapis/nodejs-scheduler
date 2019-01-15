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

const path = require('path');
const {assert} = require('chai');
const execa = require('execa');

// const createJob = require('../createJob');
// const deleteJob = require('../deleteJob');

const PROJECT_ID = process.env.GCLOUD_PROJECT;
const LOCATION_ID = process.env.LOCATION_ID || 'us-central1';
const SERVICE_ID = 'my-service';
const cwd = path.join(__dirname, '..');
const exec = cmd => execa.shell(cmd, {cwd});

describe('Cloud Scheduler Sample Tests', () => {
  it('should create and delete a scheduler job', async () => {
    var {stdout} = await exec(
      `node createJob.js ${PROJECT_ID} ${LOCATION_ID} ${SERVICE_ID}`
    )
    assert.match(stdout, /Created job/);

    const jobName = stdout.split('/').pop();
    var {stdout} = await exec(
      `node deleteJob.js ${PROJECT_ID} ${LOCATION_ID} ${jobName}`
    )
    assert.match(stdout, /Job deleted/);
  });
});
