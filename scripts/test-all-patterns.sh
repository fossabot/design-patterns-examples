#!/bin/bash
# Master test script - runs all language-specific tests
# Usage: ./test-all-patterns.sh [language]
# Example: ./test-all-patterns.sh go
# Example: ./test-all-patterns.sh (runs all)

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
LANGUAGE=$1

run_tests() {
    local lang=$1
    local script="$SCRIPT_DIR/test-$lang-patterns.sh"
    
    if [ -f "$script" ]; then
        echo ""
        echo "========================================"
        echo "Running $lang tests..."
        echo "========================================"
        bash "$script"
    else
        echo "⚠ Warning: Test script not found for $lang"
    fi
}

if [ -n "$LANGUAGE" ]; then
    # Run specific language tests
    case "$LANGUAGE" in
        go|typescript|java|php)
            run_tests "$LANGUAGE"
            ;;
        *)
            echo "Unknown language: $LANGUAGE"
            echo "Available languages: go, typescript, java, php"
            exit 1
            ;;
    esac
else
    # Run all tests
    echo "Running all pattern tests..."
    
    FAILED=0
    
    run_tests "go" || FAILED=$((FAILED + 1))
    run_tests "typescript" || FAILED=$((FAILED + 1))
    run_tests "java" || FAILED=$((FAILED + 1))
    run_tests "php" || FAILED=$((FAILED + 1))
    
    echo ""
    echo "========================================"
    echo "All Tests Complete"
    echo "========================================"
    
    if [ $FAILED -gt 0 ]; then
        echo "❌ $FAILED language test suite(s) failed"
        exit 1
    else
        echo "✅ All language test suites passed!"
        exit 0
    fi
fi
