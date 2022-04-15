import java.util.Scanner;
// class

//GOALS: Application displays welcome message to user with name, then five options


public class ScannerTest {

    public static void main(String[] args) {
        //Below is from tutorial for reference:
//        Scanner scanner = new Scanner(System.in);  //takes input from the user
//        System.out.println("Enter your character: ");
//        char c = scanner.next().charAt(0); //specify the index of the string
//        System.out.println("value = " + c);
        //Above is from tutorial for reference ^
    }

    class BankAccount {
        int balance;
        int previousTransaction;
        String customerName;
        String customerID;

        void deposit (int amount) {
            if (amount != 0) {
                balance = balance + amount;
                
            }
        }
    }


}



