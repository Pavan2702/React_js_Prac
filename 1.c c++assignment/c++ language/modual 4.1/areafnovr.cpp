/*? Write a program to calculate the area of circle, rectangle and triangle using 
Function Overloading 
? Rectangle: Area * breadth 
? Triangle: ½ *Area* breadth 
? Circle: Pi * Area *Area*/
#include <iostream>
using namespace std;
float PI = 3.14159;

float area(float radius) 
{
    return PI * radius * radius;
}

float area(float length, float width) 
{
    return length * width;
}

float area(float base, float height, char triangle) 
{
    return 0.5 * base * height;
}

int main() 
{
    float radius, length, width, base, height;
    char triangle;

    cout << "Enter radius of circle: ";
    cin >> radius;
    cout << "Area of circle is " << area(radius) << endl;

    cout << "Enter length and width of rectangle: ";
    cin >> length >> width;
    cout << "Area of rectangle is " << area(length, width) << endl;

    cout << "Enter base and height of triangle: ";
    cin >> base >> height;
    cout << "Area of triangle is " << area(base, height,1/2) << endl;
	return 0;
}

