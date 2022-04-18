package SourcePackages;

import java.util.Random;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        //System Objects which is similar to how we create variables in java
        Scanner in = new Scanner(System.in);   //now import the scanner class

        Random rand = new Random(); //random number generator

        //create Game Variables
        String[] enemies = {"Skeleton", "Zombie", "Warrior", "Assassin"};
        int maxEnemyHealth = 75;
        int enemyAttackDamage = 25;

        //Player Variables
        int health = 100;            // our player's health
        int attackDamage = 50;         // our player's attack damage
        int numHealthPots = 3;          // our player's number of health potions
        int healthPotionHealAmount = 30;
        int healthPotionDropChance = 50; //chance of health potion dropping from enemy

        //need a boolean variable
        boolean running = true; // game keeps running until condition is met to stop
        System.out.println("Welcome to the Dungeon!");

        Game:
        while (running) {
            System.out.println("----------------------------------------------------");

            int enemyHealth = rand.nextInt(maxEnemyHealth) + 1; //random number generator for max
            // enemy health
            String enemy = enemies[rand.nextInt(enemies.length)]; //random  generator for enemy
            // from array from 0 to max length of array
            System.out.println("\t# " + enemy + "appeared!");    //tab symbol
            

        }

    }
}
