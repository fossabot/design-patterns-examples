#!/bin/bash
# Test script for all TypeScript pattern implementations
# Usage: ./test-typescript-patterns.sh

set -e

PATTERNS_DIR="patterns"
FAILED_TESTS=()
PASSED_TESTS=()

echo "================================"
echo "Testing TypeScript Pattern Implementations"
echo "================================"
echo ""

# Check if tsx is installed
if ! command -v tsx &> /dev/null; then
    echo "Installing tsx..."
    npm install -g typescript tsx
fi

for pattern_dir in "$PATTERNS_DIR"/*/; do
    pattern_name=$(basename "$pattern_dir")
    ts_dir="${pattern_dir}typescript"
    
    if [ -d "$ts_dir" ]; then
        ts_files=$(find "$ts_dir" -maxdepth 1 -name "*.ts" -type f)
        
        if [ -n "$ts_files" ]; then
            echo "Testing: $pattern_name"
            echo "----------------------------"
            
            test_failed=false
            for ts_file in $ts_files; do
                filename=$(basename "$ts_file")
                echo "  Running: $filename"
                
                if ! (cd "$ts_dir" && tsx "$filename" > /dev/null 2>&1); then
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
