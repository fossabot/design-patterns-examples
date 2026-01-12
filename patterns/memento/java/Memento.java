import java.util.ArrayList;
import java.util.List;

// Memento
class EditorMemento {
    private String content;

    public EditorMemento(String content) {
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

    public EditorMemento save() {
        return new EditorMemento(content);
    }

    public void restore(EditorMemento memento) {
        content = memento.getContent();
    }
}

// Caretaker
class History {
    private List<EditorMemento> mementos = new ArrayList<>();

    public void push(EditorMemento memento) {
        mementos.add(memento);
    }

    public EditorMemento pop() {
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
