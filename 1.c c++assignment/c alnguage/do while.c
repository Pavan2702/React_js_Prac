#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct jewelry {
    int id;
    char name[50];
    double price;
    int stock;
};

typedef struct jewelry Jewelry;

int main() {
    Jewelry items[5];
    int choice, quantity, total = 0;
    
    // Initialize items
    items[0].id = 1;
    strcpy(items[0].name, "Gold necklace");
    items[0].price = 1500.0;
    items[0].stock = 10;

    items[1].id = 2;
    strcpy(items[1].name, "Diamond ring");
    items[1].price = 3000.0;
    items[1].stock = 5;

    items[2].id = 3;
    strcpy(items[2].name, "Pearl earrings");
    items[2].price = 1200.0;
    items[2].stock = 8;

    items[3].id = 4;
    strcpy(items[3].name, "Silver bracelet");
    items[3].price = 800.0;
    items[3].stock = 15;

    items[4].id = 5;
    strcpy(items[4].name, "Ruby pendant");
    items[4].price = 2500.0;
    items[4].stock = 3;

    printf("Welcome to our jewelry store!\n");
    do {
    	int i;
        printf("\nPlease select an item:\n");
        for( i = 0; i < 5; i++) {
            printf("%d. %s - $%.2f (%d in stock)\n", items[i].id, items[i].name, items[i].price, items[i].stock);
        }
        printf("6. Exit\n");
        scanf("%d", &choice);

        if(choice >= 1 && choice <= 5) {
            printf("How many would you like to buy?\n");
            scanf("%d", &quantity);

            if(quantity > items[choice-1].stock) {
                printf("Sorry, we don't have that many in stock.\n");
            } else {
                total = quantity * items[choice-1].price;
                items[choice-1].stock = quantity;
                printf("You bought %d %s for $%.2f.\n", quantity, items[choice-1].name, quantity * items[choice-1].price);
            }
        } else if(choice == 6) {
            printf("Thank you for shopping with us! Your total is $%.2f.\n", total);
            exit(0);
        } else {
            printf("Invalid choice.\n");
        }
    } while(1);
    return 0;
}

