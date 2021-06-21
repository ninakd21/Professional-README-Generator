// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.confirmLicense === 'Apache 2.0') {
    return `![APM](https://img.shields.io/apm/l/npm)  `
  } 
  else if (data.license === 'GNU GPLv3') {
    return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0) `
  }
  else if (data.license === 'MIT') {
    return `![NPM](https://img.shields.io/npm/l/inquirer) `
  }
  else if (data.license === 'ISC') {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC) `
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (data.confirmLicense === 'Apache 2.0') {
    return `![APM](https://img.shields.io/apm/l/npm)`
  }
  else if (data.license === 'GNU GPLv3') {
    return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
  }
  else if (data.license === 'MIT') {
    return ` [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if (data.license === 'ISC') {
    return `http://github.com 
    [Youtube] `
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data.confirmLicense === 0) {
    return ` `;
  }
  else {
    return `License 
    ${renderLicenseLink(data)} `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Test](#test)
    * [Questions](#questions)

## Installation

  Steps for installation
 
  ${data.instalattionInstructions}


  ${data.usageInformation}

## Usage

  Example: Answer the command line prompts

    ![${data.usageAltImage}](${data.usageImage})
  
    Finished Product:
  
    ![Finished README.md Example](Develop/assets/screenShot.png)

    For a full video of real life application please refer to this link: http://github.com 
    [Youtube](http://github.com)

  
## ${renderLicenseSection(data)}

## Badges

${renderLicenseBadge(data)}
  
  
  ## Contributing

  ${data.name} 

  ![Github](${data.githubLink})

  ## Tests

  ${data.tests}

  ## Questions

  Contact Me:
  -Email: ${data.email}

  -Github: ${data.githubName} Link: ![Github](${data.githubLink})
`;
}

module.exports = generateMarkdown;
