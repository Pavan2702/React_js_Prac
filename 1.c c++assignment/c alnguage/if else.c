#include<stdio.h>
int main()
{
	int value;
	printf("enter your value ");
	scanf("%d",&value);
	printf("you have enter %d\n",value);
	if(value>18)
	{
		printf("good morning");
	}
	else
	{
		printf("good evening");
	}
	return 0;
}

