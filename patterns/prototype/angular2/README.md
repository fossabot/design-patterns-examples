# Prototype Pattern - Angular 2+

This example demonstrates the Prototype pattern in Angular 2+ using document cloning.

## Description

The Prototype pattern creates new objects by cloning existing ones. In this example, we maintain a registry of document prototypes and create new documents by cloning these prototypes.

## Files

- `document-prototype.ts` - Prototype classes for documents
- `prototype.component.ts` - Component that uses the prototype pattern
- `prototype.component.html` - Template for the component
- `prototype.component.css` - Styles for the component

## How It Works

1. `Cloneable` interface defines the clone method
2. `Document` implements cloning functionality
3. `DocumentRegistry` maintains prototype documents
4. New documents are created by cloning registered prototypes
