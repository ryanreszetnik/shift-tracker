module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          extensions: [
            ".js",
            ".jsx",
            ".ts",
            ".tsx",
            ".android.js",
            ".android.tsx",
            ".ios.js",
            ".ios.tsx",
          ],
          root: ["."],
          alias: {
            "@navParams": "./src/navigation/types/",
            "@features": "./src/features/",
            "@components": "./src/components/",
            "@hooks": "./src/hooks/",
            "@constants": "./src/constants/",
            "@utils": "./src/utils/",
            "@state": "./src/state/",
            "@types": "./src/constants/types.ts",
            "@api": "./src/endpoints/index.ts",
          },
        },
      ],
    ],
  };
};
