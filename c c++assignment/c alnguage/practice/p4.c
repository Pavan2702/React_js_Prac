#include<stdio.h>
int main()
{
	int year,a;
	printf("enter the year:-");
	scanf("%d",&year);
	a=year/4;
	if(a%2==0)
	{
		printf("%d is leap year",year);
	}
	else
	{
		printf("%d is not leap year",year);
	}
	return 0;
}
