import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

// Flyweight: Character formatting
class CharacterFormat {
    private String font;
    private int size;
    private String color;

    public CharacterFormat(String font, int size, String color) {
        this.font = font;
        this.size = size;
        this.color = color;
    }

    public String display(char character) {
        return "Character '" + character + "' [Font: " + font + ", Size: " + size + ", Color: " + color + "]";
    }
}

// Flyweight Factory
class FormatFactory {
    private Map<String, CharacterFormat> formats;

    public FormatFactory() {
        this.formats = new HashMap<>();
    }

    public CharacterFormat getFormat(String font, int size, String color) {
        String key = font + "-" + size + "-" + color;
        if (!formats.containsKey(key)) {
            System.out.println("Created new format: " + key);
            formats.put(key, new CharacterFormat(font, size, color));
        }
        return formats.get(key);
    }

    public int getTotalFormats() {
        return formats.size();
    }
}

// Character with extrinsic state
class Character {
    private char character;
    private CharacterFormat format;

    public Character(char character, CharacterFormat format) {
        this.character = character;
        this.format = format;
    }

    public String display() {
        return format.display(character);
    }
}

// Text Editor
class TextEditor {
    private List<Character> characters;
    private FormatFactory factory;

    public TextEditor() {
        this.characters = new ArrayList<>();
        this.factory = new FormatFactory();
    }

    public void addCharacter(char character, String font, int size, String color) {
        CharacterFormat format = factory.getFormat(font, size, color);
        characters.add(new Character(character, format));
    }

    public List<String> display() {
        List<String> results = new ArrayList<>();
        for (Character character : characters) {
            results.add(character.display());
        }
        results.add("Total unique formats: " + factory.getTotalFormats());
        return results;
    }
}

// Main class demonstrating Flyweight pattern
public class Flyweight {
    public static void main(String[] args) {
        TextEditor editor = new TextEditor();
        editor.addCharacter('H', "Arial", 12, "Red");
        editor.addCharacter('e', "Arial", 12, "Red");
        editor.addCharacter('l', "Arial", 12, "Red");
        editor.addCharacter('l', "Times", 14, "Blue");
        editor.addCharacter('o', "Times", 14, "Blue");

        List<String> results = editor.display();
        for (String result : results) {
            System.out.println(result);
        }
    }
}
