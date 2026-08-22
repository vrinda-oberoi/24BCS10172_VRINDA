//polymorphism
class Animals{
    void sound(){
        System.out.println("Sounds of animals");
    }
}

class Dog extends Animals{
    void sound(){
        System.out.println("Dog sound : barks!");
    }
}

class Cat extends Animals{
    void sound(){
        System.out.println("Cat sound: Meow!");
    }
}

public class Polymorphism{
    public static void main(String [] args) {
        Animals a = new Dog();
        Animals b = new Cat();
        a.sound(); 
        b.sound(); 
    }
}