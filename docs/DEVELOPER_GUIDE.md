# Quick Start Guide for Developers

## Testing Your Pattern Implementation

When you add or modify a pattern implementation, follow these steps to ensure it works correctly:

### 1. Test Locally Before Committing

#### Test a Single Language
```bash
# Go
cd patterns/your-pattern/go
go run main.go

# TypeScript
cd patterns/your-pattern/typescript
tsx YourPattern.ts

# Java
cd patterns/your-pattern/java
javac *.java
java YourPattern

# PHP
cd patterns/your-pattern/php
php YourPattern.php
```

#### Test All Patterns for One Language
```bash
./scripts/test-go-patterns.sh
./scripts/test-typescript-patterns.sh
./scripts/test-java-patterns.sh
./scripts/test-php-patterns.sh
```

#### Test Everything
```bash
./scripts/test-all-patterns.sh
```

### 2. Automated CI Testing

Once you push your code or create a pull request, GitHub Actions will automatically:
- ✅ Test all pattern implementations
- ✅ Verify code compiles and runs
- ✅ Report any failures

### 3. Check CI Status

1. Go to the **Actions** tab in GitHub
2. Find your commit or PR
3. Check the workflow status
4. Review logs if tests fail

## What Gets Tested?

The CI pipeline tests:
- **22 design patterns** across 4 languages
- **88 total test cases** (22 patterns × 4 languages)
- Compilation and runtime execution
- Exit codes and error conditions

## Pattern Implementation Checklist

Before submitting your pattern implementation:

- [ ] Code runs without errors locally
- [ ] All 7 language implementations are complete (Go, TypeScript, Java, PHP, React, AngularJS, Angular2)
- [ ] Code follows language-specific conventions (see `.github/copilot-instructions.md`)
- [ ] Console output demonstrates the pattern behavior
- [ ] README files updated (both `README.en.md` and `README.pt-br.md`)
- [ ] Local tests pass: `./scripts/test-all-patterns.sh`

## Common Issues and Solutions

### Issue: "No main.go found"
**Solution:** Ensure your Go file is named `main.go` and contains a `main()` function

### Issue: "No main method found" (Java)
**Solution:** Ensure at least one class has `public static void main(String[] args)`

### Issue: TypeScript compilation errors
**Solution:** Check TypeScript syntax and ensure proper type annotations

### Issue: PHP syntax errors
**Solution:** Verify PHP version compatibility (8.0+) and syntax

## Need Help?

- 📖 Read the [CI Testing Documentation](../docs/CI_TESTING.md)
- 📖 Check [Contributing Guidelines](../CONTRIBUTING.md)
- 🐛 [Report an issue](https://github.com/luizwbr/design-patterns-examples/issues/new)
- 💬 Ask questions in pull request comments

## Quick Reference

### File Structure
```
patterns/
└── your-pattern/
    ├── go/
    │   └── main.go
    ├── typescript/
    │   └── YourPattern.ts
    ├── java/
    │   └── YourPattern.java
    ├── php/
    │   └── YourPattern.php
    ├── reactjs/
    │   └── YourPattern.jsx
    ├── angularjs/
    │   └── app.js
    ├── angular2/
    │   └── your-pattern.component.ts
    ├── README.en.md
    └── README.pt-br.md
```

### Test Commands Quick Reference
```bash
# All patterns, all languages
./scripts/test-all-patterns.sh

# Specific language
./scripts/test-all-patterns.sh go

# Individual scripts
./scripts/test-go-patterns.sh
./scripts/test-typescript-patterns.sh
./scripts/test-java-patterns.sh
./scripts/test-php-patterns.sh
```

Happy coding! 🚀
