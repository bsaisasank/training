#!/bin/bash

# Get the current branch name
BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD)

# Define allowed branch name patterns
FEATURE_REGEX="^feature/"
BUGFIX_REGEX="^bugfix/"
HOTFIX_REGEX="^hotfix/"
RELEASE_REGEX="^release/"
MAIN_DEVELOP_REGEX="^(main|develop)$"

# Check if the branch name follows any of the patterns
if [[ ! "$BRANCH_NAME" =~ $MAIN_DEVELOP_REGEX ]] && \
   [[ ! "$BRANCH_NAME" =~ $FEATURE_REGEX ]] && \
   [[ ! "$BRANCH_NAME" =~ $BUGFIX_REGEX ]] && \
   [[ ! "$BRANCH_NAME" =~ $HOTFIX_REGEX ]] && \
   [[ ! "$BRANCH_NAME" =~ $RELEASE_REGEX ]]; then
    echo "❌ ERROR: Invalid branch name '$BRANCH_NAME'."
    echo "🔹 Use one of the following formats:"
    echo "   - feature/{short-description} (e.g., feature/user-profile)"
    echo "   - bugfix/{short-description} (e.g., bugfix/login-issue)"
    echo "   - hotfix/{short-description} (e.g., hotfix/critical-bug)"
    echo "   - release/{version} (e.g., release/1.2.0)"
    echo "   - main or develop"
    exit 1
fi

echo "✅ Branch name is valid: $BRANCH_NAME"
exit 0
