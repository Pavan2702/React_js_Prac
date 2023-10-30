#include<iostream>
using namespace std;
class A
{
	public:
	void display()
	{
		cout<<"this is class A"<<endl;
	}	
};
class B:public A
{
	public:
	void display1()
	{
		cout<<"this is class B"<<endl;
	}	
};
class C:public B
{
	public:
	void display2()
	{
		cout<<"this is class C"<<endl;
	}	
};
int main()
{
	C obj;
	obj.display();
	obj.display1();
	obj.display2();
	return 0;
}
