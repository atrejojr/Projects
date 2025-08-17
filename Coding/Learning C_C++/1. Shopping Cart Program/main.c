#include <stdio.h>
#include <string.h>                                 // contains functions related to strings

int main() {
    // This is a simple shopping cart program in C
    
    char item[50] = "";
    float price = 0.0f;                             // f can be omitted if it was a double
    int quantity = 0;
    char currency = '$';
    float total = 0.0f;

    printf("What item would you like to buy?: ");
    fgets(item, sizeof(item), stdin);               // a string likely to contain spaces 
    item[strlen(item) - 1] = '\0';

    printf("What is the price for each?: ");
    scanf("%f", &price);                            // float

    printf("How many would you like to buy?: ");
    scanf("%d", &quantity);                         // decimal

    total = price * quantity;
    printf("\nYou have bought %d %s(s)\n", quantity, item);
    printf("The total is %c%.2f",currency,  total);

    return 0;
}