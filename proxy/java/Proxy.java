// Subject interface
interface Image {
    String display();
}

// Real Subject
class RealImage implements Image {
    private String filename;

    public RealImage(String filename) {
        this.filename = filename;
        loadFromDisk();
    }

    private void loadFromDisk() {
        System.out.println("Loading image from disk: " + filename);
    }

    @Override
    public String display() {
        return "Displaying image: " + filename;
    }
}

// Proxy
class ProxyImage implements Image {
    private String filename;
    private RealImage realImage;

    public ProxyImage(String filename) {
        this.filename = filename;
    }

    @Override
    public String display() {
        if (realImage == null) {
            realImage = new RealImage(filename);
        }
        return realImage.display();
    }
}

// Main class demonstrating Proxy pattern
public class Proxy {
    public static void main(String[] args) {
        Image image1 = new ProxyImage("photo1.jpg");
        Image image2 = new ProxyImage("photo2.jpg");

        System.out.println("\nFirst display call:");
        System.out.println(image1.display());

        System.out.println("\nSecond display call (cached):");
        System.out.println(image1.display());

        System.out.println("\nDisplay another image:");
        System.out.println(image2.display());
    }
}
