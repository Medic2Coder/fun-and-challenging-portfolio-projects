package studentdatabaseapp;

import java.util.Scanner;

public class StudentDatabaseApp {

    public static void main(String[] args) {

        //create a new student here to test main method
//        Student  stu1 = new Student();
//        //call the method
//        stu1.enroll();
//        stu1.payTuition();
//        System.out.println(stu1.toString());


        //Ask how many students we want to add to and do it in a way that is more efficient than
        // hard coding each new student
        System.out.println("How many students do you want to add?");
        Scanner in = new Scanner(System.in);
        int numOfStudents = in.nextInt();
        Student[] students = new Student[numOfStudents];
        //iterate through the array and add each student
        //welcome to the world of arrays of objects
        for (int n = 0; n < numOfStudents; n++) {
            students[n] = new Student();
            //call the method
            students[n].enroll();
            students[n].payTuition();
//            System.out.println(students[n].toString());

        }
        
        for (int n = 0; n < numOfStudents; n++) {
            System.out.println(students[n].toString());

        }
        //for testing purposes
//        System.out.println(students[0].toString());
//        System.out.println(students[1].toString());
//        System.out.println(students[2].toString());



    }
}
