import java.util.ArrayList;
import java.util.List;

// Memento
class Memento {
    private String content;

    public Memento(String content) {
        this.content = content;
    }

    public String getContent() {
        return content;
    }
}

// Originator
class TextEditor {
    private String content = "";

    public void setContent(String content) {
        this.content = content;
    }

    public String getContent() {
        return content;
    }

    public Memento save() {
        return new Memento(content);
    }

    public void restore(Memento memento) {
        content = memento.getContent();
    }
}

// Caretaker
class History {
    private List<Memento> mementos = new ArrayList<>();

    public void push(Memento memento) {
        mementos.add(memento);
    }

    public Memento pop() {
        if (mementos.isEmpty()) {
            return null;
        }
        return mementos.remove(mementos.size() - 1);
    }
}

// Main class demonstrating Memento pattern
public class Memento {
    public static void main(String[] args) {
        TextEditor editor = new TextEditor();
        History history = new History();

        editor.setContent("Version 1");
        history.push(editor.save());
        System.out.println("Current: " + editor.getContent());

        editor.setContent("Version 2");
        history.push(editor.save());
        System.out.println("Current: " + editor.getContent());

        editor.setContent("Version 3");
        System.out.println("Current: " + editor.getContent());

        editor.restore(history.pop());
        System.out.println("After undo: " + editor.getContent());

        editor.restore(history.pop());
        System.out.println("After undo: " + editor.getContent());
    }
}
