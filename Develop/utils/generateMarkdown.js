// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var licbadge;
  if (license === 'GNU GPLv3') {
    licbadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  }
  else if (license === 'Mozilla Public License 2.0') {
    licbadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  }
  else if (license === 'Apache License 2.0') {
    licbadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
  else if (license === 'MIT License') {
    licbadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  else {
    licbadge = "";
  }
  return licbadge;
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var liclink;
  if (license === 'GNU GPLv3') {
    liclink = "https://www.gnu.org/licenses/gpl-3.0";
  }
  else if (license === 'Mozilla Public License 2.0') {
    liclink = "https://opensource.org/licenses/MPL-2.0";
  }
  else if (license === 'Apache License 2.0') {
    liclink = "https://opensource.org/licenses/Apache-2.0";
  }
  else if (license === 'MIT License') {
    liclink = "https://opensource.org/licenses/MIT";
  }
  else {
    liclink = "";
  }
  return liclink;
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  var licsec;
  if (license === 'GNU GPLv3') {
    licsec = "Licensed under GNU GPLv3";
  }
  else if (license === 'Mozilla Public License 2.0') {
    licsec = "Licensed under Mozilla Public License 2.0";
  }
  else if (license === 'Apache License 2.0') {
    licsec = "Licensed under Apache License 2.0";
  }
  else if (license === 'MIT License') {
    licsec = "Licensed under MIT License";
  }
  else {
    licsec = "";
  }
  return licsec;
}

//Function to return a string with the installation steps
function installSteps(install){
  var steps = install.split(',');
  var stepsStr = "";
  var stepNum;
  for (let i= 0; i<steps.length; i++){
    stepNum = i+1;
    stepsStr += stepNum+": "+ steps[i]+"<br />";
  }
  return stepsStr;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Credits](#credits)
* [License](#license)
* [Questions](#questions)

## Installation
${installSteps(data.install)}

## Usage
${data.usage}

## Contributing
${data.guidelines}

## Tests
${data.test}

## Credits

Readme guide: https://github.com/coding-boot-camp/potential-enigma/blob/main/readme-guide.md <br />
ChooseALicense: https://choosealicense.com/<br />
Markdown License Badges: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

## License
${renderLicenseLink(data.license)} <br />
${renderLicenseSection(data.license)}

## Questions
https://github.com/${data.gituser} <br />
If you have any further questions, you can reach me at: <br />
${data.email}
`;
}

module.exports = generateMarkdown;
