#include<stdio.h>
int main()
{
	int a;
	printf("enter the value of a:-");
	scanf("%d",&a);	
	int i;
	while (i<=a)
	{
		if (i%2==1)
		{
		printf("number is odd\n");
		printf("%d\n",i);
		i++;
		}
		else 
		{
		printf("number is even\n");
		printf("%d\n",i);
		i++;
		}
	}

	return 0;
}

