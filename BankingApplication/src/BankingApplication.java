import java.util.Scanner;
//GOALS: Application displays welcome message to user with name, then five options


public class BankingApplication {
    public static void main(String[] args) {

        class BankAccount {
            int balance;
            int previousTransaction;
            String customerName;
            String customerID;

            BankAccount(String cname, String cid) {    //constructor to pass in name and id
                customerName = cname;
                customerID = cid;
            }

            void deposit(int amount) {        //first method, amount is paramater
                if (amount != 0) {             // don't perform operation if amount is 0
                    balance = balance + amount;   //increments
                    previousTransaction = amount;  //load previous amount
                }
            }

            void withdrawal(int amount) {
                if (amount != 0) {                //don't perform operation if amount is 0
                    balance = balance - amount;   //decrements, or deducts amount from balance
                    previousTransaction = amount;
                }
            }

            void getPreviousTransaction() {
                if (previousTransaction > 0) {  //if previous transaction is greater than 0
                    System.out.println("Deposited: " + previousTransaction);
                } else if (previousTransaction < 0) {
                    System.out.println("Withdrawn: " + Math.abs(previousTransaction));  //absolute
                    // method takes any value and returns the absolute value so it shows withdrawn
                    // 1000 versus withdrawn -1000
                } else {
                    System.out.println("No recently recorded transactions");
                }
            }

            void showMenus() {

                char option = '\0'; //to initialize option to null
                Scanner scanner = new Scanner(System.in); //take user input from console

                System.out.println("Welcome " + customerName + " to the banking application");
                //concats with the customer name  ^
                System.out.println("Your customer ID is: " + customerID + " Please choose an " +
                        "option");
                System.out.println("\n"); //line break for aesthetics
                System.out.println("Enter A to deposit");
                System.out.println("Enter B to withdrawal");
                System.out.println("Enter C to check balance");
                System.out.println("Enter D to get previous transaction");
                System.out.println("Enter E to exit");

                do {
                    System.out.println("==================================================");
                    System.out.println("Enter your option: ");
                    System.out.println("==================================================");
                    option = scanner.next().charAt(0); //takes user input and converts to char
                    System.out.println("===");
                    System.out.println("You entered: " + option);

                    switch (option) {
                        case 'A':
                            System.out.println("Enter amount to deposit: ");
                            int amount = scanner.nextInt();
                            deposit(amount);
                            break;
                        case 'B':
                            System.out.println("Enter amount to withdrawal: ");
                            int amount2 = scanner.nextInt();
                            withdrawal(amount2);
                            break;
                        case 'C':
                            System.out.println("Your balance is: " + balance);
                            break;
                        case 'D':
                            getPreviousTransaction();
                            break;
                        case 'E':
                            System.out.println("Thank you for using the banking application");
                            break;
                        default:
                            System.out.println("Invalid option entered, Please enter again");
                            break;
                    }
                } while (option != 'E');
                System.out.println("Thank you for using the banking application");  //repeating
                // ? delete line 93 to 95 if necessary

            }
        }

    }
}