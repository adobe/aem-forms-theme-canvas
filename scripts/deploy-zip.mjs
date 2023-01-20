/*
 *
 *  * Copyright 2023 Adobe, Inc.
 *  *
 *  * Your access and use of this software is governed by the Adobe Customer Feedback Program Terms and Conditions or other Beta License Agreement signed by your employer and Adobe, Inc.. This software is NOT open source and may not be used without one of the foregoing licenses. Even with a foregoing license, your access and use of this file is limited to the earlier of (a) 180 days, (b) general availability of the product(s) which utilize this software (i.e. AEM Forms), (c) January 1, 2023, (d) Adobe providing notice to you that you may no longer use the software or that your beta trial has otherwise ended.
 *  *
 *  * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL ADOBE NOR ITS THIRD PARTY PROVIDERS AND PARTNERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease | from-git]
 *
 */

import {execute} from "./utils.mjs";
import "version/lib/version.js";

const VERSION_TYPE = 'patch';

async function bumpVersion() {
    await execute(`npm version ${VERSION_TYPE} --no-git-tag-version`);
    await execute(`git add package.json`);
    await execute(`git commit -m "version-bumped"`);
    await execute(`git push origin`);
}

async function build() {
    await execute(`npm run build`);
}

async function archiveDist() {
    console.log('creating zip');
    await execute(`npm run create-zip`)
}

async function publish() {
    await execute(`cp package.json dist/`) // copy command will not work in Windows OS
    await execute(`npm publish ./dist`);
}

(async function () {
    console.log(`Bumping version type: ${VERSION_TYPE}`);
    await bumpVersion();
    console.log('version bumped');
    await build();
    console.log('build complete');
    await archiveDist();
    console.log('dist archived');
    await publish();
})();

