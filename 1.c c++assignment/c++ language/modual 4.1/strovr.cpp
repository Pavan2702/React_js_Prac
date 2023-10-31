// Write a program to concatenate the two strings using Operator Overloading
#include <iostream>
#include <string>

using namespace std;

class Concatenator 
{
public:
    Concatenator() {}
    Concatenator(string s) : str(s) {}

    Concatenator operator+(Concatenator& other) 
	{
        Concatenator result(this->str + other.str);
        return result;
    }

    string getStr() 
	{
        return str;
    }

private:
    string str;
};

int main() 
{
    Concatenator c1("Hello");
    Concatenator c2(" world!");

    Concatenator result = c1 + c2;

    cout << result.getStr() << endl;

    return 0;
}

