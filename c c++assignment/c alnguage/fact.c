#include<stdio.h>
int fact(int n);
int main()
{
	int n;
	printf("enter the value of n ");
	scanf("%d",&n);
	printf("factorial is:-%d",fact(n));
	return 0;
	
}
int fact(int n)
{
	if(n==0)
	{
		return 1;
	}
	int factn=fact(n-1);
	int factN=factn*n;
	return factN;
}
