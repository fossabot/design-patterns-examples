# Composite Pattern - Angular 2+

This example demonstrates the Composite pattern in Angular 2+ using an organization hierarchy.

## Description

The Composite pattern composes objects into tree structures to represent part-whole hierarchies. In this example, we represent an organization with managers and developers where managers can have subordinates.

## How It Works

1. `Employee` is the component interface
2. `Developer` is a leaf (no subordinates)
3. `Manager` is a composite (can have subordinates)
4. The tree structure can be traversed uniformly
