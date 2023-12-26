// cypress/support/{scheme}.js, where {scheme} defaults to e2e
// for Cypress v12.17.3 and older
const compareSnapshotCommand = require('cypress-image-diff-js');
compareSnapshotCommand();