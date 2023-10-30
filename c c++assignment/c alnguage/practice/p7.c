#include<stdio.h>
int main()
{
	int maths,physics,chemistry,total;
	printf("enter the marks of maths");
	scanf("%d",&maths);
	if(maths>=65)
	{
		printf("pass\n");
	}
	else
	{
		printf("fail\n");
	}
	printf("enter the marks of pysics");
	scanf("%d",&physics);
	 if(physics>=55)
	{
		printf("pass\n",physics);
	}
	else
	{
		printf("fail\n");
	}
	printf("enter the marks of chemistry");
	scanf("%d",&chemistry);
	
	
	 if (chemistry>=50)
	{
		printf("pass\n",chemistry);
	}
	else
	{
		printf("fail\n");
	}
	
	total=maths+physics+chemistry;
	printf("total marks is %d\n",total);
	if(total>=190)
	{
		printf("eligible for admission");
	}
	else
	{
		printf("not eligible");
	}
	return 0;
}
