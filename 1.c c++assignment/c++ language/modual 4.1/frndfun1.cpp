//friend function swap two numbers without using third variable
#include<iostream>
using namespace std;
class demo
{
	int a,b;
	public:
		 demo()
		{
			cout<<"Before swapping..\n";
			cout<<"enter value of a:"<<endl;
			cin>>a;
			cout<<"enter the value of b:"<<endl;
			cin>>b;
		}
		
		friend void swap(demo);
};
void swap(demo x)
		{
			x.a=x.a+x.b;
			x.b=x.a-x.b;
			x.a=x.a-x.b;
		cout<<"After swapping..\n";
		cout<<"a:-"<<x.a<<endl;
		cout<<"b:-"<<x.b<<endl;
	    }
int main()
{
	demo obj;
	swap(obj);
	return 0;
}
