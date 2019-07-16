## Conventional commits

[official website](https://conventionalcommits.org).

A specification for adding human and machine readable meaning to commit messages :

- Automatic CHANGELOGs.
- Automatic semantic version bump (based on the types of commits landed).
- Communicate the nature of changes to teammates, the public, and other stakeholders.
- Trigger build and publish processes.
- Make it easier for people to contribute to your projects, by allowing them to explore a more structured commit history.

The message is structured as follows:

```
<type>([optional scope]): <description>

[optional body]

[optional footer]
```

The commit contains the following structural elements, to communicate intent to the consumers of your library:

- fix: a commit of the type fix patches a bug in your codebase (this correlates with PATCH in semantic versioning).

- feat: a commit of the type feat introduces a new feature to the codebase (this correlates with MINOR in semantic versioning).
- BREAKING CHANGE: a commit that has this text at the beginning of its optional body or footer section introduces a breaking API change (correlating with MAJOR in semantic versioning). A breaking change can be part of commits of any type. e.g., a fix:, feat: & chore: types would all be valid, in addition to any other type.
- Others: commit types other than fix: and feat: are allowed, for example @commitlint/config-conventional (based on the the Angular convention) recommends chore:, docs:, style:, refactor:, perf:, test:, and others. We also recommend improvement for commits that improve a current implementation without adding a new feature or fixing a bug. Notice these types are not mandated by the conventional commits specification, and have no implicit effect in semantic versioning (unless they include a BREAKING CHANGE, which is NOT recommended).
- A scope may be provided to a commit’s type, to provide additional contextual information and is contained within parenthesis, e.g., feat(parser): add ability to parse arrays.

### example

```
feat(lang): added polish language
```

### Commitizen

Launch commitizen CLI to commit your work. It will guide you to write good conventional commits.

```bash
$ npm run commit
```
