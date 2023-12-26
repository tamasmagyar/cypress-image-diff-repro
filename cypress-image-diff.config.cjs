const config = {
  ROOT_DIR: '',
  
  FAILURE_THRESHOLD: 0.07,
  COMPARISON_OPTIONS: { threshold: 0.2 },
  RETRY_OPTIONS: {
    log: true,
    limit: 3,
    timeout: 1000,
    delay: 1000
  },
  JSON_REPORT: {
    OVERWRITE: true,
  }
};
module.exports = config;
