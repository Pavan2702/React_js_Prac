/* Write a program to find the max number from given two numbers using 
friend function*/
#include <iostream>
using namespace std;

class MaxNumber 
{
   public:
   	int n1,n2;
   	void get()
   	{	
    cout << "Enter two numbers: ";
    cin >> n1 >> n2;
   	}
    
    friend int findMax(MaxNumber);

};

int findMax(MaxNumber obj) 
{
    if (obj.n1 > obj.n2)
    {
    	cout<<"maximum number is:- "<<obj.n1<<endl;
	}
    else
    {
    	cout<<"maximum number is:- "<<obj.n2<<endl;
	}
}

int main() 
{
    MaxNumber obj1;
    obj1.get();
    findMax(obj1);

    return 0;
}

