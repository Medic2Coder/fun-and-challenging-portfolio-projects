package SourcePackages;

import java.util.Scanner;


public class PlayerInfo {
    Scanner in = new Scanner(System.in);   //now import the scanner class

    private int age;
    private String playerName;

    //Getter and Setter methods
    public int age(){
        return age;
    }

    public String playerName(){
        return playerName;
    }

    public void setAge(int age){
        this.age=age;
    }

    public void setPlayerName   (String playerName){
        this.playerName=playerName;
    }

//    //Constructor
//    public PlayerInfo(int age, String playerName){
//        this.age=age;
//        this.playerName=playerName;
//    }
}






