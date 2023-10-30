// Function template to swap
// two numbers
#include <iostream>
using namespace std;
template <class T>
int swap_numbers(T x, T y)
{
	
    cout<<"enter the two number:- "<<endl;
    cin>>x>>y;
    cout<<"before swapping numbers:-"<<x<<","<<y<<endl;
    T t;
    t = x;
    x = y;
    y = t;
    cout<<"after swapping numbers:-" << x << "," << y << endl;
    return 0;
}
  
// Driver code
int main()
{
    int x,y;
    // Invoking the swap()
    swap_numbers(x, y);
    
    return 0;
}
