// WAP to find simple interest
#include<stdio.h>
int main()
{
	float amount,rate,time,a,si;
	printf("enter the amount:-");
	scanf("%f",&amount);
	printf("enter the intrest rate:-");
	scanf("%f",&rate);
	printf("enter the time:-");
	scanf("%f",&time);
	a=amount*rate*time;
	si=a/100;
	printf("%f is the simple intrest for %f years",si,time);
	return 0;
}
