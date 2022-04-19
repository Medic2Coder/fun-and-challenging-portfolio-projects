package studentdatabaseapp;

import java.util.Scanner;

public class Student {
    private String firstName;
    private String lastName;
    private int gradeYear;
    private String studentID;
    private String courses;
    private int tuitionBalance;
    private static int costOfCourse = 600;
    //test private static int id and value of static
    //static means that the value is the same for all instances of that class, not the instance
    // of the object
    //id stays with the class
    private static int id = 1001;   // so if we increment we can then add on to that value so
    // next id is 1002


    //Constructor: prompt user for student name and year
    public Student() {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter student's first name: ");
        this.firstName = in.nextLine();
        System.out.println("Enter student's last name: ");
        this.lastName = in.nextLine();
        System.out.println("1 -  for Freshmen\n2- for Sophomore\n3 - Junior\n4 - Senior\nEnter " +
                "student class level: ");
        this.gradeYear = in.nextInt();

        setStudentID();
        System.out.println(firstName + " " + lastName + " is in year " + gradeYear + " and has " +
                "student " +
                "ID of "+ studentID);

    }

    private String setStudentID() {
        //Generate an Id       //remember we can convert the int to string
        // this "" will make a string out of everything
        //results in error unless we change  int studentID to String studentID
        id++;
        this.studentID = gradeYear + "" + id;
        return studentID;
    }
    
}




//enroll in Courses

//View Balance

//Pay tuition

//Show Status







