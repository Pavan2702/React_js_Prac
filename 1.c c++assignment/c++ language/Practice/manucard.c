#include<stdio.h>
int main()
{
	int n,pizza,burger,sandwich,franki,quantity,price;
	printf("welcome\n");
	pizza = 150;
	burger = 80;
	sandwich = 70;
	franki = 50;
	printf("enter the value of n");
	scanf("%d",&n);
	switch(n)
		{
			case 1:
			printf("what do you want to order!!!");
			printf("quantity of burger?");
			scanf("%d",&quantity);
			price=quantity*burger;
			printf("total %d",price);
			break;
		}
		
		
}
