#include <stdio.h>

int fact(int);
void main()
{
    int num;
    
	printf("enter the num:- \n");
	scanf("%d",&num);


	printf("----------------------------------------------------------\n");    
    printf("The sum of the series is : %d\n",sum( int num) );
}

int fact(int n)
    {
        int num,sum,sumf;
        sumf=fact(1)/1+fact(num-1)/num-1;
        sum=sumf+fact(num)/num;
    return sum;
    }
