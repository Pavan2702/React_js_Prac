#include<stdio.h>
int main()
{
	int a,b,c;
	printf("enter the value of a");
	printf("enter the value of b");
	printf("enter the value of c");
	scanf("%d",&a);
	scanf("%d",&b);
	scanf("%d",&c);
	if(a>b&&a>c)
	{
		printf("max value is a");
	
	}
	else if(b>a&&b>c)
	{
		printf("max value is b");
	}
	else
	{
		printf("max value is v");
	}
	return 0;
}
