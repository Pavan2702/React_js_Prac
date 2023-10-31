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
		printf("%d max value is a",a);
	
	}
	else if (a>c)
	{
		printf("%d max value is a",a);
	}
	else if(b>a)
	{
		printf("%d max value is b",b);
	}
	else if (b>c)
	{
		printf("%d max value is b",b);
	}
    else
	{
		printf(" %d> %d max value is c",c,b);
    }
	return 0;
}
