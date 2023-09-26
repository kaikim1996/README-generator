// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
      const licenseBadges = {
        "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
        "Apache 2.0": "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
        "BSD 2": "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
        "BSD 3": "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
        "Mozzila Public Licence": "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    };

    // Check if the provided license name is in the dictionary
    if (license in licenseBadges) {
        return licenseBadges[license];
    } else {
        return "";
    }
}


//Function that returns the license section of README
function returnLicenseSection(license) {
  
  // If no license, return an empty string
  if (!license) {
    return '';
  }

  const licenseSection = `

This project is licensed under the ${license} License.
`;

  return licenseSection;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


## Table Of Contents
                             
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)
- [Contact](#contact)

---

## Description

${data.description}

---

## Installation

To install the required dependencies, run the following code: 

\`\`\`bash
${data.installation}
\`\`\`

---

## Usage

${data.usage}

---

## License

${returnLicenseSection(data.license)}

[${renderLicenseBadge(data.license)}]

---

## Contributions

${data.contributions}

---


## Contact 

Please connect with me using the following to report any issues: 

Github: [${data.username}](https://github.com/${data.username}).
Email: [${data.email}](mailto:${data.email}).

`;
}


module.exports = generateMarkdown;

