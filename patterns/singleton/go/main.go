package main

import (
	"fmt"
	"sync"
)

// Singleton struct
type Database struct {
	connection string
}

var instance *Database
var once sync.Once

// GetInstance returns the singleton instance
func GetInstance() *Database {
	once.Do(func() {
		instance = &Database{
			connection: "Database connection established",
		}
		fmt.Println("Creating database instance")
	})
	return instance
}

func (d *Database) Query(query string) string {
	return fmt.Sprintf("Executing query: %s on %s", query, d.connection)
}

func main() {
	// Get singleton instance
	db1 := GetInstance()
	fmt.Println(db1.Query("SELECT * FROM users"))

	// Get singleton instance again (same instance)
	db2 := GetInstance()
	fmt.Println(db2.Query("SELECT * FROM products"))

	// Verify both are the same instance
	fmt.Printf("db1 and db2 are the same instance: %v\n", db1 == db2)
}
