# Reusable GitHub Actions

This repository contains reusable GitHub Actions that can be used across multiple repositories.

## Available Actions

### Dependencies Management
- `actions/update-dependencies` - Updates GitHub Actions versions
- `actions/update-node` - Updates Node.js packages
- `actions/update-python` - Updates Python dependencies
- `actions/renovate` - Runs Renovate for dependency updates

### Docker Management
- `actions/docker-publish` - Builds and publishes Docker images

### Code Quality
- `actions/lint` - Runs linting checks
- `actions/black` - Runs Python Black formatter

### Release Management
- `actions/release-drafter` - Drafts release notes

### Pull Request Management
- `actions/auto-merge` - Automatically merges pull requests
- `actions/dependabot-merge` - Handles Dependabot pull requests

## Usage

### For Organization Repositories
To use these actions in your organization's repository, add the following to your workflow file:

```yaml
jobs:
  my-job:
    uses: your-org/reusable-actions/.github/workflows/action-name.yml@main
```

### For Personal Repositories
To use these actions in your personal repository, add the following to your workflow file:

```yaml
jobs:
  my-job:
    uses: your-username/reusable-actions/.github/workflows/action-name.yml@main
```

### Using Private Reusable Actions
If your reusable actions repository is private, you'll need to:

1. Create a Personal Access Token (PAT) with `repo` scope
2. Add the PAT as a secret in the repository where you want to use the actions
3. Reference the secret in your workflow file:

```yaml
jobs:
  my-job:
    uses: your-username/reusable-actions/.github/workflows/action-name.yml@main
    secrets:
      PAT: ${{ secrets.REUSABLE_ACTIONS_PAT }}
```

Then in your reusable action workflow file, add:

```yaml
permissions:
  contents: read
  actions: read

jobs:
  my-job:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4.2.2
        with:
          token: ${{ secrets.PAT }}
```

### Required Secrets
Make sure to set up the following secrets in your repository:
- `GH_TOKEN` - GitHub token with appropriate permissions
- `GH_PAT` - GitHub Personal Access Token
- `GH_USERNAME` - Your GitHub username
- `GH_ORG` - Your organization name (if using in org context)
- `REUSABLE_ACTIONS_PAT` - Personal Access Token with repo scope (if using private reusable actions)

## Configuration

Each action can be configured using inputs. See the individual action files for available configuration options.

## Contributing

1. Fork this repository
2. Create a new branch
3. Make your changes
4. Submit a pull request
