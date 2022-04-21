package studentdatabaseapp;

public class StudentDatabaseApp {

    public static void main(String[] args) {
        //create a new student here to test main method
        Student  stu1 = new Student();
        //call the method
        stu1.enroll();
        stu1.payTuition();
        System.out.println(stu1.toString());
        //Ask how many students we want to add


    }
}
