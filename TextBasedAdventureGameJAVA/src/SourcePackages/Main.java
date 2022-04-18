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
        int health = 100;               // our player's health
        int attackDamage = 50;          // our player's attack damage
        int numHealthPots = 3;          // our player's number of health potions
        int healthPotionHealAmount = 30;
        int healthPotionDropChance = 50; //chance of health potion dropping from enemy

        //need a boolean variable
        boolean running = true; // game keeps running until condition is met to stop
        System.out.println("Welcome to the Dungeon!");

        GAME:
        while (running) {
            System.out.println("----------------------------------------------------");

            int enemyHealth = rand.nextInt(maxEnemyHealth) + 1; //random number generator for max
            // enemy health
            String enemy = enemies[rand.nextInt(enemies.length)]; //random  generator for enemy
            // from array from 0 to max length of array
            System.out.println("\t# " + enemy + "appeared! #\n");    //tab symbol and the n makes
            // sure it moves on to the next line

//            TODO: Create another while loop to keep the game running until the player dies or
//             enemy dies since player is now in combat after the enemy appears

//            while (enemyHealth > 0 && health > 0) {
            while (enemyHealth > 0) {
                System.out.println("\tYour HP: " + health + "\n");
                System.out.println("\t" + enemy + "'s HP: " + enemyHealth + "\n");
                System.out.println("\tWhat would you like to do?\n");
                System.out.println("\t1. Attack");
                System.out.println("\t2. Drink Health Potion");
                System.out.println("\t3. Run Away!!!\n");

                String input = in.nextLine(); //in is the scanner object  and it grabs the next
                // line from the console
                if (input.equals("1")) {
                    int damageDealt = rand.nextInt(attackDamage) + 1;
//                    int damageDealt = rand.nextInt(attackDamage);
                    int damageTaken = rand.nextInt(enemyAttackDamage) + 1;
//                    int damageTaken = rand.nextInt(enemyAttackDamage);
                    enemyHealth -= damageDealt;
                    health -= damageTaken;
                    System.out.println("\t> You dealt " + damageDealt + " damage to " + enemy +
                            "\n");
                    System.out.println("\t> You took " + damageTaken + " damage from " + enemy +
                            "\n");
                    if (health <= 1) {
                        System.out.println("\t> You have taken too much damage!\n");
                        break;
                    }
                } else if (input.equals("2")) {
                    if (numHealthPots > 0) {
                        health += healthPotionHealAmount;
                        numHealthPots--; //decrement the number of health potions
                        //add feedaback for player
                        System.out.println("\t> You drank a health potion, healing yourself for " + healthPotionHealAmount + " HP\n\t> You now have + " + numHealthPots + " health potions left\n");
                    } else {
                        System.out.println("\t> You have no health potions! Defeat enemeies for a" +
                                " chance to get one!\n");
                    }

                } else if (input.equals("3")) {
                    System.out.println("\t> You ran away from " + enemy + "!\n");
                    continue GAME; //continue the game loop
                } else {
                    System.out.println("\t> Invalid input!\n");
                }
            }
            if (health <= 1) {
                System.out.println("\t> You have taken too much damage and you limp out of the " +
                        "dungeon, weak from battle.\n");
                break;
            }
            //system out line
            System.out.println(
                    "--------------------------------------------------------------------------------");
            System.out.println(" # " + enemy + " has been defeated! #\n");
            System.out.println(
                    "--------------------------------------------------------------------------------");
            System.out.println(" # You have " + health + " HP left #\n");
            if (rand.nextInt(100) < healthPotionDropChance) {
                numHealthPots++; //increment the number of health potions
                System.out.println(" # You have found a health potion from defeated " + enemy +
                        "!"); //add feedback for player
                System.out.println(" # You now have + " + numHealthPots + " health potion(s) left #\n");

            }
            System.out.println(
                    "--------------------------------------------------------------------------------");
            System.out.println("What would you like to do now?\n");
            System.out.println("1. Continue fighting");
            System.out.println("2. Exit dungeon");

            String input = in.nextLine();
            while (input.startsWith("1") || input.startsWith("2")) {
                if (input.equals("1")) {
                    System.out.println("\t> You continue to fight your adventure + \n");
                    continue GAME; //continue the game loop
                } else if (input.equals("2")) {
                    System.out.println("\t> You have exited the dungeon!\n");
                    break GAME; //break the game loop
                } else {
                    System.out.println("\t> Invalid input!\n");
                }
            }
        }
        System.out.println("############################################################################");

        System.out.println("# THANKS FOR PLAYING! #");
        
        System.out.println("############################################################################");
        
    }
}


