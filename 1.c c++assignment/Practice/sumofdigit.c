#include <stdio.h>

int main() 
{
    int num, sum = 0, digit;

    printf("Enter a number: ");
    scanf("%d", &num);

    while (num > 0) 
	{
        digit = num % 10;   // extract last digit
        sum =sum + digit;  // add digit to sum
        num = num / 10;   // remove last digit from number
    }

    printf("The sum of the digits is: %d\n", sum);

    return 0;
}

