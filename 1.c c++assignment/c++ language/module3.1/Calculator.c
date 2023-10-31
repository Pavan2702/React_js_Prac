#include<stdio.h>
int main()
{
	int a,b,n;
	printf("enter the value a:-");
	scanf("%d",&a);
	printf("enter the value b:-");
	scanf("%d",&b);
	printf("enter 1 for addition\n");
	printf("enter 2 for subtraction\n");
	printf("enter 3 for multiplication\n");
	printf("enter 4 for divison\n");
	printf("enter 5 for modulo\n");
	printf("enter n");
	scanf("%d",&n);
	switch(n)
	{
		case 1:
			printf("%d + %d = %d",a,b,n,n=a+b);
			break;
		case 2:
			printf("%d - %d = %d",a,b,n,n=a-b);
			break;
		case 3:
			printf("%d * %d = %d",a,b,n,n=a*b);
			break;
		case 4:
			printf("%d / %d = %d",a,b,n,n=a/b);
			break;
		case 5:
			printf("%d % %d = %d",a,b,n,n=a%b);	
	}
	return 0;
}
