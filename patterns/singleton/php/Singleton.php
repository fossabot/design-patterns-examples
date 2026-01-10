<?php

// Singleton class
class Database {
    private static $instance = null;
    private $connection;

    private function __construct() {
        $this->connection = "Database connection established";
        echo "Creating database instance\n";
    }

    // Prevent cloning
    private function __clone() {}

    // Prevent unserialization
    public function __wakeup() {
        throw new \Exception("Cannot unserialize singleton");
    }

    public static function getInstance(): Database {
        if (self::$instance === null) {
            self::$instance = new Database();
        }
        return self::$instance;
    }

    public function query(string $query): string {
        return "Executing query: {$query} on {$this->connection}";
    }
}

// Usage
$db1 = Database::getInstance();
echo $db1->query("SELECT * FROM users") . "\n";

$db2 = Database::getInstance();
echo $db2->query("SELECT * FROM products") . "\n";

// Verify both are the same instance
echo "db1 and db2 are the same instance: " . ($db1 === $db2 ? "true" : "false") . "\n";
