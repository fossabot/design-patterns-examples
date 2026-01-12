#!/bin/bash
# Test script for all Go pattern implementations
# Usage: ./test-go-patterns.sh

set -e

PATTERNS_DIR="patterns"
FAILED_TESTS=()
PASSED_TESTS=()

echo "================================"
echo "Testing Go Pattern Implementations"
echo "================================"
echo ""

for pattern_dir in "$PATTERNS_DIR"/*/; do
    pattern_name=$(basename "$pattern_dir")
    go_dir="${pattern_dir}go"
    
    if [ -d "$go_dir" ] && [ -f "$go_dir/main.go" ]; then
        echo "Testing: $pattern_name"
        echo "----------------------------"
        
        if (cd "$go_dir" && go run main.go > /dev/null 2>&1); then
            echo "✓ PASSED: $pattern_name"
            PASSED_TESTS+=("$pattern_name")
        else
            echo "✗ FAILED: $pattern_name"
            FAILED_TESTS+=("$pattern_name")
        fi
        echo ""
    fi
done

echo "================================"
echo "Test Summary"
echo "================================"
echo "Passed: ${#PASSED_TESTS[@]}"
echo "Failed: ${#FAILED_TESTS[@]}"

if [ ${#FAILED_TESTS[@]} -gt 0 ]; then
    echo ""
    echo "Failed tests:"
    for test in "${FAILED_TESTS[@]}"; do
        echo "  - $test"
    done
    exit 1
fi

echo ""
echo "All tests passed! ✓"
exit 0
