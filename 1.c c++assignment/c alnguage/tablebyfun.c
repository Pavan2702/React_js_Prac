#include<stdio.h>
void table (int a);
int main()
{
	int a;
	printf("enter the number:-");
	scanf("%d",&a);
	table(a);
	return 0;
}
void table(int a)

{
	int i;
for (i=1;i<=10;i++)
{
	printf("%d\n",i*a);
}
}
