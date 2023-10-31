// WAP to print Fibonacci series up to given numbers...
#include<stdio.h>
int fibo(int n);
int main()
{
	int n;
	printf("enter the value of n:-");
	scanf("%d",&n);
	printf("fibonaci is %d ",fibo(n));//call function here...
	return 0;
}
int fibo(int n)
{
	int fibon=fibon+1;
	int fiboN=fibon+n+1;
	return fiboN;
}
