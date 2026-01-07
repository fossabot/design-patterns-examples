// Request
class SupportTicket {
    private int level;
    private String message;

    public SupportTicket(int level, String message) {
        this.level = level;
        this.message = message;
    }

    public int getLevel() {
        return level;
    }

    public String getMessage() {
        return message;
    }
}

// Handler interface
interface SupportHandler {
    void setNext(SupportHandler handler);
    String handleRequest(SupportTicket ticket);
}

// Base Handler
abstract class BaseSupportHandler implements SupportHandler {
    protected SupportHandler next;

    @Override
    public void setNext(SupportHandler handler) {
        this.next = handler;
    }
}

// Level 1 Support
class Level1Support extends BaseSupportHandler {
    @Override
    public String handleRequest(SupportTicket ticket) {
        if (ticket.getLevel() <= 1) {
            return "Level 1 Support: Handling ticket - " + ticket.getMessage();
        }
        if (next != null) {
            return next.handleRequest(ticket);
        }
        return "No handler available";
    }
}

// Level 2 Support
class Level2Support extends BaseSupportHandler {
    @Override
    public String handleRequest(SupportTicket ticket) {
        if (ticket.getLevel() <= 2) {
            return "Level 2 Support: Handling ticket - " + ticket.getMessage();
        }
        if (next != null) {
            return next.handleRequest(ticket);
        }
        return "No handler available";
    }
}

// Level 3 Support
class Level3Support extends BaseSupportHandler {
    @Override
    public String handleRequest(SupportTicket ticket) {
        if (ticket.getLevel() <= 3) {
            return "Level 3 Support: Handling ticket - " + ticket.getMessage();
        }
        if (next != null) {
            return next.handleRequest(ticket);
        }
        return "No handler available";
    }
}

// Main class demonstrating Chain of Responsibility pattern
public class ChainOfResponsibility {
    public static void main(String[] args) {
        SupportHandler level1 = new Level1Support();
        SupportHandler level2 = new Level2Support();
        SupportHandler level3 = new Level3Support();

        level1.setNext(level2);
        level2.setNext(level3);

        SupportTicket[] tickets = {
            new SupportTicket(1, "Password reset"),
            new SupportTicket(2, "Software installation issue"),
            new SupportTicket(3, "Server crash investigation")
        };

        for (SupportTicket ticket : tickets) {
            System.out.println(level1.handleRequest(ticket));
        }
    }
}
