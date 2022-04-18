package SourcePackages;

public class PlayerInfo {

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


public class PlayerInfoTest{
    public static void main(String args[]){
        PlayerInfo obj = new PlayerInfo();
        obj.setPlayerName("Mario");
        obj.setAge(32);
        System.out.println("Employee Name: " + obj.playerName());
        System.out.println("Your Hero's Age: " + obj.age());
    }
}



