#include<stdio.h>
int main()
{
	int a,b,n;
	printf("enter the number a");
	scanf("%d",&a);
	printf("enter the number b");
	scanf("%d",&b);
	printf("enter format");
	scanf("%d",&n);
	switch (n)
	{
		case 1:
			n=a+b;
			printf("%d",n);
			break;
		case 2:
			n=a-b;
			printf("%d",n);
			break;
		case 3:
			n=a*b;
			printf("%d",n);
			break;
		case 4:
			n=a/b;
			printf("%d",n);
			break;	
	}
	return 0;
}
