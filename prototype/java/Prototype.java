// Prototype interface
interface DocumentPrototype {
    DocumentPrototype clone();
    String getDetails();
}

// Concrete Prototype: Document
class Document implements DocumentPrototype {
    private String title;
    private String content;

    public Document(String title, String content) {
        this.title = title;
        this.content = content;
    }

    // Copy constructor for cloning
    private Document(Document document) {
        this.title = document.title;
        this.content = document.content;
    }

    @Override
    public DocumentPrototype clone() {
        return new Document(this);
    }

    @Override
    public String getDetails() {
        return "Document [title=" + title + ", content=" + content + "]";
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setContent(String content) {
        this.content = content;
    }
}

// Main class demonstrating Prototype pattern
public class Prototype {
    public static void main(String[] args) {
        // Create original document
        Document original = new Document("Original Document", "This is the original content");
        System.out.println("Original: " + original.getDetails());

        // Clone the document
        Document clone1 = (Document) original.clone();
        System.out.println("Clone 1: " + clone1.getDetails());

        // Modify clone
        clone1.setTitle("Modified Clone");
        clone1.setContent("This is modified content");
        System.out.println("Modified Clone 1: " + clone1.getDetails());

        // Original remains unchanged
        System.out.println("Original (unchanged): " + original.getDetails());

        // Create another clone
        Document clone2 = (Document) original.clone();
        clone2.setTitle("Another Clone");
        System.out.println("Clone 2: " + clone2.getDetails());
    }
}
