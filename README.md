# Angular Testing

Two test frameworks are installed.

## Jest

Run all Jest tests:

```
ng test
```

Run just for a project:

```
ng test PROJECT_NAME
```

## Cypress

To run the top-level tests:

```
ng e2e
```

To run tests for a project:

```
ng run {project-name}:cypress-open
```

Or to just run them:

```
ng run {project-name}:cypress-run
```
