#include<stdio.h>
void indian();
void french();
int main()
{
	char ch;
	printf("enter i for indian:-");
	scanf("%c",&ch);
	if(ch=='f')
	{
		french();
	}
	else
	{
		indian();
	}
};
void indian()
{
	printf("indian");
}
void french()
{
	printf("french");
}
