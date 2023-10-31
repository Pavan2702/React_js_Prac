// WAP to print factorial of given number...
#include <stdio.h>
int main()
{
    int n, i, t1 = 0, t2 = 1, t3 = 0;

    printf("Enter a positive integer: ");
    scanf("%d", &n);

    // displays the first two terms which are 0 and 1
    printf("Fibonacci Series: %d, %d, ", t1, t2);

    

    for (t3 = t1 + t2;t3 <= n;t3++) 
	{
		
        printf("%d, ",t3);
        t3=t1+t2;
        t1 = t2;
        t2 = t3;
    }

    return 0;
}

