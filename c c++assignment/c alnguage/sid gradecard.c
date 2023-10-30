#include<stdio.h>
int main()
{
	int marks;
	printf("enter the marks");
	scanf("%d",&marks);
	if(marks>90)
	{
		printf("a grade");
	}
	else if(marks>80)
	{
		printf("b grade");
	}
	else if(marks>70)
	{
		printf("c grade");
	}
	else if(marks>60)
	{
		printf("d grade");
	}
	else if(marks>45)
	{
		printf("e grade");
    }
    else 
	{
		printf("fail");
	}
	return 0;
}
	
