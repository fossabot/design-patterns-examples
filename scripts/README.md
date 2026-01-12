# Testing Scripts

This directory contains test scripts for validating all design pattern implementations.

## Available Scripts

### `test-all-patterns.sh`
Master script that runs all language tests or a specific language test.

**Usage:**
```bash
# Run all tests
./scripts/test-all-patterns.sh

# Run tests for a specific language
./scripts/test-all-patterns.sh go
./scripts/test-all-patterns.sh typescript
./scripts/test-all-patterns.sh java
./scripts/test-all-patterns.sh php
```

### Language-Specific Scripts

#### `test-go-patterns.sh`
Tests all Go pattern implementations.

**Prerequisites:** Go 1.21+

```bash
./scripts/test-go-patterns.sh
```

#### `test-typescript-patterns.sh`
Tests all TypeScript pattern implementations.

**Prerequisites:** Node.js 18+, TypeScript, tsx

```bash
# Install dependencies if needed
npm install -g typescript tsx

# Run tests
./scripts/test-typescript-patterns.sh
```

#### `test-java-patterns.sh`
Tests all Java pattern implementations.

**Prerequisites:** Java 17+

```bash
./scripts/test-java-patterns.sh
```

#### `test-php-patterns.sh`
Tests all PHP pattern implementations.

**Prerequisites:** PHP 8.0+

```bash
./scripts/test-php-patterns.sh
```

## Test Output

Each script provides detailed output:
- ✓ PASSED: Pattern test succeeded
- ✗ FAILED: Pattern test failed
- ⚠ SKIPPED: Pattern implementation not found

### Example Output
```
================================
Testing Go Pattern Implementations
================================

Testing: singleton
----------------------------
✓ PASSED: singleton

Testing: factory-method
----------------------------
✓ PASSED: factory-method

================================
Test Summary
================================
Passed: 22
Failed: 0

All tests passed! ✓
```

## How It Works

1. Scripts scan the `patterns/` directory for all pattern implementations
2. For each pattern, they locate the language-specific subdirectory
3. Scripts compile/run the code and check for errors
4. Results are aggregated and displayed in a summary

## Continuous Integration

These scripts are also used in the GitHub Actions CI pipeline. See [CI Testing Documentation](../docs/CI_TESTING.md) for details.

## Making Scripts Executable

On Linux/Mac, you may need to make scripts executable:

```bash
chmod +x scripts/*.sh
```

## Running on Windows

For Windows users:
- Use Git Bash, WSL, or any bash-compatible shell
- Ensure required languages (Go, Java, PHP, Node.js) are installed and in PATH

## Troubleshooting

### Script Not Found
```bash
# Make sure you're in the repository root
cd /path/to/design-patterns-examples

# Run with explicit bash
bash scripts/test-all-patterns.sh
```

### Permission Denied
```bash
# Make script executable
chmod +x scripts/test-all-patterns.sh
```

### Language Not Installed
Install the required language runtime and ensure it's in your PATH:
```bash
# Test if language is available
go version
java -version
php -version
node -version
```
