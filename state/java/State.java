// State interface
interface DocumentState {
    String publish(Document doc);
    String review(Document doc);
}

// Context
class Document {
    private DocumentState state;
    private String name;

    public Document(String name) {
        this.name = name;
        this.state = new DraftState();
    }

    public void setState(DocumentState state) {
        this.state = state;
    }

    public String publish() {
        return state.publish(this);
    }

    public String review() {
        return state.review(this);
    }
}

// Concrete States
class DraftState implements DocumentState {
    @Override
    public String publish(Document doc) {
        return "Cannot publish from Draft. Please review first.";
    }

    @Override
    public String review(Document doc) {
        doc.setState(new ReviewState());
        return "Document moved to Review state";
    }
}

class ReviewState implements DocumentState {
    @Override
    public String publish(Document doc) {
        doc.setState(new PublishedState());
        return "Document published successfully";
    }

    @Override
    public String review(Document doc) {
        return "Document is already in Review state";
    }
}

class PublishedState implements DocumentState {
    @Override
    public String publish(Document doc) {
        return "Document is already published";
    }

    @Override
    public String review(Document doc) {
        return "Cannot review a published document";
    }
}

// Main class demonstrating State pattern
public class State {
    public static void main(String[] args) {
        Document doc = new Document("Design Patterns Guide");

        System.out.println("Initial state: Draft");
        System.out.println(doc.publish());
        System.out.println(doc.review());
        System.out.println(doc.publish());
    }
}
