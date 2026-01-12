#!/bin/bash
# Test script for all Java pattern implementations
# Usage: ./test-java-patterns.sh

set -e

PATTERNS_DIR="patterns"
FAILED_TESTS=()
PASSED_TESTS=()

echo "================================"
echo "Testing Java Pattern Implementations"
echo "================================"
echo ""

for pattern_dir in "$PATTERNS_DIR"/*/; do
    pattern_name=$(basename "$pattern_dir")
    java_dir="${pattern_dir}java"
    
    if [ -d "$java_dir" ]; then
        java_files=$(find "$java_dir" -maxdepth 1 -name "*.java" -type f)
        
        if [ -n "$java_files" ]; then
            echo "Testing: $pattern_name"
            echo "----------------------------"
            
            # Find the main class
            main_class=""
            for java_file in $java_files; do
                if grep -q "public static void main" "$java_file"; then
                    main_class=$(basename "$java_file" .java)
                    break
                fi
            done
            
            if [ -n "$main_class" ]; then
                if (cd "$java_dir" && javac *.java 2>&1 && java "$main_class" > /dev/null 2>&1); then
                    echo "✓ PASSED: $pattern_name"
                    PASSED_TESTS+=("$pattern_name")
                    # Clean up .class files
                    (cd "$java_dir" && rm -f *.class)
                else
                    echo "✗ FAILED: $pattern_name"
                    FAILED_TESTS+=("$pattern_name")
                    # Clean up .class files even on failure
                    (cd "$java_dir" && rm -f *.class 2>/dev/null || true)
                fi
            else
                echo "⚠ SKIPPED: $pattern_name (no main method found)"
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
