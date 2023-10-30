#include<iostream>
using namespace std;
class demo
{
	public:
		int a;
		demo(int x)
		{
			a=x;
		}
		demo(demo &t)
		{
			a=t.a;
		}
		void display()
		{
			cout<<"a is "<<a;
		}
};
int main()
{
	
	demo obj(20);
	obj.display();
	
	demo obj1(obj);
	obj1.display();
	return 0;
}
