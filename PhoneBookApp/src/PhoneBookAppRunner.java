import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Scanner;

public class PhoneBookAppRunner {

    public static void main(String[] args) {
        displayMenu();
    }

    public static void callContact(String name) {
        String s[] = findNumber(name);

        if (s != null)
            System.out.println("Calling " + name + " at " + s[1]);
        else
            System.out.println("No person found name " + name);

        System.out.println("Calling " + name);
    }

    public static void addContact(String name, long number) {
        System.out.println("Adding contact " + name + ": " + number);
        try {
            PrintWriter pw = new PrintWriter(new FileWriter("file.txt", true));
            pw.println(name + ":" + number);

            pw.close();     //needs to remain here

        } catch (IOException e) {
            System.out.println(e.getMessage());
        }
    }

    public static String[] findNumber(String name) {     //using string [] to send larger info
        // b/t functions
        //change scanner source
        try (Scanner in = new Scanner(new File("file.txt"))) {
            String[] s = new String[0]; //this will reuse same variable so no need to constantly
            // reopen memory,
            // it'll redefine it

            //now what if contact is not in file?
            boolean foundPerson = false;

            while (in.hasNextLine()) {
                //stores as string but we are looking for specific info
                //so use split to split it into multiple parts and store it as an array
                s = in.nextLine().split(":");
                if (s[0].equals(name))
                    System.out.println("The number associated with " + name + " is " + s[1]);
                //one is
                // number which is second part of info
                foundPerson = true;
                break;      //stops going through loop once person is found
            }

            if (!foundPerson) {
                System.out.println("Could not find " + name);
                s = null;
            }

            return s;

        } catch (IOException e) {
            System.out.println(e.getMessage());
        }
        return null;

    }

    public static void displayMenu() {
        //make simple menu

        //get user input
        try (Scanner in = new Scanner(System.in)) {
            String name;

            do {


                System.out.println("\nWhat would you like to do? (1,2,3...etc)");
                System.out.println("1. Call Contact");
                System.out.println("2. Add Contact");  //aka save contact
                System.out.println("3. Find Number");
                System.out.println("4. Exit");

                //reading what next integer is, does not actually read new line
                // character which is backslash n
                int choice = in.nextInt();
                in.nextLine();

                switch (choice) {
                    case 1:
                        System.out.println("\nWho would you like to call? (Firstname Lastname)");
                        name = in.nextLine();

                        callContact(name);
                        break;

                    case 2:
                        System.out.println("\nWhat is the name of the person you would like to " +
                                "save? " +
                                "(Firstname Lastname");
                        name = in.nextLine();

                        System.out.println("\nWhat is the phone number of the person you are " +
                                "saving? (1112223456)");
                        long number = in.nextLong();
                        in.nextLine();


                        addContact(name, number);
                        break;

                    case 3:
                        System.out.println("\nWhat is the name of the person whose phone number" +
                                " " +
                                "you " +
                                "are " +
                                "searching? (Firstname Lastname)");
                        // below is passed in as an argument because it will return string of entire
                        // line
                        findNumber(in.nextLine());
                        break;

                    default:

                        break;
                }

                System.out.println("Do you wish to perform another action? (Y/N)");

                if (in.next().toLowerCase().charAt(0) != 'y')
                    break;

            } while (true);
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }

    }
}
