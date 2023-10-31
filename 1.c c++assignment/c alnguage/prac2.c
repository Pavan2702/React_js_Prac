#include<stdio.h>
int sum(int a,int b);
int main()
{
	int x,y,z;
	printf("enter x value ");
	scanf("%d",&x);
	printf("enter y value ");
	scanf("%d",&y);
	z=sum(x,y);
	printf("%d",z);
	return 0;
}
int sum(int m,int n)
{
	return m+n;
}
