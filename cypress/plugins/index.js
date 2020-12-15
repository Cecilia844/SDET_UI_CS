/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */

const fs = require('fs-extra')
const path = require('path')

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  const enviroment = config.env.environment || 'local';
  console.log('environment:', enviroment);
  const configForEnviroment = getConfigurationByFile(enviroment);
    return (configForEnviroment)
      ? configForEnviroment
      : config;
};

function getConfigurationByFile (environment) {
  return fs.readJson(path.join(__dirname, '../', `config/cypress.${environment}.json`));
}
