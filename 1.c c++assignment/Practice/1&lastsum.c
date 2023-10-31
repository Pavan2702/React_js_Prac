#include <stdio.h>

int main() {
    int num, n1, n2, sum;
    printf("Enter an integer: ");
    scanf("%d", &num);
    n2 = num % 10; // get the last digit
    while(num >= 10) 
	{
        num =num/ 10; // divide by 10 until we get to the first digit
    }
    n1 = num; // num now contains the first digit
    sum = n1 + n2;
    printf("The sum of the first and last digits is: %d\n", sum);
    return 0;
}

