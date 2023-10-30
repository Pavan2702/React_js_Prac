#include <iostream>
using namespace std;

// function to find maximum number in an array
int findMax(int arr[], int size) 
{
    int max = arr[0]; // initialize max as first element of the array
    for (int i = 1; i < size; i++) 
	{
        if (arr[i] > max) {
            max = arr[i]; // update max if a larger element is found
        }
    }
    return max;
}

int main() {
    int arr[30]; // sample array
    cout<<"enter the number"<<endl;
    cin>>num;
    int size = sizeof(arr)/sizeof(arr[0]); // calculate size of the array
    int max = findMax(arr, size); // call the function to find max number
    cout << "The maximum number in the array is: " << max << endl;
    return 0;
}

