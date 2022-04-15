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
            System.out.println("Enter 1 to deposit");
            System.out.println("Enter 2 to withdrawal");
            System.out.println("Enter 3 to check balance");
            System.out.println("Enter 4 to get previous transaction");
            System.out.println("Enter 5 to exit");
        }

        void setCustomerID(String id) {
            customerID = id;
        }
    }
}



