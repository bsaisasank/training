module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-min-word-count': [2, 'always', 3], // Enforce at least 3 words in commit message
  },
  plugins: [
    {
      rules: {
        'subject-min-word-count': ({ subject }, _, minWords) => {
          const wordCount = subject ? subject.trim().split(/\s+/).length : 0;
          return [
            wordCount >= minWords,
            `Commit message must have at least ${minWords} words. Found ${wordCount}.`,
          ];
        },
      },
    },
  ],
};
