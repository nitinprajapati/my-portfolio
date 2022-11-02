const { override } = require('customize-cra');
var fs = require('fs');

// Import your eslint configuration here
const eslintConfig = require('./.eslintrc.json');

function writeFile(fileLocation, fileContent) {
  fs.writeFile(fileLocation, fileContent, function (err) {
    if (err) {
      return console.error('Error Occurered while writing file');
    }
    console.log('Written Succesfully');
  });
}

const useEslintConfig = (configRules) => (config) => {
  //   writeFile('.original', JSON.stringify(config));
  const updatedRules = config.module.rules.map((rule) => {
    // Only target rules that have defined a `useEslintrc` parameter in their options
    if (
      rule.use &&
      rule.use.some((use) => use.options && use.options.useEslintrc !== void 0)
    ) {
      const ruleUse = rule.use[0];
      const baseOptions = ruleUse.options;
      const baseConfig = baseOptions.baseConfig || {};
      const newOptions = {
        useEslintrc: false,
        ignore: true,
        baseConfig: { ...baseConfig, ...configRules },
      };
      ruleUse.options = newOptions;
      return rule;

      // Rule not using eslint. Do not modify.
    } else {
      return rule;
    }
  });

  config.module.rules = updatedRules;
  return config;
};

module.exports = override(useEslintConfig(eslintConfig));
