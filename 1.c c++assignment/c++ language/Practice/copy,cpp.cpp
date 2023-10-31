#include<iostream>
using namespace std;
class cop
{
	public:
		int a;
		cop(int x)
		{
			a=x;
		}
		void display()
		{
			cout<<"a is "<<a<<endl;
		}
};
int main()
{
	
	cop obj(20);
	obj.display();
	
	cop obj1(obj);
	obj1.display();
	return 0;	
}
