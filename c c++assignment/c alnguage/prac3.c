#include<stdio.h>
void num(int n);
int main()
{
	int n;
	printf("enter the num");
	scanf("%d",&n);
	num(n);
	return 0;
}
void num(int n)
{
	int i;
	for(i=1;i<=10;i++)
	{
		printf("%d\n",i*n);
	}
}
