#include<iostream>
using namespace std;
class demo
{
	int a,b,c;
	public:
		void dispaly(int x,int y,int z)
		{
			a=x;
			b=y;
			c=z;
		}
		void display();
};
void demo::display()
{
	cout<<"a is "<<a<<"b is "<<b<<"c is "<<c<<endl;
}
 int main()
 {
 	demo obj;
 	obj.display(10,20,30);
 	return 0;
 }
