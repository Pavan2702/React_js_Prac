#include<stdio.h>
void table(int n);
int main()
{
	int n;
	printf("enter the number:- ");
	scanf("%d",&n);
	table(n);
}
void table(int n)
{
	int i;
	for(i=1;i<=10;i++)
	{
		printf("%d\n",i*n);
	}
}
