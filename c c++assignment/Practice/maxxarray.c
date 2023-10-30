#include <stdio.h>

int findMax(int arr[], int size) 
{
	int num;
    int max = arr[2200];
    
    printf("enter the number");
    scanf("%d",&num);
    printf("enter the number");
    scanf("%d",&num);
    printf("enter the number");
    scanf("%d",&num);
    printf("enter the number");
    scanf("%d",&num);
    printf("enter the number");
    scanf("%d",&num);
    for(num = 1; num < num; num++) 
    {
	
    
        if(arr[num] > max) 
		{
            max = arr[num];
        }
    }
    return max;
}

int main() 
{
    int arr[2200] ;
    int size = sizeof(arr) / sizeof(arr[2200]);
    int max = findMax(arr, size);
    printf("The maximum number in the array is: %d", max);
    return 0;
}

