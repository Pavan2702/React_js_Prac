#include<iostream>
using namespace std;
class Details
{
	public:
	string name;
	int number;
	string actype;
	int amount;
	int addmoney;
	int depo;
	int wthdrw;
	int money;
	void Getdata()
	{
		cout<<"Name of the depositor: "<<endl;
		cin>>name;
		cout<<"Account Number: "<<endl;
		cin>>number;
		cout<<"Type of Account: "<<endl;
		cin>>actype;
		cout<<"Enter Balance amount in the account: "<<endl;
		cin>>amount;
	}
	void assign()
	{
		cout<<"Balance amount in the account: "<<amount<<endl;	
	}
	void deposite()
	{
		cout<<"Enter deposite amount: "<<endl;
		cin>>addmoney;
		depo=amount+addmoney;
		cout<<"Current Amount: "<<depo<<endl;
	}
	void withdraw()
	{
		cout<<"Enter Withdraw amount: "<<endl;
		cin>>money;
		wthdrw=depo-money;
	}
	void display_data()
	{
		cout<<"Name of Ac Holder: "<<name<<endl;
		cout<<"Available Amount: "<<wthdrw<<endl;
	}
};
int main()
{
	Details obj;
	obj.Getdata();
	obj.assign();
	obj.deposite();
	obj.withdraw();
	obj.display_data();
}
