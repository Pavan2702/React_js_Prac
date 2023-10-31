#include<stdio.h>
int main()
{
	int marks;
	printf("enter the marks");
	scanf("%d",&marks);
	if (marks>85)
	{
		printf("a grade");
	}
	else if (marks>75)
	{
		printf("b grade");
	}
	else if (marks>65)
	{
		printf("c grade");
	}
	if (marks>55)
	{
		printf("d grade");
	}
	if (marks>45)
	{
		printf("d grade");
	}
	else if (marks>35)
	{
		printf("e grade");
	}
	else
	{
		printf("you are fail");
	}
	return 0;
}
