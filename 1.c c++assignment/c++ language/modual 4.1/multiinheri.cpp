/* Create a class person having members name and age. Derive a class student 
having member percentage. Derive another class teacher having member 
salary. Write necessary member function to initialize, read and write data. 
Write also Main function (Multiple Inheritance)*/
#include <iostream>
using namespace std;

// Person class
class Person 
{
    
public:
	string name;
    int age;
    void setData() 
	{
        cout << "Enter name: ";
        cin >> name;
        cout << "Enter age: ";
        cin >> age;
    }
    void displayData() 
	{
        cout << "Name: " << name << endl;
        cout << "Age: " << age << endl;
    }
};

// Student class derived from Person
class Student : public Person 
{   
public:
	float percentage;
    void setPercentage() 
	{
        cout << "Enter percentage: ";
        cin >> percentage;
    }
    void displayPercentage() 
	{
        cout << "Percentage: " << percentage << "%" << endl;
    }
};

// Teacher class derived from Person
class Teacher : public Person 
{
public:
	float salary;
    void setSalary() 
	{
        cout << "Enter salary: ";
        cin >> salary;
    }
    void displaySalary() 
	{
        cout << "Salary: Rs" << salary << endl;
    }
};

// Main function
int main() 
{
    // Create objects of Student and Teacher classes
    Student student;
    Teacher teacher;

    // Set data for Student and Teacher objects
    cout << "Enter student details:" << endl;
    student.setData();
    student.setPercentage();
    cout << endl;

    cout << "Enter teacher details:" << endl;
    teacher.setData();
    teacher.setSalary();
    cout << endl;

    // Display data for Student and Teacher objects
    cout << "Student details:" << endl;
    student.displayData();
    student.displayPercentage();
    cout << endl;

    cout << "Teacher details:" << endl;
    teacher.displayData();
    teacher.displaySalary();
    cout << endl;

    return 0;
}

