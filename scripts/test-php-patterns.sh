#!/bin/bash
# Test script for all PHP pattern implementations
# Usage: ./test-php-patterns.sh

set -e

PATTERNS_DIR="patterns"
FAILED_TESTS=()
PASSED_TESTS=()

echo "================================"
echo "Testing PHP Pattern Implementations"
echo "================================"
echo ""

for pattern_dir in "$PATTERNS_DIR"/*/; do
    pattern_name=$(basename "$pattern_dir")
    php_dir="${pattern_dir}php"
    
    if [ -d "$php_dir" ]; then
        php_files=$(find "$php_dir" -maxdepth 1 -name "*.php" -type f)
        
        if [ -n "$php_files" ]; then
            echo "Testing: $pattern_name"
            echo "----------------------------"
            
            test_failed=false
            for php_file in $php_files; do
                filename=$(basename "$php_file")
                echo "  Running: $filename"
                
                if ! (cd "$php_dir" && php "$filename" > /dev/null 2>&1); then
                    test_failed=true
                    break
                fi
            done
            
            if [ "$test_failed" = false ]; then
                echo "✓ PASSED: $pattern_name"
                PASSED_TESTS+=("$pattern_name")
            else
                echo "✗ FAILED: $pattern_name"
                FAILED_TESTS+=("$pattern_name")
            fi
            echo ""
        fi
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
