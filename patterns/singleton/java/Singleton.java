// Singleton class: Database
class Database {
    // Static instance variable (volatile for thread safety)
    private static volatile Database instance;
    private String connection;

    // Private constructor to prevent instantiation
    private Database() {
        this.connection = "Database connection established";
        System.out.println("Creating database instance");
    }

    // Thread-safe getInstance method using double-checked locking
    public static Database getInstance() {
        if (instance == null) {
            synchronized (Database.class) {
                if (instance == null) {
                    instance = new Database();
                }
            }
        }
        return instance;
    }

    public String query(String query) {
        return "Executing query: " + query + " on " + connection;
    }
}

// Main class demonstrating Singleton pattern
public class Singleton {
    public static void main(String[] args) {
        // Get singleton instance
        Database db1 = Database.getInstance();
        System.out.println(db1.query("SELECT * FROM users"));

        System.out.println();

        // Get singleton instance again (same instance)
        Database db2 = Database.getInstance();
        System.out.println(db2.query("SELECT * FROM products"));

        System.out.println();

        // Verify both are the same instance
        System.out.println("db1 and db2 are the same instance: " + (db1 == db2));
    }
}
