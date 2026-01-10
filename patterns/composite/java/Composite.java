import java.util.ArrayList;
import java.util.List;

// Component interface
interface Employee {
    String getDetails();
    void add(Employee employee);
    void remove(Employee employee);
}

// Leaf: Individual Employee
class IndividualEmployee implements Employee {
    private String name;
    private String position;

    public IndividualEmployee(String name, String position) {
        this.name = name;
        this.position = position;
    }

    @Override
    public String getDetails() {
        return name + " - " + position;
    }

    @Override
    public void add(Employee employee) {
        // Leaf node cannot add employees
        throw new UnsupportedOperationException("Cannot add to a leaf employee");
    }

    @Override
    public void remove(Employee employee) {
        // Leaf node cannot remove employees
        throw new UnsupportedOperationException("Cannot remove from a leaf employee");
    }
}

// Composite: Manager
class Manager implements Employee {
    private String name;
    private String position;
    private List<Employee> subordinates;

    public Manager(String name, String position) {
        this.name = name;
        this.position = position;
        this.subordinates = new ArrayList<>();
    }

    @Override
    public String getDetails() {
        StringBuilder details = new StringBuilder();
        details.append(name).append(" - ").append(position).append("\n");
        for (Employee emp : subordinates) {
            details.append("  ").append(emp.getDetails()).append("\n");
        }
        return details.toString();
    }

    @Override
    public void add(Employee employee) {
        subordinates.add(employee);
    }

    @Override
    public void remove(Employee employee) {
        subordinates.remove(employee);
    }
}

// Main class demonstrating Composite pattern
public class Composite {
    public static void main(String[] args) {
        // Create employees
        Employee dev1 = new IndividualEmployee("John", "Developer");
        Employee dev2 = new IndividualEmployee("Jane", "Developer");
        Employee designer = new IndividualEmployee("Bob", "Designer");

        // Create managers
        Manager devManager = new Manager("Alice", "Development Manager");
        devManager.add(dev1);
        devManager.add(dev2);

        Manager generalManager = new Manager("Charlie", "General Manager");
        generalManager.add(devManager);
        generalManager.add(designer);

        // Print organization structure
        System.out.println("Organization Structure:");
        System.out.println(generalManager.getDetails());
    }
}
