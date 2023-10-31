//WAP to create simple calculator using class 
#include <iostream>

using namespace std;

class Calculator 
{
    public:
    	double num1, num2;
        void getNumbers() 
		{
            cout << "Enter numbers: ";
            cin >> num1;
            cout << "Enter numbers: ";
            cin >> num2;
        }
        void add() 
		{
            cout << "Addition = " << num1 + num2 << endl;
        }
        void subtract() 
		{
            cout << "substraction = " << num1 - num2 << endl;
        }
        void multiply() 
		{
            cout << "multiplication = " << num1 * num2 << endl;
        }
        void divide() 
		{
            if(num2 == 0) 
			{
                cout << "Cannot divide by zero." << endl;
            }
            else 
			{
                cout << "divide = " << num1 / num2 << endl;
            }
        }
};

int main() 
{
    Calculator calc;
    int choice;
    cout << "Enter your choice:\n";
    cout << "1. Add\n";
    cout << "2. Subtract\n";
    cout << "3. Multiply\n";
    cout << "4. Divide\n";
    cin >> choice;
    calc.getNumbers();
    switch(choice) 
	{
        case 1:
            calc.add();
            break;
        case 2:
            calc.subtract();
            break;
        case 3:
            calc.multiply();
            break;
        case 4:
            calc.divide();
            break;
        default:
            cout << "Invalid choice." << endl;
    }
    return 0;
}

