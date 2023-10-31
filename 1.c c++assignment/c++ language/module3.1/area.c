#include<stdio.h>
int main()
{
	float radius, length, breadth, base, height, area;
	int n;
	printf("enter 1 for find the radius of circle:  \n");
	printf("enter 2 for find the radius of rectangle:  \n");
	printf("enter 3 for find the radius of triangle:  ");
	scanf("%d",&n);
	switch (n)
	{	
		case 1:
    	//finding area of circle
		printf("Enter the radius of circle: ");
		scanf("%f", &radius);
		area = 3.14 * radius * radius;
		printf("Area of circle is: %f\n", area);
		break;
		case 2:
		//finding area of rectangle
		printf("Enter the length of rectangle: ");
		scanf("%f", &length);
		printf("Enter the breadth of rectangle: ");
		scanf("%f", &breadth);
		area = length * breadth;
		printf("Area of rectangle is: %f\n", area);
		break;
		case 3:
		//finding area of triangle
		printf("Enter the base of triangle: ");
		scanf("%f", &base);
		printf("Enter the height of triangle: ");
		scanf("%f", &height);
		area = 0.5 * base * height;
		printf("Area of triangle is: %f\n", area);
		break;
	}
return 0;
}
