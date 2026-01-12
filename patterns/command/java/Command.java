// Receiver
class Light {
    private String location;

    public Light(String location) {
        this.location = location;
    }

    public String on() {
        return location + " light is ON";
    }

    public String off() {
        return location + " light is OFF";
    }
}

// Command interface
interface LightCommand {
    String execute();
}

// Concrete Commands
class LightOnCommand implements LightCommand {
    private Light light;

    public LightOnCommand(Light light) {
        this.light = light;
    }

    @Override
    public String execute() {
        return light.on();
    }
}

class LightOffCommand implements LightCommand {
    private Light light;

    public LightOffCommand(Light light) {
        this.light = light;
    }

    @Override
    public String execute() {
        return light.off();
    }
}

// Invoker
class RemoteControl {
    private LightCommand command;

    public void setCommand(LightCommand command) {
        this.command = command;
    }

    public String pressButton() {
        return command.execute();
    }
}

// Main class demonstrating Command pattern
public class Command {
    public static void main(String[] args) {
        Light light = new Light("Living Room");
        LightCommand lightOn = new LightOnCommand(light);
        LightCommand lightOff = new LightOffCommand(light);
        RemoteControl remote = new RemoteControl();

        remote.setCommand(lightOn);
        System.out.println(remote.pressButton());

        remote.setCommand(lightOff);
        System.out.println(remote.pressButton());
    }
}
