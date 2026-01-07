// Product class
class House {
    private String foundation;
    private String structure;
    private String roof;
    private String interior;

    public void setFoundation(String foundation) {
        this.foundation = foundation;
    }

    public void setStructure(String structure) {
        this.structure = structure;
    }

    public void setRoof(String roof) {
        this.roof = roof;
    }

    public void setInterior(String interior) {
        this.interior = interior;
    }

    @Override
    public String toString() {
        return "House [foundation=" + foundation + ", structure=" + structure + 
               ", roof=" + roof + ", interior=" + interior + "]";
    }
}

// Builder interface
interface HouseBuilder {
    void buildFoundation();
    void buildStructure();
    void buildRoof();
    void buildInterior();
    House getHouse();
}

// Concrete Builder: Concrete House Builder
class ConcreteHouseBuilder implements HouseBuilder {
    private House house;

    public ConcreteHouseBuilder() {
        this.house = new House();
    }

    @Override
    public void buildFoundation() {
        house.setFoundation("Concrete foundation");
    }

    @Override
    public void buildStructure() {
        house.setStructure("Concrete structure");
    }

    @Override
    public void buildRoof() {
        house.setRoof("Concrete roof");
    }

    @Override
    public void buildInterior() {
        house.setInterior("Concrete interior");
    }

    @Override
    public House getHouse() {
        return this.house;
    }
}

// Concrete Builder: Wooden House Builder
class WoodenHouseBuilder implements HouseBuilder {
    private House house;

    public WoodenHouseBuilder() {
        this.house = new House();
    }

    @Override
    public void buildFoundation() {
        house.setFoundation("Wooden foundation");
    }

    @Override
    public void buildStructure() {
        house.setStructure("Wooden structure");
    }

    @Override
    public void buildRoof() {
        house.setRoof("Wooden roof");
    }

    @Override
    public void buildInterior() {
        house.setInterior("Wooden interior");
    }

    @Override
    public House getHouse() {
        return this.house;
    }
}

// Director
class ConstructionDirector {
    private HouseBuilder builder;

    public ConstructionDirector(HouseBuilder builder) {
        this.builder = builder;
    }

    public House constructHouse() {
        builder.buildFoundation();
        builder.buildStructure();
        builder.buildRoof();
        builder.buildInterior();
        return builder.getHouse();
    }
}

// Main class demonstrating Builder pattern
public class Builder {
    public static void main(String[] args) {
        // Building a concrete house
        HouseBuilder concreteBuilder = new ConcreteHouseBuilder();
        ConstructionDirector director1 = new ConstructionDirector(concreteBuilder);
        House concreteHouse = director1.constructHouse();
        System.out.println(concreteHouse);

        System.out.println();

        // Building a wooden house
        HouseBuilder woodenBuilder = new WoodenHouseBuilder();
        ConstructionDirector director2 = new ConstructionDirector(woodenBuilder);
        House woodenHouse = director2.constructHouse();
        System.out.println(woodenHouse);
    }
}
