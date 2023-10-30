/* Write a program to Mathematic operation like Addition, Subtraction, 
Multiplication, Division Of two number using different parameters and 
Function Overloading*/
#include<iostream>
using namespace std;
class Mathoprater
{
	public:
		int add(int a,int b)
		{
			cout<<"addition is: "<<a+b<<endl;
		}
		int sub(int a,int b)
		{
			cout<<"substraction is: "<<a-b<<endl;
		}
		int mult(int a,int b)
		{
			cout<<"multiplication is: "<<a*b<<endl;
		}
		int div(int a,int b)
		{
			cout<<"division is: 
			
			"<<a/b<<endl;
		}
};
int main()
{
	int a,b;
	cout<<"enter the values:-"<<endl;
	cin>>a>>b;
	Mathoprater obj;
	obj.add(a,b);
	obj.sub( a, b);
	obj.mult( a, b);
	obj.div( a, b);
}
