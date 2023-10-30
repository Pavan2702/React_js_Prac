#include<iostream>
using namespace std;
class mother
{
	public:
		int pocketmoney1;
		void givemoney()
		{
			cout<<"enter pocketmoney:-"<<endl;
			cin>>pocketmoney1;
		}
		void displaymoney()
		{
			cout<<"pocket money given by mother "<<pocketmoney1<<endl;		
		}
};
class father
{
	public:
		int pocketmoney2;
		void givemoney()
		{
			cout<<"enter pocketmoney:-"<<endl;
			cin>>pocketmoney2;
		}
		void displaymoney()
		{
			cout<<"pocket money given by father "<<pocketmoney2<<endl;
		}
};
class child:public father,public mother
{
	public:
		void sum()
		{
			int money;
		cout<<"pocket money get from perents "<<money<<endl;
		}
		
};
int main()
{
	int money,pocketmoney1,pocketmoney2;
	mother obj;
	father obj1;
	child obj2;
	obj.givemoney();
	obj.displaymoney();
	obj1.givemoney();
	obj1.displaymoney();
	
	
	money=pocketmoney1 + pocketmoney2;
    obj2.sum();
	return 0;
	
}
