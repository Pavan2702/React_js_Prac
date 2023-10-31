#include<iostream>
using namespace std;
class demo
{
	int a,b,c;
	public:
		void display(int x,int y,int z)
		{
			a=x;
			b=y;
			c=z;
		}
		void display1();
};
void demo::display1()
{
	cout<<"a is "<<a<<"b is "<<b<<"c is "<<c<<endl;
}
 int main()
 {
 	demo obj;
 	obj.display(10,20,30);
 	obj.display1();
 	return 0;
 }
