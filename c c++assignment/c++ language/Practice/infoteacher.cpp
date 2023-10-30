#include<iostream>
using namespace std;
class info
{
	public:
		int id;
		string name;
		int age;
		string gender;
		void getinfo()
		{
		cout<<"enter your id "<<endl;
		cin>>id;
		cout<<"enter your name "<<endl;
		cin>>name;
		cout<<"enter your age "<<endl;
		cin>>age;
		cout<<"enter your gender "<<endl;
		cin>>gender;
		}
		void displayinfo()
		{
			cout<<".....infotmatin....."<<endl;
			cout<<"id is "<<id<<endl;
			cout<<"name is "<<name<<endl;
			cout<<"age is "<<age<<endl;
			cout<<"gender is "<<gender<<endl;
		}
};
class teacher:public info
{
	public:
		int salary;
		void getsalary()
		{
			cout<<"enter teacher's salary "<<endl;
			cin>>salary;
		}
		void displaysalary()
		{
			cout<<"teacher's salary is "<<salary<<endl;
		}
};
class principal:public info
{
	public:
		int salary;
		void getsalary()
		{
			cout<<"enter principal's salary "<<endl;
			cin>>salary;
		}
		void displaysalary()
		{
			cout<<"principal's salary is "<<salary<<endl;
		}
};
int main()
{
	teacher obj;
	principal obj1;
	obj.getinfo();
	obj.displayinfo();
	obj.getsalary();
	obj.displaysalary();
	obj1.getinfo();
	obj1.displayinfo();
	obj1.getsalary();
	obj1.displaysalary();
	return 0;
}
