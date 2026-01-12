# CI/CD Testing Documentation

## Overview

This repository includes automated testing for all design pattern implementations across multiple programming languages (Go, TypeScript, Java, and PHP). The CI pipeline runs on every push and pull request to ensure code quality and correctness.

## GitHub Actions Workflow

### Workflow File
- **Location**: [.github/workflows/test.yml](../.github/workflows/test.yml)
- **Triggers**: 
  - Push to `main` or `master` branch
  - Pull requests to `main` or `master` branch
  - Manual workflow dispatch

### Test Jobs

The workflow includes separate jobs for each language:

#### 1. **Go Tests** (`test-go`)
- **Setup**: Go 1.21
- **Process**: Executes `main.go` for each pattern
- **Validation**: Ensures code compiles and runs without errors

#### 2. **TypeScript Tests** (`test-typescript`)
- **Setup**: Node.js 20, TypeScript, tsx
- **Process**: Executes all `.ts` files in each pattern directory
- **Validation**: Ensures TypeScript code compiles and executes correctly

#### 3. **Java Tests** (`test-java`)
- **Setup**: Java 17 (Temurin distribution)
- **Process**: Compiles all `.java` files and executes the main class
- **Validation**: Ensures Java code compiles and runs without errors

#### 4. **PHP Tests** (`test-php`)
- **Setup**: PHP 8.2
- **Process**: Executes all `.php` files in each pattern directory
- **Validation**: Ensures PHP code runs without syntax or runtime errors

### Test Strategy

Each language test job uses a **matrix strategy** to test all 22 design patterns:
- abstract-factory
- adapter
- bridge
- builder
- chain-of-responsibility
- command
- composite
- decorator
- facade
- factory-method
- flyweight
- iterator
- mediator
- memento
- observer
- prototype
- proxy
- singleton
- state
- strategy
- template-method
- visitor

## Local Testing Scripts

### Location
All test scripts are located in the `scripts/` directory.

### Available Scripts

#### 1. **Test All Patterns** (`test-all-patterns.sh`)
Master script that runs all language-specific tests.

```bash
# Run all tests
./scripts/test-all-patterns.sh

# Run tests for specific language
./scripts/test-all-patterns.sh go
./scripts/test-all-patterns.sh typescript
./scripts/test-all-patterns.sh java
./scripts/test-all-patterns.sh php
```

#### 2. **Language-Specific Scripts**
- `test-go-patterns.sh` - Tests all Go implementations
- `test-typescript-patterns.sh` - Tests all TypeScript implementations
- `test-java-patterns.sh` - Tests all Java implementations
- `test-php-patterns.sh` - Tests all PHP implementations

```bash
# Run individual language tests
./scripts/test-go-patterns.sh
./scripts/test-typescript-patterns.sh
./scripts/test-java-patterns.sh
./scripts/test-php-patterns.sh
```

### Prerequisites for Local Testing

#### Go
```bash
# Install Go 1.21 or higher
go version
```

#### TypeScript
```bash
# Install Node.js and TypeScript
npm install -g typescript tsx
```

#### Java
```bash
# Install Java 17 or higher
java -version
javac -version
```

#### PHP
```bash
# Install PHP 8.0 or higher
php -version
```

## Test Output

### Success
When all tests pass, you'll see:
```
✓ PASSED: pattern-name
```

### Failure
When tests fail, you'll see:
```
✗ FAILED: pattern-name
```

### Summary
Each test script provides a summary:
```
================================
Test Summary
================================
Passed: 22
Failed: 0

All tests passed! ✓
```

## How Tests Work

1. **Pattern Discovery**: Scripts scan the `patterns/` directory for all pattern implementations
2. **Language Detection**: For each pattern, scripts check if language-specific implementations exist
3. **Execution**: Scripts run the code and capture exit codes
4. **Validation**: Non-zero exit codes indicate failures
5. **Reporting**: Scripts aggregate results and provide detailed summaries

## CI Status Badge

Add this badge to your README to show CI status:

```markdown
![Tests](https://github.com/YOUR_USERNAME/design-patterns-examples/workflows/Run%20Pattern%20Tests/badge.svg)
```

## Troubleshooting

### Test Failures

If tests fail in CI:
1. Check the workflow logs in the Actions tab
2. Run the specific language test locally
3. Verify the code compiles and runs on your machine
4. Check for missing files or syntax errors

### Common Issues

- **Go**: Missing `main.go` file or package issues
- **TypeScript**: Missing dependencies or TypeScript compilation errors
- **Java**: Missing main method or compilation errors
- **PHP**: Syntax errors or missing PHP extensions

## Contributing

When adding new patterns or modifying existing ones:

1. Ensure your code runs successfully locally
2. Test using the appropriate language script
3. Verify all language implementations are complete
4. Run the full test suite before submitting PR

```bash
./scripts/test-all-patterns.sh
```

## Future Enhancements

Potential improvements for the CI pipeline:
- Add React.js component testing
- Add AngularJS and Angular 2+ testing
- Implement code coverage reporting
- Add linting and code style checks
- Integrate static analysis tools
- Add performance benchmarking
