#include<iostream>
using namespace std;

class car
{
	public:
	int carno;
	string carname;
	string brand;
	car()
	{
		cout<<"hello i m default consrtuctor";
	}
	car(int x,string y,string z)
	{
		carno=x;
		carname=y;
		brand=z;
	}
	void display()
	{
		cout<<"car no is "<<carno<<" car name is "<<carname<<" brand is "<<brand<<endl;
	}
};
int main()
{
	car obj(1,"xuv,","Smahindra,");
	obj.display();
}
