/*Assume that the test results of a batch of students are stored in three different 
classes. Class Students are storing the roll number. Class Test stores the marks 
obtained in two subjects and class result contains the total marks obtained in 
the test. The class result can inherit the details of the marks obtained in the 
test and roll number of students. (Multilevel Inheritance)*/
#include <iostream>
using namespace std;

// base class to store roll number
class Students 
{
  public:
  	int rollNo;
    void setRollNo() 
	{
      cout<<"enter the rollnumber: "<<endl;
      cin>>rollNo;
   }
};

// derived class to store marks in two subjects
class Test : public Students 
{
  public:
  	int subject1, subject2;
    void setMarks() 
	{
     cout<<"enter the marks of Phy: "<<endl;
     cin>>subject1;
     cout<<"enter the marks of mth: "<<endl;
     cin>>subject2;
    }
};

// derived class to calculate and store total marks
class Result : public Test 
{
  public:
  	int totalMarks;
    void calculateTotal() 
	{
      totalMarks = subject1 + subject2;
    }
    void display() 
	{
      cout << "Roll No: " << rollNo << endl;
      cout << "Physics Marks: " << subject1 << endl;
      cout << "Maths Marks: " << subject2 << endl;
      cout << "Total Marks: " << totalMarks << endl;
    }
};

int main() 
{
  Result student1;

  student1.setRollNo();
  student1.setMarks();
  student1.calculateTotal();
  student1.display();

  return 0;
}

