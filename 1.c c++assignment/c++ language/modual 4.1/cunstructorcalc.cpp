// Write a program of Addition, Subtraction, Division, Multiplication using constructor.
#include <iostream>

using namespace std;

class Arithmetic 
{
   private:
      int num1, num2;

   public:
      Arithmetic(int n1, int n2) 
	  {
         num1 = n1;
         num2 = n2;
      }

      int add() 
	  {
         return num1 + num2;
      }

      int subtract() 
	  {
         return num1 - num2;
      }

      int multiply() 
	  {
         return num1 * num2;
      }

      float divide() 
	  {
         if (num2 == 0) 
		 {
            cout << "Error: Divide by zero." << endl;
            return 0;
         }
         else 
		 {
            return (float)num1 / (float)num2;
         }
      }
};

int main() 
{
   int n1, n2;
   cout << "Enter two numbers: ";
   cin >> n1 >> n2;

   Arithmetic a(n1, n2);

   cout << "Addition: " << a.add() << endl;
   cout << "Subtraction: " << a.subtract() << endl;
   cout << "Multiplication: " << a.multiply() << endl;
   cout << "Division: " << a.divide() << endl;

   return 0;
}

