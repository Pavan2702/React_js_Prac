#include<iostream>
using namespace std;
class student
{
	public:
		int id;
		string name;
		void getdata()
		{
		
		cout<<"enter id: "<<endl;
		cin>>id;
		cout<<"enter name: "<<endl;
		cin>>name;
	}
	void setdata()
	{
		cout<<"id is: "<<id<<"name is: "<<name<<endl;
	}
		
};


int main()
{
	student s1;
	student s2;
	s1.getdata();
	s1.setdata();
	s2.getdata();
	s2.setdata();
	return 0;
	
}
