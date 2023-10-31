#include<stdio.h>
float circle(float a);
float rect(float b,float c);
float sqr(float d);
int main()
{
	float a=3,b=4,c=5,d=6;

	printf("area of cir = %f\n",circle(a));
	printf("area of rect = %f\n",rect(b,c));
	printf("area of sqr = %f",sqr(d));
	return 0;
}
float circle(float a)
{
	return 3.14*a*a;
}
float rect(float b,float c)
{
	return b*c;
}
float sqr(float d)
{
	return d*d;
}
