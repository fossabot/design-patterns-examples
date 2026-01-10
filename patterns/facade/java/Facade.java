import java.util.ArrayList;
import java.util.List;

// Subsystem: CPU
class CPU {
    public String freeze() {
        return "CPU: Freezing processor";
    }

    public String jump(String position) {
        return "CPU: Jumping to position " + position;
    }

    public String execute() {
        return "CPU: Executing instructions";
    }
}

// Subsystem: Memory
class Memory {
    public String load(String position, String data) {
        return "Memory: Loading '" + data + "' at position " + position;
    }
}

// Subsystem: HardDrive
class HardDrive {
    public String read(String sector, String size) {
        return "HardDrive: Reading " + size + " bytes from sector " + sector;
    }
}

// Facade
class ComputerFacade {
    private CPU cpu;
    private Memory memory;
    private HardDrive hardDrive;

    public ComputerFacade() {
        this.cpu = new CPU();
        this.memory = new Memory();
        this.hardDrive = new HardDrive();
    }

    public List<String> start() {
        List<String> results = new ArrayList<>();
        results.add("Starting Computer...");
        results.add(cpu.freeze());
        results.add(memory.load("0x00", "BOOT_ADDRESS"));
        results.add(hardDrive.read("0", "1024"));
        results.add(cpu.jump("0x00"));
        results.add(cpu.execute());
        results.add("Computer started successfully!");
        return results;
    }
}

// Main class demonstrating Facade pattern
public class Facade {
    public static void main(String[] args) {
        ComputerFacade computer = new ComputerFacade();
        List<String> results = computer.start();
        for (String result : results) {
            System.out.println(result);
        }
    }
}
