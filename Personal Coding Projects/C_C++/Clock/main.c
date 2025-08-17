#include <stdio.h>                      // allows for input/output operations
#include <stdbool.h>                    // allows for boolean operations

int main(){

    //This is my first C program! 

    /*
        This program is made to test the waters and familiarize myself with C/C++
        
        variable = reusable container for a value
        format specifiers = tokens thyat begin with a % symbol followed by a character to specify a data type and optional modifiers (width, precision, flags), control how data is displayed/interpreted
            width = displays a certain number of characters when specified
            precision = can help display sig figs and round

        int -- whole numbers o/w truncate (4 bytes)
        float -- you can only store 6-7 digits after the decimal (4 bytes)
        double -- higher decimal precision than a float, can store 15-16 digits after the decimal (8 bytes)
        char -- stores a single character, uses '' (1 byte)
        char[] -- substitute for a string, this is an array of characters, uses "", numbers can be included but cannot be used for math (size varies)
        bool -- binary, either true (1) or false (0), used mostly internally through if. for, else but can still be printed (1 byte, requires <stdbool.h>)

        arithmetic operators = + - * / % ++ --

    */

    int age = 21;                       // %d
    int year = 2025;
    float gpa = 3.48;                   // %f, %.1f, %.2f, ..., %.7f,
    float price = 643.44;
    double pi = 3.14159265358979;       // %f, %lf, %.1lf, %.2f, ..., %.16f
    double e = 2.718281828459045;
    char grade = 'A';                   // %c
    char symbol = '*';
    char dog[] = "Rocky";               // %s
    char pw[] = "password123";
    bool isOnline = 1;                  // %d
    bool reboot = false;

    // width (left/right justification)
    int num1 = 1;                       // ..., %-3d, %-2d, %d, %2d, %3d, ... (makes spaces)
    int num2 = 10;                      // ..., %-03d, %-02d, %d, %02d, %03d, ... (makes zeros)
    int num3 = -100;                    // %+d (adds the sign given in the variable)

    // precision
    float price1 = 19.99;
    float price2 = 1.50;
    float price3 = -100.00;

    // arithmetic
    int x = 10;
    int y = 3;
    int z = 0;

    // user input                       // empty variables might have saved values from other programs/runs or be undefined
    int askAge = 0;                    
    float askGpa = 0.0f;                // f is just a note for others to specify float, not needed for doubles
    char askGrade = '\0';               // \0 is a null terminator
    char askName[30] = "";              // 30 bytes/characters allocated space


    printf("Hello World!\n");
    printf("My name is Alberto.\n");

    printf("I am %d years old.\n", age);
    printf("The year is currently %d.\n", year);

    printf("My GPA as a rising senior is %f or %.2f.\n", gpa, gpa);
    printf("SPY is currently priced at $%.2f per share.\n", price);

    printf("The value of pi is %lf or %.14lf to be more precise.\n", pi, pi);
    printf("The value of e is about %.15lf.\n", e);

    printf("Last semester I got a(n) %c in Philosophy.\n", grade);
    printf("I usually use %c to correct misspell errors.\n", symbol);
    
    printf("My dog's name is %s.\n", dog);
    printf("A bad password is %s.\n", pw);

    if (reboot == 0){
        printf("System online: %d \n", isOnline);
    } else{
        printf("Needs reboot...\n");
    }

    // width
    printf("%3d\n", num1);
    printf("%d\n", num2);
    printf("%+d\n", num3);

    // precision
    printf("%.1f\n", price1);           // will truncate and round up
    printf("%+7.2f\n", price2);
    printf("%+.2f\n", price3);

    // arithmetic
    z = x + y;
    printf("%d\n", z);
    z = x - y;
    printf("%d\n", z);
    z = x * y;
    printf("%d\n", z);
    z = x / y;                      // int cannot store decimal portions AND int division will lead to the same problem, instead make z and y floats
    printf("%d\n", z);
    z = x % y;                      // modulous gives remainder, helps determine even/odd
    printf("%d\n", z);          
    x++;                            // augmented assignment operators:
    printf("%d\n", x);
    x--;
    printf("%d\n", x);
    x+=2;                           // is the same as x = x + 2
    printf("%d\n", x);
    x-=2;                           // is the same as x = x - 2
    printf("%d\n", x);
    x*=2;                           // is the same as x = x * 2
    printf("%d\n", x);
    x/=2;                           // is the same as x = x / 2
    printf("%d\n", x);

    // user input
    printf("Enter your age: ");
    fflush(stdout);                 // forces the prompt to display before waiting for input
    scanf("%d", &askAge);
    printf("Enter your gpa: ");     
    fflush(stdout);
    scanf(" %.2f", &askGpa);         // make sure to add a space before % as there is usually a \n in buffer
    printf("Enter your letter grade: ");
    fflush(stdout);
    scanf(" %c", &askGrade);
    printf("Enter your first name: ");
    fflush(stdout);                 // scanf will stop reading after encountering any spaces, bad for multiple words, use fgets instead
    fgets(askName, sizeof(askName), stdin)               

    return 0;                       // helps with backwards compatibility
}

1:03:55