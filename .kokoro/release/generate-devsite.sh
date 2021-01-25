#!/bin/bash

# Copyright 2021 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# Create files to be uploaded to devsite. 
# When running locally, run `docfx --serve` in ./yaml/ after this script

mkdir ./etc

npm install
npm run api-extractor
npm run api-documenter

NAME=$(ls temp | sed s/.api.json*//)

mkdir ./_devsite
mkdir ./_devsite/$NAME
cp ./yaml/$NAME/* ./_devsite/$NAME

# Clean up TOC
# Delete SharePoint item, see https://github.com/microsoft/rushstack/issues/1229
sed -i -e '1,3d' ./yaml/toc.yml
sed -i -e 's/^    //' ./yaml/toc.yml
# Delete interfaces from TOC (name and uid)
sed -i -e '/name: I[A-Z]/{N;d;}' ./yaml/toc.yml
sed -i -e '/^ *\@google-cloud.*:interface/d' ./yaml/toc.yml

sed -i -e '4i\
\ \ \ \ summary: Dialogflow.
' ./yaml/toc.yml

sed -i -e '5i\
\ \ \ \ description: Client library for Dialogflow.
' ./yaml/toc.yml

cp ./yaml/toc.yml ./_devsite/toc.yml
# cp ./quickstart.yml ./_devsite/index.yml
cp ./yaml/$NAME.yml ./_devsite/$NAME.yml
