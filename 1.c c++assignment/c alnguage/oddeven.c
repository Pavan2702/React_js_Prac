#include<stdio.h>
int main()
{
	int  i,n;
	printf("enter the  value of n");
	scanf("%d",&n);
    printf("for odd number\n");
	for(i=1;i<=n;i=i+2)
	{
		printf("%d\n",i);	
	}
	printf("for even number\n");
	for(i=2;i<=n;i=i+2)
	{
		printf("%d\n",i);
	}
	return 0;
}
