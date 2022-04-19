package studentdatabaseapp;

import java.util.Scanner;

public class Student {
    private String firstName;
    private String lastName;
    private int gradeYear;
    private int studentID;
    private String courses;
    private int tuitionBalance;
    private int costOfCourse = 600;

    //Constructor: prompt user for student name and year
    public Student(){
        Scanner in = new Scanner(System.in);
        System.out.println("Enter student's first name: ");
        this.firstName = in.nextLine();
        System.out.println("Enter student's last name: ");
        this.lastName = in.nextLine();
        System.out.println("1 -  for Freshmen\n2- for Sophomore\n3 - Junior\n4 - Senior\nEnter " +
                "student class level: ");
        this.gradeYear = in.nextInt();
        System.out.println(firstName + " " + lastName + " is in grade " + gradeYear);
        
    }

    //Generate an Id

    //enroll in Courses

    //View Balance

    //Pay tuition

    //Show Status

}
