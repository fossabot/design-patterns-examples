import java.util.ArrayList;
import java.util.List;

// Observer interface
interface Observer {
    void update(double temperature);
}

// Subject interface
interface Subject {
    void attach(Observer observer);
    void detach(Observer observer);
    void notifyObservers();
}

// Concrete Subject
class WeatherStation implements Subject {
    private List<Observer> observers = new ArrayList<>();
    private double temperature = 0.0;

    @Override
    public void attach(Observer observer) {
        observers.add(observer);
    }

    @Override
    public void detach(Observer observer) {
        observers.remove(observer);
    }

    @Override
    public void notifyObservers() {
        for (Observer observer : observers) {
            observer.update(temperature);
        }
    }

    public void setTemperature(double temp) {
        this.temperature = temp;
        notifyObservers();
    }
}

// Concrete Observers
class PhoneDisplay implements Observer {
    private String name;

    public PhoneDisplay(String name) {
        this.name = name;
    }

    @Override
    public void update(double temperature) {
        System.out.println(name + ": Temperature updated to " + temperature + "°C");
    }
}

class WindowDisplay implements Observer {
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
        observer.Observer phone = new PhoneDisplay("Phone Display");
        observer.Observer window = new WindowDisplay("Window Display");

        station.attach(phone);
        station.attach(window);

        station.setTemperature(25.5);
        station.setTemperature(30.0);
    }
}
