package SourcePackages;


public class PlayerInfo {
    // private variables declared
    // these can only be accessed by
    // public methods of class 
    private String playerName;
    private int age;


    // get method for name to access
    // private variable Name 
    public String getPlayerName() {
        return playerName;
    }

    // set method for name to access
    // private variable Name
    public void setPlayerName(String playerName) {
        this.playerName = playerName;
    }
    // get method for age to access
    // private variable age

    public int getAge() {
        return age;
    }
    // set method for age to access
    // private variable age

    public void setAge(int age) {
        this.age = age;
    }

    // default constructor
    public PlayerInfo() {
        this.playerName = "";
        this.age = 0;
    }

    // parameterized constructor
    public PlayerInfo(String playerName, int age) {
        this.playerName = playerName;
        this.age = age;
    }



    // method to display player info
    public void displayPlayerInfo() {
        System.out.println("Player Name: " + playerName);
        System.out.println("Player Age: " + age);
    }
    
}






