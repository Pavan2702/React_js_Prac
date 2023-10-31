 /*Assume a class cricketer is declared. Declare a derived class batsman from 
cricketer. Data member of batsman. Total runs, Average runs and best 
performance. Member functions input data, calculate average runs, Display 
data. (Single Inheritance)*/
#include<iostream>
using namespace std;
class batsman 
{
  public:
  	int Runs;
  	int matches;
  	int notout;
  	int battingavg;
  	int dismissed;
  	double average;
  	
  	void Run()
  	{
  		cout<<"Enter the total Runs:-";
  		cin>>Runs;
  		cout<<"Enter the number of matches:-";
  		cin>>matches;
  		cout<<"Enter the number of NOT OUT:-";
  		cin>>notout;
  		
  		dismissed=matches-notout;
  		
  		average=Runs/dismissed;
  		
	}
  
};

class cricketer : public batsman 
{
	public:
  void displayData() 
  {
    cout << "Total Runs: " << Runs <<endl;
    cout<<"matches are:"<<matches<<endl;
    cout<<"NOT OUT inniges are:"<<notout<<endl;
    cout << "Numer of times batsman dismissed: " << dismissed << endl;
    cout << "Best Performance: " << average <<endl;
  }
};
int main()
{
	cricketer obj;
	obj.Run();
	obj.displayData();
}


