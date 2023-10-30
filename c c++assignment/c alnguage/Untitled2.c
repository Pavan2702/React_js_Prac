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
	if(a>b)
	{
		printf("max value is a");
	
	}
	else if (a>c)
	{
		printf("max value is a");
	}
	else if(b>a)
	{
		printf("max value is b");
	}
	else if (b>c)
	{
		printf("max value is b");
	}
	else if (c>a)
	{
		printf("max value is c");
	}
	else if (c>b)
	{
		printf("max value is c");
	}
	return 0;
}
