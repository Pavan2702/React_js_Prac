#include<stdio.h>
int main()
{
	int a,b,c;
	
	printf("enter the first num:-");
	scanf("%d",&a);
	
	printf("enter the first num:-");
	scanf("%d",&b);
	
	printf("number before swapping a is %d b is %d\n",a,b);
	c=a;
	a=b;
	b=c;
	printf("number after swapping a is %d b is %d",a,b);

	return 0;
}
