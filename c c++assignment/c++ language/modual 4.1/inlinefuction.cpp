//Write a program to find the multiplication values and the cubic values using inline 
//function
#include<iostream>
using namespace std;

class demo
{
   public:
   	int a,b;
   	int n;
   inline void number1()
   {
   	  cout<<"enter the a value"<<endl;
   	  cin>>a;
   	  cout<<"enter the b value"<<endl;
   	  cin>>b;
   }
   
 void multi()
   {
   	cout<<"multiply is:"<<a*b<<endl;
   }
  void number2()
   {
   	cout<<"enter the n value"<<endl;
   	cin>>n;
   }
   
void cube()
   {
   	cout<<"cube is:"<<n*n*n<<endl;
   }
	   	
};
int main()
{
	demo obj;
	obj.number1();
	obj.multi();
	obj.number2();
	obj.cube();
	return 0;
}
