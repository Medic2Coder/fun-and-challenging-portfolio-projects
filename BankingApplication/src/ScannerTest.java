import java.util.Scanner;          //must be imported for scanner to work//package, util, scanner
// class


public class ScannerTest {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);  //takes input from the user
        System.out.println("Enter your name: ");
        String name = scanner.nextLine();
        System.out.println("Hello " + name);
    }
}
