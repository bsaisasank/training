module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      project: "./tsconfig.json",
    },
    env: {
      browser: true,
      node: true,
      es6: true,
    },
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "plugin:jsx-a11y/recommended",
      "plugin:import/errors",
      "plugin:import/warnings",
      "plugin:import/typescript",
      "plugin:prettier/recommended",
    ],
    plugins: ["@typescript-eslint", "react", "react-hooks", "jsx-a11y", "import", "prettier"],
    rules: {
      // Prettier Formatting
      "prettier/prettier": ["error"],
  
      // Code Quality
      "no-console": "warn",
      "no-debugger": "error",
      "no-multiple-empty-lines": ["error", { max: 1 }],
      "newline-before-return": "error",
      "eqeqeq": ["error", "always"],
      "curly": ["error", "all"],
  
      // Naming Conventions
      "@typescript-eslint/naming-convention": [
        "error",
        // Enforce camelCase for variables
        {
          "selector": "variable",
          "format": ["camelCase"],
          "leadingUnderscore": "allow",
          "trailingUnderscore": "forbid",
        },
        // Enforce camelCase for function names
        {
          "selector": "function",
          "format": ["camelCase"],
        },
        // Enforce PascalCase for classes
        {
          "selector": "class",
          "format": ["PascalCase"],
        },
        // Enforce PascalCase with "I" prefix for interfaces
        {
          "selector": "interface",
          "format": ["PascalCase"],
          "prefix": ["I"],
        },
        // Enforce PascalCase for type aliases
        {
          "selector": "typeAlias",
          "format": ["PascalCase"],
        },
        // Enforce PascalCase for enums
        {
          "selector": "enum",
          "format": ["PascalCase"],
        },
        // Enforce UPPER_CASE for enum members
        {
          "selector": "enumMember",
          "format": ["UPPER_CASE"],
        },
        // Enforce UPPER_CASE for constants
        {
          "selector": "variable",
          "modifiers": ["const"],
          "format": ["UPPER_CASE"],
        },
        // Enforce PascalCase for type parameters (generics)
        {
          "selector": "typeParameter",
          "format": ["PascalCase"],
          "prefix": ["T"],
        },
        // Enforce camelCase for properties but allow UPPER_CASE for constants
        {
          "selector": "property",
          "format": ["camelCase", "UPPER_CASE"],
        },
        // Enforce camelCase for parameters
        {
          "selector": "parameter",
          "format": ["camelCase"],
        },
        // Allow snake_case for API response properties
        {
          "selector": "objectLiteralProperty",
          "format": ["camelCase", "snake_case"],
        },
      ],
  
      // Import Rules
      "import/order": [
        "error",
        {
          "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
          "newlines-between": "always",
          "alphabetize": { order: "asc", caseInsensitive: true },
        },
      ],
  
      // React Specific
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
  
      // Accessibility
      "jsx-a11y/anchor-is-valid": "warn",
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
        typescript: {},
      },
    },
    overrides: [
      {
        files: ["*.ts", "*.tsx"],
        rules: {
          "@typescript-eslint/explicit-module-boundary-types": "off",
        },
      },
    ],
  };
  