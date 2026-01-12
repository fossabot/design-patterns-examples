import java.util.ArrayList;
import java.util.List;

// Observer interface
interface TemperatureObserver {
    void update(double temperature);
}

// Subject interface
interface Subject {
    void attach(TemperatureObserver observer);
    void detach(TemperatureObserver observer);
    void notifyObservers();
}

// Concrete Subject
class WeatherStation implements Subject {
    private List<TemperatureObserver> observers = new ArrayList<>();
    private double temperature = 0.0;

    @Override
    public void attach(TemperatureObserver observer) {
        observers.add(observer);
    }

    @Override
    public void detach(TemperatureObserver observer) {
        observers.remove(observer);
    }

    @Override
    public void notifyObservers() {
        for (TemperatureObserver observer : observers) {
            observer.update(temperature);
        }
    }

    public void setTemperature(double temp) {
        this.temperature = temp;
        notifyObservers();
    }
}

// Concrete Observers
class PhoneDisplay implements TemperatureObserver {
    private String name;

    public PhoneDisplay(String name) {
        this.name = name;
    }

    @Override
    public void update(double temperature) {
        System.out.println(name + ": Temperature updated to " + temperature + "°C");
    }
}

class WindowDisplay implements TemperatureObserver {
    private String name;

    public WindowDisplay(String name) {
        this.name = name;
    }

    @Override
    public void update(double temperature) {
        System.out.println(name + ": Temperature updated to " + temperature + "°C");
    }
}

// Main class demonstrating Observer pattern
public class Observer {
    public static void main(String[] args) {
        WeatherStation station = new WeatherStation();
        TemperatureObserver phone = new PhoneDisplay("Phone Display");
        TemperatureObserver window = new WindowDisplay("Window Display");

        station.attach(phone);
        station.attach(window);

        station.setTemperature(25.5);
        station.setTemperature(30.0);
    }
}
