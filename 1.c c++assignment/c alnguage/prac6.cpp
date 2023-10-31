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
		void disp()
		{
			cout<<"a is "<<a<<endl;
		}
};
int main()
{
	demo obj(50);
	obj.disp();
	
	demo obj1(obj);
	obj1.disp();
	return 0;
}
