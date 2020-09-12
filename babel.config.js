module.exports = api => {
  const isTest = api.env("test");
  if (isTest) {
    return {
      presets: [
        [
          "@babel/env",
          {
            targets: {
              node: "current"
            }
          }
        ]
      ]
    };
  } else {
    return {
      presets: [
        [
          "@babel/env",
          {
            debug: true,
            targets: {
              ie: 9,
              browsers: "cover 99.5%",
              esmodules: false
            },
            loose: false,
            modules: false,
            // useBuiltIns: "usage",
            corejs: 3
            // forceAllTransforms: true
          }
        ]
      ],
      plugins: [
        // "@babel/plugin-external-helpers"
      ]
    };
  }
};
