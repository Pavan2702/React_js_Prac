#include<stdio.h>
int main()
{
	int a,b,c;
	printf("enter the value of a");
	scanf("%d",&a);
	printf("enter the value of b");
	scanf("%d",&b);
	printf("enter the value of c");
	scanf("%d",&c);
	if(a>=b && a>=c)
	{
		printf("maximum value is a");
	}
	else if(b>=c && b>=a)
	{
		printf("maximum value is b");
	}
	else
	{
		printf("maximum value is c");
	}
	
	return 0;
	
}
