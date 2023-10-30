#include<stdio.h>
void indian();
void french();
int main()
{
	char ch;
	printf("i for indian");
	scanf("%c",&ch);
	if(ch=='i')
	{
		indian();
	}
	else
	{
		french();
	}
}
